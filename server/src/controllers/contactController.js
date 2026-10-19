import { Contact } from '../models/Contact.js';
import { getDBStatus } from '../config/db.js';
import nodemailer from 'nodemailer';

// In-memory fallback if MongoDB connection is pending or fails
const inMemoryContacts = [];

// Simple HTML tag sanitization helper
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .trim();
};

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message, honeypot } = req.body;

    // 1. Honeypot check - bot prevention
    if (honeypot) {
      console.warn(`[Spam Blocked] Honeypot triggered from IP: ${req.ip}`);
      // Return 200 to not alert spam bots, but do not process
      return res.status(200).json({
        success: true,
        message: 'Message received successfully!',
      });
    }

    // 2. Sanitize inputs
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanSubject = sanitizeInput(subject);
    const cleanMessage = sanitizeInput(message);

    // 3. Validation
    const errors = [];
    if (!cleanName || cleanName.length < 2) errors.push('Name must be at least 2 characters.');
    if (!cleanEmail || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(cleanEmail)) {
      errors.push('Please enter a valid email address.');
    }
    if (!cleanSubject || cleanSubject.length < 3) errors.push('Subject must be at least 3 characters.');
    if (!cleanMessage || cleanMessage.length < 10) errors.push('Message must be at least 10 characters.');

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    let savedRecord = null;
    const dbStatus = getDBStatus();

    // 4. Save to MongoDB if connected, otherwise fallback
    if (dbStatus.connected) {
      savedRecord = await Contact.create({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        ipAddress,
        userAgent,
      });
    } else {
      const fallbackEntry = {
        _id: 'mem_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        ipAddress,
        userAgent,
        createdAt: new Date(),
        status: 'new (in-memory fallback)',
      };
      inMemoryContacts.push(fallbackEntry);
      savedRecord = fallbackEntry;
      console.warn('[Contact] Saved in fallback memory store (MongoDB disconnected).');
    }

    // 5. Optional email dispatch if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587', 10),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || 'vphandia7376@gmail.com',
          replyTo: cleanEmail,
          subject: `Portfolio Inquiry: ${cleanSubject} (from ${cleanName})`,
          text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nIP: ${ipAddress}\n\nMessage:\n${cleanMessage}`,
        });
        console.log(`[Email] Notification email successfully sent for message ID: ${savedRecord._id}`);
      } catch (mailErr) {
        console.error(`[Email] Failed to send notification email: ${mailErr.message}`);
        // Do not fail the client response since the message is securely stored in DB
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been sent successfully.',
      referenceId: savedRecord._id,
      timestamp: savedRecord.createdAt,
    });
  } catch (error) {
    next(error);
  }
};

export const getContactStats = async (req, res, next) => {
  try {
    const dbStatus = getDBStatus();
    if (dbStatus.connected) {
      const count = await Contact.countDocuments();
      return res.json({ success: true, count, storage: 'mongodb' });
    }
    return res.json({ success: true, count: inMemoryContacts.length, storage: 'memory-fallback' });
  } catch (error) {
    next(error);
  }
};
