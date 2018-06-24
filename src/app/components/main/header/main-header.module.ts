import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MainHeaderComponent } from './main-header.component';

@NgModule({
    declarations: [
        MainHeaderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [
        MainHeaderComponent
    ]
})

export class MainHeaderModule {}
