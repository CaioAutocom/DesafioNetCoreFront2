import { Component } from '@angular/core';
import { IPerson } from '../../../interfaces/person.interface';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';
import { PersonDetailsComponent } from '../person-details/person-details.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';


@Component({
  selector: 'app-get-all-person',
  templateUrl: './get-all-person.component.html',
  styleUrl: './get-all-person.component.scss'
})
export class GetAllPersonComponent  {
 
  persons$: Observable<IPerson[]>;
  columnDefs = [
    { prop: 'shortId', name: 'Cód.' },
    { prop: 'name', name: 'Nome' },
    { prop: 'document', name: 'Documento' },
    { prop: 'town', name: 'Cidade' },
    { prop: 'canBuy', name: 'Pode Comprar' },
    { prop: 'observations', name: 'Observações' },
    { prop: 'alternativeIdentifier', name: 'Cód. Alternativo' },
    { prop: 'enable', name: 'Ativo' }
  ];
  columnProps: string[];
  columnNames: string[];

  constructor(private _personService: PersonService,
              public _dialog: MatDialog) {
    this.persons$ = this._personService.getAllPerson();
    this.columnProps = this.columnDefs.map(c => c.prop);
    this.columnNames = this.columnDefs.map(c => c.name);
  }


  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  onPersonSelected(selectedPerson: IPerson){
    const dialogRef = this._dialog.open(PersonDetailsComponent, {minWidth: '30%', data: selectedPerson});
  }
}
