import { Component, Inject } from '@angular/core';
import { IPerson } from '../../../interfaces/person.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.scss'
})
export class PersonDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public person: IPerson,
  ) {}

  onEdit(person: IPerson){};
  onDelete(person: IPerson){};
}
