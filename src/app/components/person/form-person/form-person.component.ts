import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../../services/person.service';
import { IPerson } from '../../../interfaces/person.interface';
import { ActivatedRoute } from '@angular/router';

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
    private readonly _route: ActivatedRoute) { }

  ngOnInit(): void {
    const personId = this._route.snapshot.params['id'];
    if (personId) {

      this._personService.getByShortId(personId).subscribe((person: IPerson) => {
        this.title = `Editando cadastro de Código: ${person.shortId}`;
        this.personForm.patchValue(person);
      });
    }
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

    const r = this._personService.addPerson(person).subscribe(
      success => console.log('foi'),
      error => console.log('error')
    );
  }
}
