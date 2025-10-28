import { Pokemon } from "../../domain/entities/pokemon";
import { PokemonApi } from "../source/remote/interface/pokeApi.inteface";
import { getColorFromImage } from "../utils/get-color";
import { getId, getPhoto } from "../utils/pokemon.utils";

export class PokemonMapper {
    static async pokeApitoPokemonEntity(data: PokemonApi): Promise<Pokemon>{

        const avatar = getPhoto(data.url);
        const color = await getColorFromImage(avatar);

        return {
            id: +getId(data.url),
            name: data.name,
            type: [],
            avatar: avatar,
            sprites: [],
            color: color,
        }
    }
}