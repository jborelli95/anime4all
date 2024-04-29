import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/navigation/home-view/home-view.component';
import { RegisterViewComponent } from './views/user/register-view/register-view.component';
import { LoginViewComponent } from './views/user/login-view/login-view.component';


export const routes: Routes = [
   {
      path: "home",
      component: HomeViewComponent
   },
   {
      path: "register",
      component: RegisterViewComponent
   },
   {
      path: "login",
      component: LoginViewComponent
   },
   {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
   }
];
