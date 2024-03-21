import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../../services/person.service';
import { IPerson } from '../../../interfaces/person.interface';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.scss'
})
export class FormPersonComponent{
  personForm = new FormGroup({
    shortid: new FormControl(''),
    name: new FormControl('',  Validators.required),
    document: new FormControl('',  Validators.required),
    town: new FormControl('',  Validators.required),
    canBuy: new FormControl(true),
    observations: new FormControl(''),
    alternativeIdentifier: new FormControl(''),
    enable: new FormControl(true)
  });

constructor(private _personService: PersonService) {}

  onSubmit() {
    const formValue = this.personForm.value;

    const person: IPerson = {
      shortid: formValue.shortid ?? '',
      name: formValue.name ?? '',
      document: formValue.document ?? '',
      town: formValue.town ?? '',
      canBuy: formValue.canBuy ?? true,
      observations: formValue.observations ?? '',
      alternativeIdentifier: formValue.alternativeIdentifier ?? '',
      enable: formValue.enable ?? true
    };

    const r = this._personService.addPerson(person).subscribe(
      success => console.log('foi'),
      error => console.log('error')
    );
    } 
  }
