import { errorHandler } from '@utils/error-handler';
import { LoaderService } from '@services/loader/loader.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
    pokemon: any;

    constructor(public route: ActivatedRoute, public loader: LoaderService, public service: PokemonService) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const pokemon = +params.pokemon;

            if (pokemon) {
                this.loader.show();

                const request = this.service.getPokemon(pokemon);

                request.subscribe((response: any) => {
                    if (response) {
                        this.pokemon = response;

                        this.loader.hide();
                    }
                });
            }
        }, errorHandler.bind(this));
    }
}
