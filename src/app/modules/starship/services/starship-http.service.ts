import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, expand, map, Observable, of, reduce } from 'rxjs';
import { StarshipDTO } from '../models/starship-dto.model';
import { BASE_API_URL } from '../../../constants/api.constant';
import { PaginatedDTO } from '../../../shared/models/paginated-dto.model';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipHttpService {
  private readonly apiUrl = BASE_API_URL + `/starships`;

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les vaisseaux
   */
  getAll(): Observable<Starship[]> {
    return this.getPageFromUrl(this.apiUrl).pipe(
      expand((paginatedDto) =>
        paginatedDto.next ? this.getPageFromUrl(paginatedDto.next) : of()
      ),
      reduce(
        (acc: StarshipDTO[], cur: PaginatedDTO<StarshipDTO>) => [
          ...acc,
          ...cur.results,
        ],
        []
      ),
      map(([...dtos]) => dtos.map(this.convertDTO)),
      catchError(() => of([]))
    );
  }

  /**
   * Récupère la page correspondant à l'Url donnée
   * @param url
   */
  private getPageFromUrl(url?: string): Observable<PaginatedDTO<StarshipDTO>> {
    if (!url) {
      return of();
    }
    return this.http.get<PaginatedDTO<StarshipDTO>>(url);
  }

  private convertDTO(starshipDTO: StarshipDTO): Starship {
    const id = starshipDTO.url.split('/').reverse()[1];
    return { ...starshipDTO, id };
  }
}
