import { Component } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tasks: Task[] = [
    {
      id: 1,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      id: 2,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      id: 3,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      id: 4,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      id: 5,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      id: 6,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      id: 7,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      id: 8,
      nome: 'Teste de exibição',
      descricao: 'Uma task de teste cheia de descrição.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      id: 9,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      id: 10,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      id: 11,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      id: 12,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      id: 13,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      id: 14,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      id: 15,
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    }
  ];
}
