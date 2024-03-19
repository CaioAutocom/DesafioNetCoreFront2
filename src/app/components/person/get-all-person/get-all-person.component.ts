import { Component, OnInit, inject } from '@angular/core';
import { IPerson } from '../../../interfaces/person.interface';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-all-person',
  templateUrl: './get-all-person.component.html',
  styleUrl: './get-all-person.component.scss'
})
export class GetAllPersonComponent  {
  persons$: Observable<IPerson[]>;
  columns: string[] = ['Código', 'Nome', 'Documento', 'Cidade', 'Pode Comprar', 'Observações', 'Código Alternativo', 'Ativo'];

  constructor(private personService: PersonService){
    this.persons$ = this.personService.getAllPerson();
  }
}
