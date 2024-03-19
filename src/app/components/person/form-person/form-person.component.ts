import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.scss'
})
export class FormPersonComponent{
  personForm = new FormGroup({
    shortId: new FormControl('',  Validators.required),
    name: new FormControl('',  Validators.required),
    document: new FormControl('',  Validators.required),
    town: new FormControl('',  Validators.required),
    canBuy: new FormControl(true),
    observations: new FormControl(''),
    alternativeIdentifier: new FormControl(''),
    enable: new FormControl(true)
  });

  onSubmit() {
    console.log(this.personForm.value);
   
  }
}
