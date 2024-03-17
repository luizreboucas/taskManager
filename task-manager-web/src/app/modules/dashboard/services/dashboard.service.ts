import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import {
  NewTask,
  NewTaskResponse,
  Task
} from 'src/app/shared/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getTasksByUser(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.LOCAL}/task/${userId}`);
  }

  createTask(body: NewTask): Observable<NewTaskResponse> {
    return this.http.post<NewTaskResponse>(`${environment.LOCAL}/task`, body);
  }

  updateTask(taskId: string, body: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${environment.LOCAL}/task/${taskId}`, body);
  }

  deleteTask(taskId: string): Observable<Task[]> {
    return this.http.delete<Task[]>(`${environment.LOCAL}/task/${taskId}`);
  }
}
