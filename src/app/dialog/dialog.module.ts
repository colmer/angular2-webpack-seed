import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { DialogComponent }   from './dialog.component';
import { DialogListComponent }   from './dialog-list.component';
import { NewDialogListComponent }   from './new-dialog-list.component';
import { SmsComponent }   from './sms.component';
import { DialogService } from './dialog.service';


import { dialogRouting } from './dialog.routing';

@NgModule({
    imports: [
        BrowserModule,
        dialogRouting
    ],
    declarations: [
        DialogComponent,
        DialogListComponent,
        NewDialogListComponent,
        SmsComponent
    ],
    bootstrap: [ DialogComponent ]
})

export class DialogModule { }