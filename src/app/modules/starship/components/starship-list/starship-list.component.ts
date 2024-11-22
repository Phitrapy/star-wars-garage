import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Starship } from '../../models/starship.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss',
})
export class StarshipListComponent {
  @Input()
  public starships: Starship[] = [];

  @Output()
  public starshipSelected = new EventEmitter<Starship>();

  constructor() {}

  /**
   *
   * @param starship Fonction de tracking pour le template
   * @returns l'id d'un starship
   */
  trackByFn(_: number, starship: Starship) {
    return starship.id;
  }
}
