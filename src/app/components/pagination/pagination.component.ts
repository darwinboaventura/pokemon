import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {
    @Input() total: any;
    @Input() limit: any;
    @Input() prev: any;
    @Input() next: any;

    @Output() pageChanged = new EventEmitter();

    activePage: any = 1;
    pages: Array<Number> = [];

    constructor() {}

    ngOnInit() {
        if (this.total && this.limit) {
            this.updatePages();
        }
    }

    handleFixedButtons(type: any) {
        if (type === 'prev') {
            this.activePage -= 1;
        } else if (type === 'next') {
            this.activePage += 1;
        }

        if (this.activePage === 0) {
            this.activePage += 1;
        }

        this.changePage(this.activePage);
    }

    changePage(page: any) {
        if (page) {
            this.activePage = page;
            this.updatePages();
            this.pageChanged.emit((page - 1) * this.limit);
        }
    }

    updatePages() {
        const pagesQuantity: number = Math.round(this.total / this.limit);
        const pages = [];

        if (pagesQuantity) {
            for (let i = 1; i <= pagesQuantity && pages.length < 10; i++) {
                pages.push(i);
            }

            if (pages) {
                this.pages = pages;
            }
        }
    }
}
