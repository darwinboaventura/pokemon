import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable()

export class PokemonService {
    uri: string = environment.app.api_uri;

    constructor(public http: HttpClient) {}

    getPokemon(pokemon?: any, offset?: Number) {
        let location = `${this.uri}/pokemon`;

        if (pokemon) {
            location += `/${pokemon}`;
        }

        if (offset) {
            location += `?offset=${offset}`;
        }

        return this.http.get(location);
    }
}
