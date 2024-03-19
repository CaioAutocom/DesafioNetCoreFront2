import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components.module";
import { GetAllPersonComponent } from "./get-all-person/get-all-person.component";
import { PersonTabMenuComponent } from './person-tab-menu/person-tab-menu.component';
import { FormPersonComponent } from "./form-person/form-person.component";
import { PersonService } from "../../services/person.service";
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
    imports: [ComponentsModule],
    exports: [GetAllPersonComponent],
    providers: [PersonService],
    declarations: [
        GetAllPersonComponent,
        PersonTabMenuComponent,
        FormPersonComponent,
        PersonDetailsComponent
    ]
})
export class PersonModule {}