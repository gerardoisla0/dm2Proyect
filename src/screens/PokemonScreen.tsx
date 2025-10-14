import axios from 'axios';
import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export const PokemonScreen = () => {

    const [respuesta, setRespuesta] = useState('');

   //LOGICA (CODIGO FUNCIONES)
  const pokemons = [
    { id: 1, name: 'Bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'Ivysaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'Venusaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  ]

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
        <Text style={myStyles.title}>Lista de Pokemones</Text>
        {
            pokemons.map( pokemon => (
                <View key={pokemon.id} style={myStyles.subContainer}>
                    <Pressable onPress={ () => processIa(pokemon.name) }>
                        <Text key={pokemon.id} style={myStyles.pokemonName}>
                            {pokemon.name}
                        </Text>
                        <Image 
                            source={{
                                uri: pokemon.imageUrl
                            }}
                            style={myStyles.pokemonImage}
                        />
                    </Pressable>
                </View>
            ))
        }

        <Text style={[myStyles.pokemonName, {marginTop:20, paddingHorizontal: 30}]}>Respuesta: {respuesta}</Text>
    </View>
  )
}

const myStyles = StyleSheet.create(
    {
       container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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