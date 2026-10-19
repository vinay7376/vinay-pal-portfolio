import express from 'express';
import { getHealth, getProjects, getProfile } from '../controllers/portfolioController.js';
import { apiLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.use(apiLimiter);

router.get('/health', getHealth);
router.get('/projects', getProjects);
router.get('/profile', getProfile);

export default router;
