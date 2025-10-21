import { Pokemon } from "../../domain/entities/pokemon";
import { PokemonRepository } from "../../domain/repositories/pokemon.repository";
import { PokemonMapper } from "../mappers/pokemon.mapper";
import { pokeApi } from "../source/remote/api/pokeApi";
import { PokemonResult } from "../source/remote/interface/pokeApi.inteface";

export class PokemonRepositoryImpl implements PokemonRepository{
      async getPokemons (): Promise<Pokemon[]> {
        console.log('Cargando pokemons...');
        const {data} = await pokeApi.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon',   
            {
                params: {
                    offset: (1 - 1) * 10,
                    limit: 10
                }
            }
        );

        const pokemonEntities = data.results.map(item =>
            PokemonMapper.pokeApitoPokemonEntity(item)
        )
        console.log(pokemonEntities);
        return pokemonEntities;
    }
 
}