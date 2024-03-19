import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-person-tab-menu',
  templateUrl: './person-tab-menu.component.html',
  styleUrl: './person-tab-menu.component.scss'
})
export class PersonTabMenuComponent {

  selectedTabIndex = signal(0);
  
}
