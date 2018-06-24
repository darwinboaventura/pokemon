import { Component } from '@angular/core';
import { routerTransition } from '@router/app.router.animations';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
    animations: [ routerTransition ]
})

export class MainContentComponent {
    constructor() {}

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
