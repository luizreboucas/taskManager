import express from 'express';
import TaskController from '../controllers/TaskController';

const Router = express.Router();

Router
    .get('/task', TaskController.getTasks)
    .get('/task/:userId', TaskController.getTasksByUser)
    .post('/task', TaskController.createTask)
    .put('/task/:taskId', TaskController.atualizarTask)
    .delete('/task/:taskId', TaskController.deleteTask)

export default Router