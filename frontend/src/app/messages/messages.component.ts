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

  sendMessage(){
    let message = this.formGroup.value.message;
    this.messages.push(message);
    this.formGroup.value.message;
  }

}
