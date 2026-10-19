import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, '../../client/dist');

const app = express();
const PORT = process.env.PORT || 5051;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Security headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: false, // allow local dev styles & font CDN
}));

// CORS setup
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const allowed = [
      CLIENT_ORIGIN,
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5174',
      'http://localhost:5051',
      'http://127.0.0.1:5051',
    ];
    if (allowed.includes(origin) || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error('Blocked by CORS policy'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsers with error tolerance
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '20kb' }));

// Trust proxy for rate limiting behind reverse proxies
app.set('trust proxy', 1);

// Mount API routes
app.use('/api', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// If client build exists in client/dist, serve static production files
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  // Root fallback / info
  app.get('/', (req, res) => {
    res.json({
      status: 'online',
      message: 'Vinay Pal Portfolio API Server is running.',
      documentation: {
        health: 'GET /api/health',
        projects: 'GET /api/projects',
        profile: 'GET /api/profile',
        contact: 'POST /api/contact',
      },
    });
  });
}

// 404 Handler for undefined API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.method} ${req.originalUrl} not found on this server.`,
  });
});

// Centralized error handler
app.use(errorHandler);

// Global process guardrails
process.on('uncaughtException', (err) => {
  console.error('[Process Uncaught Exception]:', err.message || err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[Process Unhandled Rejection]:', reason);
});

// Start server listening on 0.0.0.0
const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Portfolio backend running on port ${PORT} (0.0.0.0)`);
    console.log(`[Server] Health check available at http://127.0.0.1:${PORT}/api/health`);
  });
};

startServer();
