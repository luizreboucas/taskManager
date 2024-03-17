import { DashboardService } from './../../services/dashboard.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewTaskModal } from '../../interfaces/new-task-modal.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriorityColors, PriorityLevel } from '../../enums/priority-level';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  newTaskForm!: FormGroup;
  dividerColor: string = '';

  constructor(
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewTaskModal,
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.verifyValueChanges();
  }

  createTask(): void {
    if (this.newTaskForm.valid) {
      this.dashboardService.createTask(this.newTaskForm.value).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: () => {
          // TODO: Adicionar tratativa de erro
          this.dialogRef.close();
        }
      });
      return;
    }
    this.dialogRef.close();
  }

  private buildForm(): void {
    this.newTaskForm = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: [''],
      prioridade: ['', [Validators.required]],
      usuario: [this.data.usuario]
    });
  }

  private verifyValueChanges(): void {
    this.newTaskForm.valueChanges.subscribe((value) => {
      this.setDividerColor(value.prioridade);
    });
  }

  private setDividerColor(priority: string): void {
    switch (priority) {
      case PriorityLevel.HIGH_PRIORITY:
        this.dividerColor = PriorityColors.HIGH;
        break;
      case PriorityLevel.MEDIUM_PRIORITY:
        this.dividerColor = PriorityColors.MEDIUM;
        break;
      case PriorityLevel.LOW_PRIORITY:
        this.dividerColor = PriorityColors.LOW;
        break;
      default:
        this.dividerColor = PriorityColors.DEFAULT;
        break;
    }
  }
}
