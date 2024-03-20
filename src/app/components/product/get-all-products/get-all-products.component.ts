import { Component } from '@angular/core';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrl: './get-all-products.component.scss'
})
export class GetAllProductsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource =  null;
}


