import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    email: "",
    password: ""
  })
  
  ngOnInit(): void {
    
  }

  constructor(
    private fb: FormBuilder
  ){}

  userRegister(){
    console.log("Uusario registrado!!!");
    console.log("El formulario es: ");
    console.log(this.form.value);
  }
}
