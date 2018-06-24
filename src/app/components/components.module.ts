import { NgModule } from '@angular/core';
import { LoaderModule } from '@components/loader/loader.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainHeaderModule } from '@components/main/header/main-header.module';
import { PokemonBoxModule } from '@components/pokemon/box/pokemon-box.module';
import { MainContentModule } from '@components/main/content/main-content.module';
import { PaginationModule } from '@components/pagination/pagination.module';

@NgModule({
    imports: [
        BrowserModule,
        MainHeaderModule,
        MainContentModule,
        PokemonBoxModule,
        LoaderModule,
        PaginationModule
    ],
    exports: [
        BrowserModule,
        MainHeaderModule,
        MainContentModule,
        PokemonBoxModule,
        LoaderModule,
        PaginationModule
    ],
    declarations: []
})

export class ComponentsModule {}
