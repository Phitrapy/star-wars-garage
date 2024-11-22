import { Routes } from '@angular/router';
import { starshipsResolver } from './modules/starship/resolvers/starship.resolver';
import { StarshipsPageComponent } from './modules/starship/components/starships-page/starships-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/starships',
    pathMatch: 'full',
  },
  {
    path: 'starships',
    component: StarshipsPageComponent,
    resolve: { starshipsData: starshipsResolver },
  },
];
