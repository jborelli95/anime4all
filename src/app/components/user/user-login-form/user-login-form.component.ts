import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.css'
})
export class UserLoginFormComponent {
  form: FormGroup = this.fb.group({
    email: "",
    password: ""
  })

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ){}

  login(){
    const user = {
      email:this.form.value.email,
      password:this.form.value.password
    }
    
    this.userService.login(user).subscribe((dato)=> {
      console.log(dato);
    })
  }

  

  
}
