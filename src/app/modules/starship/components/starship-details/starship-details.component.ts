import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { Starship } from '../../models/starship.model';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss',
})
export class StarshipDetailsComponent {
  private peopleDialogService = inject(PeopleDialogService);

  @Input()
  public set data(data: { selectedStarship?: Starship}) {
    this.starship = data.selectedStarship;
  }

  public starship?: Starship;
}
