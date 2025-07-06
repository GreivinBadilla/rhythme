import express from 'express';
import { login, register, loginWithGoogle } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google', loginWithGoogle);
 
export default router;