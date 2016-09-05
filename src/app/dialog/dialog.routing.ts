import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { DialogComponent }        from './dialog.component';
import { DialogListComponent }    from './dialog-list.component'
import { NewDialogListComponent } from './new-dialog-list.component'
import { SmsComponent }           from './sms.component';

const dialogRoutes: Routes = [
    {
        path: 'dialog',
        component: DialogComponent,
        children: [
            { path: 'all',  component: DialogListComponent },
            { path: 'new',  component: NewDialogListComponent },
            { path: 'sms',  component: SmsComponent },
            { path: '', redirectTo: 'all', pathMatch: 'full' }
        ]
    }
];

export const dialogRouting: ModuleWithProviders = RouterModule.forChild(dialogRoutes);