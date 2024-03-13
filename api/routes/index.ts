import express, { Express } from 'express';
import userRoutes from './userRoutes';
import taskRoutes from './taskRoutes';
import cors from 'cors';
import loginRoutes from './loginRoutes';

const routes = (app: Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(userRoutes);
  app.use(taskRoutes);
  app.use(loginRoutes);
};

export default routes;
