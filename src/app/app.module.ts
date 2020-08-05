import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerwerComponent } from './serwer/serwer.component';
import { SerweryComponent } from './serwery/serwery.component';

@NgModule({
  declarations: [
    AppComponent,
    SerwerComponent,
    SerweryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
