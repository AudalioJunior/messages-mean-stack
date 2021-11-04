import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages: string[] = Array();
  public formGroup: FormGroup;
  public userId: string = '6180c786b1078eaaac214d29';
  public idEdit: string;
  public isEnable: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessagesService
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
    await this.messageService.sendMessage(message, this.userId).then(() => {
      this.refreshMessages();
    })
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
