import { NgModule } from '@angular/core';
import { HomeModule } from '@pages/home/home.module';
import { DetailModule } from '@pages/detail/detail.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        HomeModule,
        DetailModule
    ],
    exports: [
        HomeModule,
        DetailModule
    ],
    declarations: []
})

export class PagesModule {}
