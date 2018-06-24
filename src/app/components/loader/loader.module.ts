import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderComponent } from '@components/loader/loader.component';

@NgModule({
    declarations: [
        LoaderComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        LoaderComponent
    ]
})

export class LoaderModule {}
