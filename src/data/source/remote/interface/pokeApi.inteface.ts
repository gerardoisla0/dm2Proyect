export interface PokemonResult {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonApi[];
}

export interface PokemonApi {
    name: string;
    url:  string;
}