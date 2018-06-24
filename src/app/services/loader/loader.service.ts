import { Injectable } from '@angular/core';

@Injectable()

export class LoaderService {
    private state = false;

    show() {
        this.state = true;
    }

    hide() {
        this.state = false;
    }

    isShowing() {
        return this.state;
    }
}
