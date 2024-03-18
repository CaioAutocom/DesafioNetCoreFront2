import { Component } from '@angular/core';

@Component({
  selector: 'app-person-tab-menu',
  templateUrl: './person-tab-menu.component.html',
  styleUrl: './person-tab-menu.component.scss'
})
export class PersonTabMenuComponent {
  background = 'primary'; 
  links = ['person', 'adicionar', 'Tab 3'];
  activeLink = this.links[0];
}
