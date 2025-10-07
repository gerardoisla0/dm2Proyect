import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.text}>PositionScreen</Text>
      <View style={myStyles.greenBox}></View>
      <View style={myStyles.purpleBox}></View>
      <View style={myStyles.blueBox}></View>
    </View>
  )
}


const myStyles = StyleSheet.create(
    {
       container: {
            flex: 1,
            backgroundColor: 'red',
       },
        text: {
            fontSize: 20,
            color: 'white',
            padding: 20,
            backgroundColor: 'black',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
        },
        greenBox: {
            width: 100,
            height: 100,
            backgroundColor: 'green',
            position: 'relative'
        },
        purpleBox: {
            width: 100,
            height: 100,
            backgroundColor: 'purple',
            position: 'relative',
            left: 50,
        },
        blueBox: {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            position: 'absolute',
            top: 50,
            left: 50,
        }
    }
);