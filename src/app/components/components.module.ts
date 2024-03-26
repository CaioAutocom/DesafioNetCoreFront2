import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "./layout/home/home.component";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { DynamicTableComponent } from "./layout/table/dynamic-table.component";
import { FilterComponent } from './layout/filter/filter.component';
import { GetAllProductsComponent } from './product/get-all-products/get-all-products.component';
import { GetAllUnitsComponent } from './unit/get-all-units/get-all-units.component';
import { CustomSnackBarComponent } from './utils/custom-snack-bar/custom-snack-bar.component';
import { CustomDialogComponent } from './utils/custom-dialog/custom-dialog.component';

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
      FilterComponent,
      GetAllProductsComponent,
      GetAllUnitsComponent,
      CustomSnackBarComponent,
      CustomDialogComponent 
    ]
})
export class ComponentsModule { }