import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dialog',
    styles: [require('./dialog.component.sass')],
    template: require('./dialog.component.pug')
})

export class DialogComponent { 
    constructor(
        private router: Router
    ) { }
 }