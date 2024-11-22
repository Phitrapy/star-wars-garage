import { ResolveFn } from '@angular/router';

import { inject } from '@angular/core';

import { filter } from 'rxjs';
import { PeopleService } from '../services/people.service';
import { People } from '../models/people.model';

export const peopleResolver: ResolveFn<People[]> = () => {
  const peopleService = inject(PeopleService);

  return peopleService.people$.pipe(filter((list) => list?.length > 0));
};
