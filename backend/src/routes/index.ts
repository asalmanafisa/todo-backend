import { Router } from 'express';
import authRoutes from './authRoutes';
import todoRoutes from './todoRoutes';
import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

router.use('/auth', authRoutes);
router.use('/todos', verifyToken, todoRoutes);

export default router;