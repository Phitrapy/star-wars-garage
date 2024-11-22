import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { People } from '../../models/people.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-people-details',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, DatePipe],
  templateUrl: './people-details.component.html',
  styleUrl: './people-details.component.scss',
})
export class PeopleDetailsComponent {
  readonly dialogRef = inject(MatDialogRef<PeopleDetailsComponent>);
  readonly dialogData = inject<People>(MAT_DIALOG_DATA);
  readonly people = this.dialogData;

  onNoClick(): void {
    this.dialogRef.close();
  }
}
