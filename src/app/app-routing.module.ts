import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { HomeComponent } from './components/layout/home/home.component';
import { GetAllPersonComponent } from './components/person/get-all-person/get-all-person.component';
import { FormPersonComponent } from './components/person/form-person/form-person.component';


const routes: Routes = [
  { path: '', redirectTo: '/home/person', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children: [
    { path: 'person', component: GetAllPersonComponent},
    { path: 'person/adicionar', component: FormPersonComponent},
    { path: 'person/editar/:id', component: FormPersonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
