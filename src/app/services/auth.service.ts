import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredentials } from '../interfaces/login.request.interface';
import { API_ENDPOINTS } from '../api-utils/api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string | null;
  private refreshToken!: string |  null;

  constructor(private http: HttpClient) { }

  login(login: ICredentials): Observable<any> {
    const credentialsJSON = JSON.stringify(login);

    console.log(credentialsJSON); 
    return this.http.post<any>(`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.login}`, credentialsJSON, {
      headers: { 'Content-Type': 'application/json' } 
    });
  }
  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }
}