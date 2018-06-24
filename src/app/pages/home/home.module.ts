import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '@pages/home/home.component';
import { ComponentsModule } from '@components/components.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        ComponentsModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}
