import { Component } from '@angular/core';

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
}
