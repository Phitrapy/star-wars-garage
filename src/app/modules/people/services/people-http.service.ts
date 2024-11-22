import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, expand, map, Observable, of, reduce } from 'rxjs';
import { BASE_API_URL } from '../../../constants/api.constant';
import { PaginatedDTO } from '../../../shared/models/paginated-dto.model';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleHttpService {
  private readonly apiUrl = BASE_API_URL + `/people`;

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les vaisseaux
   */
  getAll(): Observable<People[]> {
    return this.getPageFromUrl(this.apiUrl).pipe(
      expand((paginatedDto) =>
        paginatedDto.next ? this.getPageFromUrl(paginatedDto.next) : of()
      ),
      reduce(
        (acc: People[], cur: PaginatedDTO<People>) => [...acc, ...cur.results],
        []
      ),
      catchError(() => of([]))
    );
  }

  /**
   * Récupère la page correspondant à l'Url donnée
   * @param url
   */
  private getPageFromUrl(url?: string): Observable<PaginatedDTO<People>> {
    if (!url) {
      return of();
    }
    return this.http.get<PaginatedDTO<People>>(url);
  }
}
