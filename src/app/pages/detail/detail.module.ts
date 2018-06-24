import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DetailComponent } from '@pages/detail/detail.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [
        DetailComponent
    ],
    declarations: [DetailComponent]
})

export class DetailModule {}