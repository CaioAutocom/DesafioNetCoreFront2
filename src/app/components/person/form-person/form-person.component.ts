import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../../services/person.service';
import { IPerson } from '../../../interfaces/person.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../services/helpers/snackbar.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.scss'
})
export class FormPersonComponent implements OnInit {
  title = "Cadastro de Pessoas";

  personForm = new FormGroup({
    shortId: new FormControl(''),
    name: new FormControl('', Validators.required),
    document: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    canBuy: new FormControl(true),
    observations: new FormControl(''),
    alternativeIdentifier: new FormControl(''),
    enable: new FormControl(true)
  });

  constructor(private readonly _personService: PersonService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _snackBarService: SnackbarService) { }

  ngOnInit(): void {
    const personId = this._route.snapshot.params['id'];
    if (personId) {

      this._personService.getByShortId(personId).subscribe((person: IPerson) => {
        this.title = `Editando cadastro de Código: ${person.shortId}`;
        this.personForm.patchValue(person);
      });
    }
  }
  exibeSnackbar(message: string): any {
    this._snackBarService.openCustomSnackbar(message);
  }
  redirecionar() {
    this._router.navigateByUrl('/home/person')
  }
  limparFormulario() {
    this.personForm.reset();
  }

  onSubmit() {
    const formValue = this.personForm.value;

    const person: IPerson = {
      shortId: formValue.shortId ?? '',
      name: formValue.name ?? '',
      document: formValue.document ?? '',
      town: formValue.town ?? '',
      canBuy: formValue.canBuy ?? true,
      observations: formValue.observations ?? '',
      alternativeIdentifier: formValue.alternativeIdentifier ?? '',
      enable: formValue.enable ?? true
    };
    
    if (person.shortId) {
      this._personService.update(person).pipe(
        tap(success => this.exibeSnackbar("Registro atualizado! Redirecionando...")),
        catchError(error => this.exibeSnackbar("Erro ao atualizar o cadastro."))
      ).subscribe(() => {
        setTimeout(() => {
          this.limparFormulario();
          this.redirecionar();
        }, 3000);
      });
    
      return;
    }
    
    this._personService.addPerson(person).pipe(
      tap(success => this.exibeSnackbar("Cadastro realizado! Redirecionando...")),
      catchError(error => this.exibeSnackbar("Erro ao efetuar o cadastro"))
    ).subscribe(() => {
      setTimeout(() => {
        this.limparFormulario();
        this.redirecionar();
      }, 3000);
    });
  }
}


  


