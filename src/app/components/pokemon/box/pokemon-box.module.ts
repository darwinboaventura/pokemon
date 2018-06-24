import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonBoxComponent } from '@components/pokemon/box/pokemon-box.component';

@NgModule({
    declarations: [
        PokemonBoxComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [
        PokemonBoxComponent
    ]
})

export class PokemonBoxModule {}