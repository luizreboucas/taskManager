// Response do get:
export interface Task {
  id: number;
  nome: string;
  descricao: string;
  prioridade: number;
  prioridadeCor: string;
}

// Request do post
export interface NewTask {
  nome: string;
  descricao: string;
  prioridade: number;
}
