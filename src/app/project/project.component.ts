import { Component } from '@angular/core';
import { User } from '../user/user.component';
import { Task } from '../task/task.component';

export interface Project {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
  teamMembers: User[];
}
