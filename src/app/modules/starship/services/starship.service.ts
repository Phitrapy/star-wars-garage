import { inject, Injectable } from '@angular/core';
import { StarshipHttpService } from './starship-http.service';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private starshipHttpService = inject(StarshipHttpService);

  public starships$ = this.getAll().pipe(shareReplay(1));

  /**
   * Récupère tous les starships disponibles
   */
  public getAll(): Observable<Starship[]> {
    return this.starshipHttpService.getAll();
  }
}
