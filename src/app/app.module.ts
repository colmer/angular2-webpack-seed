import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { DialogComponent } from './dialog.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    DialogComponent
  ],
  bootstrap: [ DialogComponent ]
})
export class AppModule {
}