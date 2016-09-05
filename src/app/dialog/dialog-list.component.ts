import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog.service';
import { Message } from './message';


@Component({
    template: require('./dialog-list.component.pug'),
    providers: [DialogService]
})

export class DialogListComponent implements OnInit{ 
    dialogs: Message[];

    constructor(
        private dialogService: DialogService
    ) {  }

    getDialogs(): void {
        this.dialogService.getDialogs().then(dialogs => this.dialogs = dialogs);
    }

    ngOnInit(): void {
        this.dialogs = [];
        this.getDialogs();
    }
}
