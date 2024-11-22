import { Routes } from '@angular/router';
import { starshipsResolver } from './modules/starship/resolvers/starship.resolver';
import { StarshipsPageComponent } from './modules/starship/components/starships-page/starships-page.component';
import { peopleResolver } from './modules/people/resolvers/people.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/starships',
    pathMatch: 'full',
  },
  {
    path: 'starships',
    component: StarshipsPageComponent,
    resolve: { starshipsData: starshipsResolver, peopleData: peopleResolver },
  },
];
