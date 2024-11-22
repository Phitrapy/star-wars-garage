import { ResolveFn } from '@angular/router';

import { inject } from '@angular/core';

import { filter, map } from 'rxjs';
import { PeopleService } from '../services/people.service';
import { People } from '../models/people.model';

export const peopleResolver: ResolveFn<People[]> = (route, state) => {
  const peopleService = inject(PeopleService);

  return peopleService.people$.pipe(filter((list) => list?.length > 0));
};
