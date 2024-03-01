// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importer HttpClient
import { Observable } from 'rxjs';
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/utilisateurs'; // URL de base de l'API

  constructor(private http: HttpClient) {}

  // Modifier getUserById pour faire une requête HTTP
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/recupInfoUtilisateur?utilisateurId=${id}`);
  }

}
