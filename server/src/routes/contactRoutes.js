import express from 'express';
import { submitContact, getContactStats } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// POST /api/contact - submit contact form with strict rate limiting & spam prevention
router.post('/', contactLimiter, submitContact);

// GET /api/contact/stats - count of inquiries
router.get('/stats', getContactStats);

export default router;
