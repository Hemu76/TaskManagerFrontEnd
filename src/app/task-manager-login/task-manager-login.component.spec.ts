import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerLoginComponent } from './task-manager-login.component';

describe('TaskManagerLoginComponent', () => {
  let component: TaskManagerLoginComponent;
  let fixture: ComponentFixture<TaskManagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagerLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
