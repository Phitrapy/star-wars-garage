import { inject, Injectable } from '@angular/core';
import { PeopleHttpService } from './people-http.service';
import { map, Observable, shareReplay, take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { People } from '../models/people.model';
import { PeopleDetailsComponent } from '../components/people-details/people-details.component';

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
