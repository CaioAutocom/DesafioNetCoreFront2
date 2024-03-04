import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LoginComponent } from './components/layout/login/login.component';
import { ComponentsModule } from './components/components.module';
import { ResolveIconAlignmentDirective } from './directives/resolve-icon-alignment.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResolveIconAlignmentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
