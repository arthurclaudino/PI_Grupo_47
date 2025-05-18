import express from 'express';
import { getPreferences, savePreferences } from '../controllers/preferencesController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getPreferences);
router.post('/', authenticateToken, savePreferences);

export default router;
