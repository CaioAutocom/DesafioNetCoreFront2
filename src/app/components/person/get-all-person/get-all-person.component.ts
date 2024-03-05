import { Component } from '@angular/core';
import { Tab } from '../../layout/tab-menu/tab-menu.component';
import { TableComponent } from '../../layout/table/table.component';

@Component({
  selector: 'app-get-all-person',
  templateUrl: './get-all-person.component.html',
  styleUrl: './get-all-person.component.scss'
})
export class GetAllPersonComponent {
  columns: string[] = ['id', 'name', 'age'];
  data: any[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    // mais dados...
  ];

  tabs: Tab[] = [
    { title: 'Buscar Todas', component: TableComponent  },
    // Adicione mais abas conforme necessário
  ];
  
}
