import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRemovalComponent } from './task-removal.component';

describe('TaskRemovalComponent', () => {
  let component: TaskRemovalComponent;
  let fixture: ComponentFixture<TaskRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
