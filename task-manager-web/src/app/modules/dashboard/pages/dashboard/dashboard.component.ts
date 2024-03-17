import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { DashboardService } from '../../services/dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../../modals/new-task/new-task.component';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  userId!: string | null;
  user!: User | undefined;

  constructor(
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.getTasks();
    this.setUserName();
  }

  openModalNewTask(): void {
    this.dialog
      .open(NewTaskComponent, {
        data: { usuario: this.userId },
        width: '400px'
      })
      .afterClosed()
      .subscribe(() => {
        this.getTasks();
      });
  }

  reloadTasks(): void {
    this.getTasks();
  }

  private getUserId(): void {
    this.userId = JSON.parse(localStorage.getItem('id') as string);
  }

  private getTasks(): void {
    if (this.userId) {
      this.dashboardService
        .getTasksByUser(this.userId)
        .subscribe((tasksByUser: Task[]) => {
          this.tasks = tasksByUser;
        });
    }

    // TODO: Adicionar tratativa para quando não houver ID
  }

  private setUserName(): void {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.user = this.mapUsers(response);
      }
    });
  }

  private mapUsers(users: User[]): User | undefined {
    return users.find((user) => user._id === this.userId);
  }
}
