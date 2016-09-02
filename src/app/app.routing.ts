import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogComponent }      from './dialog.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/all',
        pathMatch: 'full'
    },
    {
        path: 'all',
        component: DialogComponent
    },
    {
        path: 'new',
        component: DialogComponent
    },
    {
        path: 'dialog/:id',
        component: DialogComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);