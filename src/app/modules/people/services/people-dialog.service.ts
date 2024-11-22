import { inject, Injectable } from '@angular/core';
import { People } from '../models/people.model';
import { PeopleDetailsComponent } from '../components/people-details/people-details.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class PeopleDialogService {
  private matDialogService = inject(MatDialog);
  /**
   * Affiche une personne dans une boîte de dialogue
   *
   * @param people la personne à afficher
   */
  public showPeople(people: People) {
    this.matDialogService.open(PeopleDetailsComponent, { data: people });
  }
}
