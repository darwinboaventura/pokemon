import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pokemon-box',
    templateUrl: './pokemon-box.component.html',
    styleUrls: ['./pokemon-box.component.scss']
})

export class PokemonBoxComponent {
    @Input() id: any;
    @Input() name: string;

    sprite_uri = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    constructor() {}
}
