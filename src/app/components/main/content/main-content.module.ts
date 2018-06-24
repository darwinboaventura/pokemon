import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MainContentComponent } from '@components/main/content/main-content.component';

@NgModule({
    declarations: [
        MainContentComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [
        MainContentComponent
    ]
})

export class MainContentModule {}
