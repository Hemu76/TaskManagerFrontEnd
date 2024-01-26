import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  private apiUrl = 'http://localhost:8080/get';

  getres():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  constructor(private http: HttpClient) {
   }
   private apiUrl1 = 'http://localhost:8080/api/data';
   sendData(data: any): Observable<any> {
    return this.http.post(this.apiUrl1, data);
  }
}
