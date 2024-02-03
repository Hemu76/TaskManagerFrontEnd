import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'loginPage',component:LoginPageComponent}
];
