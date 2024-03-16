export interface Task {
  _id: string;
  nome: string;
  descricao: string;
  prioridade: string;
  cor: string;
  usuario?: string;
}

export interface NewTask {
  nome: string;
  descricao: string;
  prioridade: number;
  usuario: string;
}

export interface NewTaskResponse {
  message: string;
  task: Task;
}
