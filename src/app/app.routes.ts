import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskManagerLoginComponent } from './task-manager-login/task-manager-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    { path: 'login', component: TaskManagerLoginComponent },
    { path: 'dashboard', component: DashboardComponent },
];
