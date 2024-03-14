import express from 'express';
import TaskController from '../controllers/TaskController';
import isAuthenticated from '../middlewares/auth';

const Router = express.Router();

Router
    .get('/task', TaskController.getTasks)
    .get('/task/:userId',isAuthenticated, TaskController.getTasksByUser)
    .post('/task',isAuthenticated, TaskController.createTask)
    .put('/task/:taskId',isAuthenticated, TaskController.atualizarTask)
    .delete('/task/:taskId',isAuthenticated, TaskController.deleteTask)

export default Router