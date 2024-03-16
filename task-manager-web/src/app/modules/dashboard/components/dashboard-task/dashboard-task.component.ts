import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.scss']
})
export class DashboardTaskComponent implements OnInit {
  @Input() task!: Task;

  corDivider = '';
  editForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();

    // TODO: Adicionar alternação de cores

    // this.corDivider = this.task.cor;

    // this.editForm.valueChanges.subscribe((value: any) => {
    //   this.corDivider = value.cor;
    // });
  }

  private buildForm(): void {
    this.editForm = this.fb.group({
      nome: [this.task.nome],
      descricao: [this.task.descricao],
      prioridade: [this.task.prioridade],
      cor: [this.task.cor]
    });
  }
}
