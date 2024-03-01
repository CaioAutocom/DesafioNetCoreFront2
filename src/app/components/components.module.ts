import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { HomeComponent } from './Home/home.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';

const modules = [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
]

@NgModule({
    imports: modules,
    exports: modules,
    declarations: [
      HomeComponent,
      SidebarComponent
    ]
})
export class ComponentsModule { }