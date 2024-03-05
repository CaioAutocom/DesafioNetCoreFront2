import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "./layout/home/home.component";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { DynamicTableComponent } from "./layout/table/dynamic-table.component";
import { FilterComponent } from './layout/filter/filter.component';
import { GetAllPersonComponent } from './person/get-all-person/get-all-person.component';
import { TabMenuComponent } from './layout/tab-menu/tab-menu.component';


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
      DynamicTableComponent,
      FilterComponent
    ]
})
export class ComponentsModule { }