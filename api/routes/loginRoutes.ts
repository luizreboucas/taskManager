import express from 'express';
import UserController from '../controllers/UserController';
import LoginController from '../controllers/LoginController';
const router = express.Router();

router.post('/login', LoginController.login);

export default router;
