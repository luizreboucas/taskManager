import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.scss']
})
export class DashboardTaskComponent implements OnInit {
  @Input() task!: Task;

  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.mapValueChanged();
  }

  private buildForm(): void {
    this.editForm = this.fb.group({
      id: [this.task._id],
      nome: [this.task.nome],
      descricao: [this.task.descricao],
      prioridade: [this.task.prioridade],
      cor: [this.task.cor]
    });
  }

  private mapValueChanged(): void {
    for (const field in this.editForm.controls) {
      this.editForm.controls[field].valueChanges.subscribe((value) => {
        this.updateTask(field, value);
      });
    }
  }

  private updateTask(field: string, value: any): void {
    this.dashboardService
      .updateTask(this.editForm.value.id, this.getBodyFormatted(field, value))
      .subscribe({
        next: () => {
          // TODO: Adicionar tratativa
        },
        error: () => {
          // TODO: Adicionar tratativa
        }
      });
  }

  private getBodyFormatted(field: string, value: any): Partial<Task> {
    const body: Partial<Task> = {};
    body[field as keyof Task] = value;
    return body;
  }
}
