import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = 'http://localhost:3000/';
  public idUser: string;

  constructor(private readonly http: HttpClient) { }

  async createUser(userName: string, password: string){
    return await this.http.post<any>(this.API + 'users/createUser', {
      userName: userName,
      password: password
    }).toPromise()
  }

  async loginUser(userName: string, password: string){
      const result = await this.http.post<any>(this.API + 'users/auth', {
        userName: userName,
        password: password
      }).toPromise();
      const token = result.token;
      await this.validateToken(token);
      this.idUser = result.user._id;
    console.log("meu id", this.idUser)
  }

  async validateToken(token: string){
    try {
      return await this.http.get<any>(this.API + 'token/tokenValidate', {headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })}).toPromise();
    } catch (error) {
      return error
    }
  }
}
