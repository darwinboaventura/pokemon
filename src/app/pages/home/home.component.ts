import { LoaderService} from '@services/loader/loader.service';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    meta: any = {
        total: null,
        uri: {
            prev: null,
            next: null
        }
    };
    pokemons: Array<object> = [];

    constructor(public service: PokemonService, public loader: LoaderService, public message: MessageService) {}

    ngOnInit() {
        this.handlePokemons();
    }

    handlePokemons(offset?: Number) {
        this.loader.show();

        this.service.getPokemon(null, offset).subscribe((response: any) => {
            if (response) {
                if (response.results) {
                    this.pokemons = response.results.map((pokemon) => {
                        pokemon.id = pokemon.url.substr(-3).match(/\d+/).join("");

                        return pokemon;
                    });
                }

                this.meta.uri.prev = response.previous;
                this.meta.uri.next = response.next;
                this.meta.total = response.count;
            }

            this.loader.hide();
        }, (err: any) => {
            console.log('ERROR:', err);

            this.message.add({
                severity: 'info',
                summary: 'Ops...',
                detail: err && err.message ? err.message : 'Não foi possível completar sua solicitação, tente novamente.'
            });

            this.loader.hide();
        });
    }

    handlePagination(offset) {
        if (offset) {
            this.handlePokemons(offset);
        } else {
            this.handlePokemons();
        }
    }
}
