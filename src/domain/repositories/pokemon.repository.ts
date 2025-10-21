import { Pokemon } from "../entities/pokemon";

export interface PokemonRepository{
    getPokemons(): Promise<Pokemon[]>;
}