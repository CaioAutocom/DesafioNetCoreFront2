import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components.module";
import { DynamicTableComponent } from "../layout/table/dynamic-table.component";
import { GetAllPersonComponent } from "./get-all-person/get-all-person.component";

@NgModule({
    imports: [ComponentsModule],
    exports: [GetAllPersonComponent],
    declarations: [
        GetAllPersonComponent
    ]
})
export class PersonModule {}