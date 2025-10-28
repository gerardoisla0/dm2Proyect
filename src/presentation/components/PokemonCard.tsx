import React from 'react'
import { Pressable, Text, Image, StyleSheet } from 'react-native'
import { Pokemon } from '../../domain/entities/pokemon';

interface Props {
    pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Pressable onPress={ () => console.log(pokemon.name) }
        style={{flex:1}}>
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