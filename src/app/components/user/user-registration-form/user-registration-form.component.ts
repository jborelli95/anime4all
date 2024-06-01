import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-registration-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.css'
})
export class UserRegistrationFormComponent implements OnInit{

  /**Variable formGroup donde vamos a a agrupar los distitnos input desde el formulario Html */
  form: FormGroup = this.fb.group({
    name: "",
    job: ""
  })
  
  ngOnInit(): void {
    
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ){}

  userRegister(){
    const user = {
      name: this.form.value.name,
      job: this.form.value.job
    }

    this.userService.register(user);
  }
}
