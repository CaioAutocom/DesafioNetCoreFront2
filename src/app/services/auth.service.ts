import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../api-utils/api.endpoints';
import { ILoginRequest } from '../interfaces/requests/login.request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(login: ILoginRequest): Observable<any> {
    const credentialsJSON = JSON.stringify(login);
    return this.http.post<any>(`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.login}`, credentialsJSON, {
      headers: { 'Content-Type': 'application/json' } 
    });
  }
 
}