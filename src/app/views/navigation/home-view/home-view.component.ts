import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/shared/navbar/navbar.component';
import { HeroComponent } from '../../../components/home/hero/hero.component';
import { HomeNewsComponent } from '../../../components/home/home-news/home-news.component';
import { HomeSeasonComponent } from '../../../components/home/home-season/home-season.component';
import { FooterComponent } from '../../../components/shared/footer/footer.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    HomeNewsComponent,
    HomeSeasonComponent,
    FooterComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}
