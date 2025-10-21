import { PokemonRepositoryImpl } from "../../data/repositories/PokemonRepositoryImpl";
import { Pokemon } from "../entities/pokemon";

const {getPokemons} = new PokemonRepositoryImpl();
export const GetPokemonListUseCase = async (): Promise<Pokemon[]> => {
  return await getPokemons();
}
