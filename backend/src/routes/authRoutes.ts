import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { validateRegister, validateLogin } from '../middleware/validator';

const router = Router();

// POST /api/auth/register - Datakan user baru
router.post('/register', validateRegister, register);

// POST /api/auth/login - Login dan daptkan token
router.post('/login', validateLogin, login);

export default router;