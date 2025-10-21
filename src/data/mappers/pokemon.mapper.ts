import { Pokemon } from "../../domain/entities/pokemon";
import { PokemonApi } from "../source/remote/interface/pokeApi.inteface";
import { getId, getPhoto } from "../utils/pokemon.utils";

export class PokemonMapper {
    static pokeApitoPokemonEntity(data: PokemonApi): Pokemon{
        return {
            id: +getId(data.url),
            name: data.name,
            type: [],
            avatar: getPhoto(data.url),
            sprites: [],
        }
    }
}