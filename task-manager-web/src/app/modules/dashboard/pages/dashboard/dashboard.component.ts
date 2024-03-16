import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //tasks: Task[] = [];

  tasks: Task[] = [
    {
      _id: '1',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      _id: '2',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      _id: '3',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      _id: '4',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      _id: '5',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      _id: '6',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      _id: '7',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      _id: '8',
      nome: 'Teste de exibição',
      descricao: 'Uma task de teste cheia de descrição.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      _id: '9',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      _id: '10',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      _id: '11',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      _id: '12',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    },
    {
      _id: '13',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 1,
      prioridadeCor: '#db2f49'
    },
    {
      _id: '14',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 2,
      prioridadeCor: '#fa6845'
    },
    {
      _id: '15',
      nome: 'Teste de exibição',
      descricao:
        'Uma task de teste cheia de descrição para descrever o que precisa ser feito e deve ser feito para que tudo seja feito e bem feito.',
      prioridade: 3,
      prioridadeCor: '#fca553'
    }
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    //this.getTasks();
  }

  // private getTasks(): void {
  //   this.dashboardService
  //     .getTasksByUser('65f52a6f8b03673ccbd07874')
  //     .subscribe((tasksByUser: Task[]) => {
  //       this.tasks = tasksByUser;
  //     });
  // }
}
