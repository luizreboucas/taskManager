import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import User from '../models/userModel';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/authConfig';

class LoginController {
  static login = async (req: Request, res: Response) => {
    try {
      const { email, senha } = req.body;
      if (!email || !senha) {
        return res.status(404).json({ message: 'dados incompletos' });
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error('Usuário ou senha incorretos');
      }

      const compararSenha = compare(senha, user.senha as string);

      if (!compararSenha) {
        throw new Error('Usuário ou senha incorretos');
      }

      const token = sign({}, authConfig.jwt.secret, {
        subject: user?._id.toString(),
        expiresIn: authConfig.jwt.expiresIn,
      });

      const result = {
        user,
        token,
      };

      res.status(201).json({ message: 'usuário logado com sucesso', result });
    } catch (error) {
      res.status(400).json({ message: 'Usuário ou senha incorretos' });
    }
  };
}

export default LoginController;
