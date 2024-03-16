import { Task } from 'src/app/shared/interfaces/task.interface';
export interface User {
  _id?: string;
  nome: string;
  email: string;
  senha?: string;
  tasks?: Task;
  // ver com os meninos blocked?: boolean;
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
  user: User;
  token: string;
}
