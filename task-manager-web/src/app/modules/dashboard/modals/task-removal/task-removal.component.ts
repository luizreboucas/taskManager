import { Component, Inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';
import { SnackbarSucessDeleteComponent } from 'src/app/shared/components/snackbar/snackbar-sucess-delete/snackbar-sucess-delete.component';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-task-removal',
  templateUrl: './task-removal.component.html',
  styleUrls: ['./task-removal.component.scss']
})
export class TaskRemovalComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskRemovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { _id: string },
    private dashboardService: DashboardService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {}

  deleteTask(): void {
    this.dashboardService.deleteTask(this.data._id).subscribe({
      next: () => {
        this._snackBar.openFromComponent(SnackbarSucessDeleteComponent, {
          duration: 5000
        });
      },
      error: () => {
        this.dialog
          .open(ErrorModalComponent, { width: '400px' })
          .afterClosed()
          .subscribe(() => this.router.navigate([Routes.DASHBOARD]));
      }
    });
  }
}
