import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { DialogComponent } from './dialog.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    DialogComponent
  ],
  bootstrap: [ DialogComponent ]
})
export class AppModule {
}