import { Component, Inject } from '@angular/core';
import { IPerson } from '../../../interfaces/person.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PersonService } from '../../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.scss'
})
export class PersonDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public person: IPerson,
    private readonly _personService : PersonService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  onEdit(shortId: string){
    this._router.navigate(['/home/person/editar', shortId], {relativeTo: this._route})
    this.dialog.closeAll();
  };
  onDelete(person: IPerson){};
}
