import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages: string[] = Array();
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      message: ['', Validators.required]
    })
  }

  sendMessage(){
    let message = this.formGroup.value.message;
    this.messages.push(message);
    this.formGroup.value.message;
  }

}
