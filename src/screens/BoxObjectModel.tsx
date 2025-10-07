import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const BoxObjectModel = () => {
  return (
    <View style={myStyles.container}>
        <View style={myStyles.content}>
            <Text style={myStyles.contentText}>Hola Mundo</Text>
            <Text style={myStyles.contentTextDM2}>DM2</Text>
        </View>
    </View>
  )
}

const myStyles = StyleSheet.create(
    {
       container: {
            flex: 1,
            backgroundColor: 'red',
       },
        content: {
            width: '80%',
            height: '80%',
            backgroundColor: 'blue',
        },
        contentText: {
            fontSize: 20,
            color: 'white',
            paddingVertical: 20,
            paddingHorizontal: 20,
            backgroundColor: 'black',
            borderColor: 'white',
            borderRightWidth: 10,
            borderRadius: 20,
        },
        contentTextDM2: {
            fontSize: 20,
            color: 'black',
            backgroundColor: 'yellow',
            margin: 20,
            padding: 20,
            borderColor: 'green',   
        }
    }
);