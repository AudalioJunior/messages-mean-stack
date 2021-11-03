import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private readonly API = 'http://localhost:3000/';

  constructor(private readonly http: HttpClient) { }

  async getMessages(){
    return await this.http.get<any>(this.API + 'messages/getMessages').toPromise();
  }

}
