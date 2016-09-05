import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { routing } from './app.routing';

import { DialogModule }  from './dialog/dialog.module';

@NgModule({
  imports: [
    BrowserModule,
    DialogModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }