import { AfterViewInit, Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef, Type } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.scss'
})
export class TabMenuComponent implements OnInit, AfterViewInit {
  @Input({required: true}) tabs: Tab[] = [];
  @ViewChild('tabContent', { read: ViewContainerRef }) tabContent!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    this.tabs.forEach((tab) => {
      const viewContainerRef = this.tabContent;
      viewContainerRef.clear(); // Limpa o contêiner antes de adicionar um novo componente
      const componentRef: ComponentRef<any> = viewContainerRef.createComponent(tab.component);
      // Se necessário, passe dados para o componente usando componentRef.instance
    });
  }
}

export interface Tab {
  title: string;
  component: Type<any>; // Referência ao tipo do componente
}