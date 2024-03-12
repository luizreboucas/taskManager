import express from "express";
import UserController from "../controllers/UserController";
const router = express.Router();

router
    .get('/user', UserController.getUsers)
    .post('/user', UserController.createUser)

export default router;