import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/shared/navbar/navbar.component';
import { FooterComponent } from '../../../components/shared/footer/footer.component';
import { UserLoginFormComponent } from '../../../components/user/user-login-form/user-login-form.component';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    UserLoginFormComponent
  ],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {

}
