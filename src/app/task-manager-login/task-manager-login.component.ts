import { Component } from '@angular/core';
import { DataService } from '../data-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-manager-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-manager-login.component.html',
  styleUrl: './task-manager-login.component.css'
})
export class TaskManagerLoginComponent {
  constructor(private dataService:DataService,private router: Router){}
  textInputValue1: string = '';
  textInputValue2: string = '';
  login(){
    const dataToSend = { "userName":  this.textInputValue1 ,"password": this.textInputValue2};
    this.dataService.verifyLogin(dataToSend).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Failed to send data:', error);
      });
  }
}