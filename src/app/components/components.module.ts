import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "./layout/home/home.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { AngularMaterialModule } from "./angular-material/angular-material.module";


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