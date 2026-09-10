import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { getTodos, createTodo } from '../controllers/todoControllers';
import { validateRegister, validateLogin, validateTodo } from '../middleware/validator';
import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

// ATHENTICATION ROUTES
router.post('/auth/register', validateRegister, register);
router.post('/auth/login', validateLogin, login);

// TODO ROUTES (Protected)
router.get('/todos', verifyToken, getTodos);
router.post('/todos', verifyToken, validateTodo, createTodo);

export default router;