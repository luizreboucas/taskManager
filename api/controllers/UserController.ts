import { Request, Response } from "express";
import User from "../models/userModel";

class UserController {

    static getUsers = async(req: Request,res: Response) => {
        try {
            const users = await User.find().populate('tasks').exec();
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
        }
    }

    static createUser = async(req: Request, res: Response) => {
        try {
            const {nome, email, senha} = req.body
            const user = new User({nome, email, senha})
            user.save();
            res.status(201).json({message: "usuário criado com sucesso", user})
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserController