import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/shared/navbar/navbar.component';
import { FooterComponent } from '../../../components/shared/footer/footer.component';
import { UserRegistrationFormComponent } from '../../../components/user/user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-register-view',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    UserRegistrationFormComponent
  ],
  templateUrl: './register-view.component.html',
  styleUrl: './register-view.component.css'
})
export class RegisterViewComponent {

}
