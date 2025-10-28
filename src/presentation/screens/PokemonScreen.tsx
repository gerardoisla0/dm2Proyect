import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { GetPokemonListUseCase } from '../../domain/useCases/getList.usecase';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokemonCard } from '../components/PokemonCard';

export const PokemonScreen = () => {

    const [respuesta, setRespuesta] = useState('');
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [page, setPage] = useState(1);

   /*LOGICA (CODIGO FUNCIONES)
  const pokemons = [
    { id: 1, name: 'Bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'Ivysaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'Venusaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  ]*/

    const loadPokemons = async (page: number) => {
        const data = await GetPokemonListUseCase(page, 20);
        setPokemons((prevPokemons) => [...prevPokemons, ...data]);
    }

    useEffect(() => {
        loadPokemons(page);
    }, [page]);

    const fetchNextPage = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        console.log('Cargando página:', nextPage);
    }

  const processIa = async (pokemonName: string) => {
    try {

       const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', 
            {
                model: 'meta-llama/llama-3.2-3b-instruct:free',
                messages: [
                    {
                    role: 'user',
                    content: 'Dame la linea evolutiva del pokemon ' + pokemonName + ' en menos de 50 palabras'
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer sk-or-v1-xxxxx`,
                    'Content-Type': 'application/json',
                    'X-Title': 'Horóscopo Diario'
                }
            }
       );

       const descriptionText = response.data.choices[0].message.content;
       setRespuesta(descriptionText);
       console.log('Respuesta de la IA:', descriptionText);

    }
    catch (error) {
        console.error('Error al procesar la IA:', error);
    }
  }

  // RETORNO INTERFAZ
  return (
    <View style={myStyles.container}>
        {/*<Text style={myStyles.title}>Lista de Pokemones</Text>
        
            pokemons.map( pokemon => (
                <View key={pokemon.id} style={myStyles.subContainer}>
                    <Pressable onPress={ () => console.log(pokemon.name) }>
                        <Text key={pokemon.id} style={myStyles.pokemonName}>
                            {pokemon.name}
                        </Text>
                        <Image 
                            source={{
                                uri: pokemon.avatar
                            }}
                            style={myStyles.pokemonImage}
                        />
                    </Pressable>
                </View>
            ))
        <Text style={[myStyles.pokemonName, {marginTop:20, paddingHorizontal: 30}]}>Respuesta: {respuesta}</Text>*/}
        <FlatList
         data = {pokemons}
            keyExtractor = { (item) => item.id.toString() }
            numColumns={2}
            ListHeaderComponent={() => <Text style={myStyles.title}>Lista de Pokemones</Text>}
            renderItem={({item: pokemon}) => (
                <PokemonCard pokemon={pokemon} />
            )}
            onStartReachedThreshold={0.6}
            onEndReached={() => fetchNextPage()}
        />
    </View>
  )
}

const myStyles = StyleSheet.create(
    {
       container: {
            paddingHorizontal: 20,
            backgroundColor: '#200124ff',
       },
        subContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#200124ff',
       },
       title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: 50,
       },
       pokemonName: {
            fontSize: 16,
            color: '#ffffff',
       },
       pokemonImage:{
            width: 100,
            height: 100,
       }
    }
);