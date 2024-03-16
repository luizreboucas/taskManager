export interface User {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  // ver com os meninos blocked?: boolean;
}

export interface UserLogin {
  email: string;
  senha: string;
}

export interface UserResponse {
  user: User;
  token: string;
}
