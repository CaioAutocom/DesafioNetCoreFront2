import { Component, Inject } from '@angular/core';
import { IPerson } from '../../../interfaces/person.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PersonService } from '../../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../services/helpers/snackbar.service';
import { catchError, tap } from 'rxjs';
import { IDeletePersonRequest } from '../../../interfaces/requests/delete-person.request.interface';

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
    public dialog: MatDialog,
    private readonly _snackBarService: SnackbarService
  ) {}

  onEdit(shortId: string){
    this._router.navigate(['/home/person/editar', shortId], {relativeTo: this._route})
    this.dialog.closeAll();
  };
  logarErro(error: any) : any {
    console.log(error.status);
  }
  exibeSnackbar(message: string): any {
    this._snackBarService.openCustomSnackbar(message);
  }
  onDelete(person: IPerson){
    const request: IDeletePersonRequest = {
      shortId: person.shortId
    };

    this._personService.delete(request).subscribe(
      (response) => {
        this.finalizaExclusao();
      },
      (error) => {
        this.logarErro(error);
      }
    );
    
  };
  finalizaExclusao(): void {
    this.exibeSnackbar("Registro Excluído!"),
    //this._router.navigate(['/home/person']);
    this.dialog.closeAll()
  }
}



