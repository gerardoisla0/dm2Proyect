import { Pokemon } from "../../domain/entities/pokemon";
import { PokemonRepository } from "../../domain/repositories/pokemon.repository";
import { PokemonMapper } from "../mappers/pokemon.mapper";
import { pokeApi } from "../source/remote/api/pokeApi";
import { PokemonResult } from "../source/remote/interface/pokeApi.inteface";

export class PokemonRepositoryImpl implements PokemonRepository{
      async getPokemons(page: number, limit: number = 20): Promise<Pokemon[]> {
        console.log('Cargando pokemons...');
        const {data} = await pokeApi.get<PokemonResult>('/pokemon',   
            {
                params: {
                    offset: (page - 1) * limit,
                    limit: limit
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