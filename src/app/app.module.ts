import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LoginComponent } from './components/layout/login/login.component';
import { ComponentsModule } from './components/components.module';
import { ResolveIconAlignmentDirective } from './directives/resolve-icon-alignment.directive';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import localePt from '@angular/common/locales/pt';
import { PersonModule } from './components/person/person.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiErrorsInterceptor } from './interceptors/api-erros.interceptor';
import { SnackbarService } from './services/helpers/snackbar.service';

const datePipeConfig =  {
  provide: DATE_PIPE_DEFAULT_OPTIONS,
  useValue: {
    dateformat: 'dd/MM/yyyy',
    timezone: '+0000',
  }
};

const formfieldOutline = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}
}

const localePipe = {
  provide: LOCALE_ID,
  useValue: 'pt-BR'
}
const apiInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiErrorsInterceptor,
  multi: true
}
registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResolveIconAlignmentDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule,
    PersonModule,
    HttpClientModule
  ],
  providers: [
    localePipe,
    datePipeConfig,
    formfieldOutline,
    apiInterceptor,
    provideAnimationsAsync(),
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
