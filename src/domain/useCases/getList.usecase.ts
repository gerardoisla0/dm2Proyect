import { PokemonRepositoryImpl } from "../../data/repositories/PokemonRepositoryImpl";
import { Pokemon } from "../entities/pokemon";

const {getPokemons} = new PokemonRepositoryImpl();
export const GetPokemonListUseCase = async (page: number, limit: number): Promise<Pokemon[]> => {
  return await getPokemons(page, limit);
}
