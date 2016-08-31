import { Component } from '@angular/core';

@Component({
    selector: 'my-dialog',
    styles: [require('./dialog.component.sass').toString()],
    template: require('./dialog.component.pug')
})

export class DialogComponent { }