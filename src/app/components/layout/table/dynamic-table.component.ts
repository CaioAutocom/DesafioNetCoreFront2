import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements OnChanges {
  @Input({required: true}) columns: string[] = [];
  @Input({required: true}) data: any[] = [];
  ngOnChanges(changes: SimpleChanges) {
    console.log('Columns:', this.columns);
    console.log('Data:', this.data);
  }
}





