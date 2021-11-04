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

  async sendMessage(content: string, user_id: string){
    return await this.http.post<any>(this.API + 'messages/sendMessage', {
      content: content,
      user_id: user_id
    }).toPromise();
  }

  async deleteMessage(id: string){
    return await this.http.delete<any>(this.API + `messages/deleteMessage/${id}`).toPromise();
  }

  async updateMessage(id: string, content: string){
    return await this.http.put<any>(this.API + 'messages/updateMessage', {
      _id: id,
      content: content
    }).toPromise()
  }
}
