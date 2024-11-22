import { ResolveFn } from '@angular/router';
import { StarshipService } from '../services/starship.service';
import { inject } from '@angular/core';
import { StarshipDTO } from '../models/starship-dto.model';
import { filter, map } from 'rxjs';
import { Starship } from '../models/starship.model';

export const starshipsResolver: ResolveFn<Starship[]> = (route, state) => {
  const starshipService = inject(StarshipService);

  return starshipService.starships$.pipe(filter((list) => list?.length > 0));
};
