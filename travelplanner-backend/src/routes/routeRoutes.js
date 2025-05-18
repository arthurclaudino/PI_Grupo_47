import express from 'express';
import { generateRoute } from '../controllers/routeController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.get('/', authenticateToken, generateRoute);

export default router;
