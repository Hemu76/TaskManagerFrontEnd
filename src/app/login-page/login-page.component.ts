import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
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
