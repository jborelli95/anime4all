import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/navigation/home-view/home-view.component';

export const routes: Routes = [
    { 
        path: "home", 
        component: HomeViewComponent
     },
     {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
     }
];
