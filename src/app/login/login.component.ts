import { Component,OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
    res: any[]=[];
    constructor(private ra:RestapiService){}
     ngOnInit() {
    this.ra.getres().subscribe((result) => {
      this.res = result;
      console.log('Received data:', this.res);
    },
    (error) => {
      console.error('Failed to fetch data:', error);
    });
  }
  sendDataToBackend() {
    const dataToSend = { key: 'value' }; // Replace with the data you want to send
    this.ra.sendData(dataToSend).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Failed to send data:', error);
      }
    );
  }
}
