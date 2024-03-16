import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { DashboardService } from '../../services/dashboard.service';
import { NewUserStoreService } from 'src/app/shared/services/store/new-user-store.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../../modals/new-task/new-task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData!: User;
  tasks: Task[] = [];

  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(
    private dashboardService: DashboardService,
    private newUserStore: NewUserStoreService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.setSubscriptions();
    this.getTasks();
  }

  // ngOnDestroy(): void {
  //   this.subscriptions.forEach((sub) => sub.unsubscribe());
  // }

  openModalNewTask(): void {
    this.dialog
      .open(NewTaskComponent, {
        data: { usuario: this.userData._id },
        width: '400px'
      })
      .afterClosed()
      .subscribe(() => {
        this.getTasks();
      });
  }

  private setSubscriptions(): void {
    this.subscriptions.push(
      this.newUserStore.userSubject$.subscribe((response: User) => {
        this.userData = response;
      })
    );
  }

  private getTasks(): void {
    if (this.userData._id) {
      this.dashboardService
        .getTasksByUser(this.userData._id as string)
        .subscribe((tasksByUser: Task[]) => {
          this.tasks = tasksByUser;
        });
    }
  }
}
