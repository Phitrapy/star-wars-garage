import { inject, Injectable } from '@angular/core';
import { PeopleHttpService } from './people-http.service';
import { Observable, shareReplay } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleHttpService = inject(PeopleHttpService);

  public people$ = this.getAll().pipe(shareReplay(1));

  /**
   * Récupère tous les Peoples disponibles
   */
  public getAll(): Observable<People[]> {
    return this.peopleHttpService.getAll();
  }
}
