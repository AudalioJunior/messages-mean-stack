import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = 'http://localhost:3000/';

  constructor(private readonly http: HttpClient) { }

  async createUser(userName: string, password: string){
    return await this.http.post<any>(this.API + 'users/createUser', {
      userName: userName,
      password: password
    }).toPromise()
  }
}
