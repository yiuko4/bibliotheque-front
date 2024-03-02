// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/utilisateurs';

  constructor(private http: HttpClient) {}

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/recupUtilisateurs`);
  }

  getUserById(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/recupInfoUtilisateur?utilisateurId=${id}`);
  }

  createUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<User>(`${this.apiUrl}/creerUtilisateur`, user, httpOptions);
  }
}
