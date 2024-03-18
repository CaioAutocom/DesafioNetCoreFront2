import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "./layout/home/home.component";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { DynamicTableComponent } from "./layout/table/dynamic-table.component";
import { FilterComponent } from './layout/filter/filter.component';

@NgModule({
    imports: [
      AngularMaterialModule,
      FormsModule,
      ReactiveFormsModule
  ],
    exports:[
      AngularMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      DynamicTableComponent,
      FilterComponent
  ],
    declarations: [
      HomeComponent,
      DynamicTableComponent,
      FilterComponent 
    ]
})
export class ComponentsModule { }