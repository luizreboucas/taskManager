import { Request, Response } from 'express';
import User from '../models/userModel';
import { hash } from 'bcryptjs';

class UserController {
  static getUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.find().populate('tasks').exec();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  };

  static createUser = async (req: Request, res: Response) => {
    try {
      const { nome, email, senha } = req.body;
      const hashedPassword = await hash(senha, 8);

      const user = new User({ nome, email, hashedPassword });

      if (await User.findOne({ email: email })) {
        throw new Error('email já cadastrado');
      }

      user.save();
      res.status(201).json({ message: 'usuário criado com sucesso', user });
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;
