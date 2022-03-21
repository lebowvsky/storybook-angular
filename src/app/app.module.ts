import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FloaxButtonComponent } from './components/floax-button/floax-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FloaxButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
