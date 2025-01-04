import { Router } from 'express';
import sessionController from '../controllers/session.controller.js';

const sessionService = new sessionController();

const router = Router();

router.post('/register', sessionService.register);

export default router;