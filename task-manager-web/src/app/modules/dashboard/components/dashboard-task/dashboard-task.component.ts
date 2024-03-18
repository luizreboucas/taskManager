import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { DashboardService } from '../../services/dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';
import { Routes } from 'src/app/shared/enums/routes';

import { PriorityColors, PriorityLevel } from '../../enums/priority-level';
import { TaskRemovalComponent } from '../../modals/task-removal/task-removal.component';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.scss']
})
export class DashboardTaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() reloadTasks: EventEmitter<boolean> = new EventEmitter();

  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.verifyColorChange();
    this.mapValueChanged();
  }

  openModalTaskRemoval(): void {
    this.dialog
      .open(TaskRemovalComponent, {
        width: '400px',
        data: { _id: this.editForm.controls['id'].value }
      })
      .afterClosed()
      .subscribe(() => this.reloadTasks.emit(true));
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

  private verifyColorChange(): void {
    this.editForm.controls['prioridade'].valueChanges.subscribe((value) => {
      this.setDividerColor(value);
    });
  }

  private mapValueChanged(): void {
    for (const field in this.editForm.controls) {
      this.editForm.controls[field].valueChanges.subscribe((value) => {
        if (field !== 'cor') {
          this.updateTask(field, value);
        }
        return;
      });
    }
  }

  private updateTask(field: string, value: any): void {
    this.dashboardService
      .updateTask(this.editForm.value.id, this.getBodyFormatted(field, value))
      .subscribe({
        error: () => {
          this.dialog
            .open(ErrorModalComponent, { width: '400px' })
            .afterClosed()
            .subscribe(() => this.router.navigate([Routes.DASHBOARD]));
        }
      });
  }

  private getBodyFormatted(field: string, value: any): Partial<Task> {
    const body: Partial<Task> = {};
    body[field as keyof Task] = value;
    return body;
  }

  private setDividerColor(priority: string): void {
    switch (priority) {
      case PriorityLevel.HIGH_PRIORITY:
        this.editForm.controls['cor'].setValue(PriorityColors.HIGH);
        break;
      case PriorityLevel.MEDIUM_PRIORITY:
        this.editForm.controls['cor'].setValue(PriorityColors.MEDIUM);
        break;
      case PriorityLevel.LOW_PRIORITY:
        this.editForm.controls['cor'].setValue(PriorityColors.LOW);
        break;
      default:
        this.editForm.controls['cor'].setValue(PriorityColors.DEFAULT);
        break;
    }
  }
}
