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

const datePipeConfig =  {
  provide: DATE_PIPE_DEFAULT_OPTIONS,
  useValue: {
    dateformat: 'dd/MM/yyyy',
    timezone: '+0000',
  }
};

const localePipe = {
  provide: LOCALE_ID,
  useValue: 'pt-BR'
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
    AppRoutingModule,
    ComponentsModule,
    PersonModule
  ],
  providers: [
    localePipe,
    datePipeConfig,
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
