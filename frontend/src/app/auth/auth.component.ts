import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.initForm();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async submit(){
    if(this.formGroup.valid){
      let userName = this.formGroup.value.user;
      let password = this.formGroup.value.password;
      await this.userService.loginUser(userName, password)
      .then(() => {
        this.router.navigateByUrl('/main/messages');
      }).catch((errors) => {
        let {error} = errors
        alert(error.error);
      });
    }else{
      alert("Verifique se todos os campos foram preenchidos!")
    }
  }

}
