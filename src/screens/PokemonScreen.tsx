import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const PokemonScreen = () => {

   //LOGICA (CODIGO FUNCIONES)
  const pokemons = [
    { id: 1, name: 'Bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'Ivysaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'Venusaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  ]

  // RETORNO INTERFAZ
  return (
    <View style={myStyles.container}>
        <Text style={myStyles.title}>Lista de Pokemones</Text>
        {
            pokemons.map( pokemon => (
                <View key={pokemon.id} style={myStyles.subContainer}>
                    <Text key={pokemon.id} style={myStyles.pokemonName}>
                        {pokemon.name}
                    </Text>
                    <Image 
                        source={{
                            uri: pokemon.imageUrl
                        }}
                        style={myStyles.pokemonImage}
                    />
                </View>
            ))
        }
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