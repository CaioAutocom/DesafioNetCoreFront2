import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "./layout/home/home.component";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { TableComponent } from "./layout/table/table.component";
import { FilterComponent } from './layout/filter/filter.component';


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
      TableComponent,
      FilterComponent
    ]
})
export class ComponentsModule { }