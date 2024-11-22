import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from '../../models/starship.model';
import { CommonModule } from '@angular/common';
import { StarshipListComponent } from '../starship-list/starship-list.component';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { Subscription } from 'rxjs';
import { People } from '../../../people/models/people.model';

@Component({
  selector: 'app-starships-page',
  standalone: true,
  imports: [
    CommonModule,
    StarshipListComponent,
    StarshipDetailsComponent,
    PageLayoutComponent,
  ],
  templateUrl: './starships-page.component.html',
  styleUrl: './starships-page.component.scss',
})
export class StarshipsPageComponent implements OnInit, OnDestroy {
  public starships: Starship[] = [];
  public people: People[] = [];

  public selectedStarship?: Starship;

  public subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.starships = this.route.snapshot.data['starshipsData'];
    this.people = this.route.snapshot.data['peopleData'];

    this.subscription.add(
      this.router.events.subscribe(() => {
        const id = this.route.snapshot.queryParamMap.get('id');
        this.selectStarshipFromId(id);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Sélectionne le vaisseau fourni en paramètres
   *
   * @param starship le vaisseau sélectionné
   */
  public selectStarship(starship: Starship) {
    if (this.selectedStarship !== starship) {
      this.selectedStarship = starship;
      this.router.navigate(['/starships'], {
        queryParams: { id: starship.id },
      });
    }
  }

  /**
   * Sélectionne le vaisseau à partir de l'id fourni
   * @param id l'id du vaisseau à sélectionner
   */
  private selectStarshipFromId(id: string | null) {
    this.selectedStarship = this.starships.filter(
      (starship) => starship.id === id
    )?.[0];
  }
}
