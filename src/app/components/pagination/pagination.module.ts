import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationComponent } from '@components/pagination/pagination.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    exports: [
        BrowserModule,
        PaginationComponent
    ],
    declarations: [PaginationComponent]
})

export class PaginationModule {}
