import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages: string[] = Array();
  public formGroup: FormGroup;
  public idEdit: string;
  public isEnable: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessagesService,
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.initForm();
    await this.refreshMessages();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      message: ['', Validators.required]
    })
  }

  async refreshMessages(){
    const response = await this.messageService.getMessages();
    this.messages = response.messages;
  }

  async sendMessage(){
    let message = this.formGroup.value.message;
    try {
      await this.messageService.sendMessage(message, this.userService.idUser).then(() => {
        this.refreshMessages();
      })
    } catch (error) {
      alert("Ops, ocorreu algum erro!")
    }
  }

  async deleteMessage(id: string){
    let response = await this.messageService.deleteMessage(id);
    alert(response.message);
    this.refreshMessages();
  }

  editModal(id: string){
    this.idEdit = id;
    this.isEnable = !this.isEnable; 
  }

  async confirmEdit(){
    let message = this.formGroup.value.message;
    await this.messageService.updateMessage(this.idEdit, message);
    this.refreshMessages();
    this.isEnable = !this.isEnable; 
  }
}
