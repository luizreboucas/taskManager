import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { DashboardService } from '../../services/dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';
import { Routes } from 'src/app/shared/enums/routes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarSucessDeleteComponent } from 'src/app/shared/components/snackbar/snackbar-sucess-delete/snackbar-sucess-delete.component';

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
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.mapValueChanged();
  }

  deleteTask(): void {
    this.dashboardService.deleteTask(this.editForm.value.id).subscribe({
      next: () => {
        this.reloadTasks.emit(true);
        this._snackBar.openFromComponent(SnackbarSucessDeleteComponent);
      },
      error: () => {
        this.dialog
          .open(ErrorModalComponent, { width: '400px' })
          .afterClosed()
          .subscribe(() => this.router.navigate([Routes.DASHBOARD]));
      }
    });
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
}
