import express from 'express';
import UserController from '../controllers/UserController';
import isAuthenticated from '../middlewares/auth';
const router = express.Router();

router
  .get('/user', isAuthenticated, UserController.getUsers)
  .post('/user', UserController.createUser);

export default router;
