import { Task } from 'src/app/shared/interfaces/task.interface';
export interface User {
  _id: string;
  nome: string;
  email: string;
  senha?: string;
  tasks?: Task[];
}

export interface UserResponse {
  message: string;
  user: User;
}

export interface UserLogin {
  email: string;
  senha: string;
}

export interface UserResponseToken {
  message: string;
  result: {
    user: User;
    token: string;
  };
}
