import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit(){
    if(this.formGroup.valid){
      let userName = this.formGroup.value.user;
      let password = this.formGroup.value.password;
      this.userService.createUser(userName, password);
      alert("Usuário cadastrado com sucesso!");
      alert(`Usuário: ${userName}, Senha: ${password}`);
      this.router.navigateByUrl('/auth');
    }else{
      alert("Verifique se todos os campos foram preenchidos!")
    }
  }
}
