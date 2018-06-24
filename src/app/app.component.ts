import { Message } from 'primeng/api';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    msgs: Message[] = [];

    constructor(public message: MessageService) {}
}
