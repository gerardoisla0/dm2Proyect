import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={myStyles.container}>
        <View style={[myStyles.greenBox, myStyles.box]}></View>
        <View style={[myStyles.purpleBox, myStyles.box]}></View>
        <View style={[myStyles.blueBox, myStyles.box]}></View>
        <View style={[myStyles.redBox, myStyles.box]}></View>
        <View style={[myStyles.redBox, myStyles.box]}></View>
        <View style={[myStyles.greenBox, myStyles.box]}></View>
        <View style={[myStyles.purpleBox, myStyles.box]}></View>
        <View style={[myStyles.blueBox, myStyles.box]}></View>
    </View>
  )
}

const myStyles = StyleSheet.create(
    {
       container: {
            flex: 1,
            backgroundColor: 'gray',
            flexDirection: 'row', // eje X  // column eje Y
            justifyContent: 'flex-start', // main axis
            alignItems: 'flex-start', // cross axis
            flexWrap: 'wrap-reverse',
            gap: 3
       },
       box:{
            width: 100,
            height: 100,
       },
        greenBox: {
            //flex: 1,
            backgroundColor: 'green',
        },
        purpleBox: {
           // flex: 2,
            backgroundColor: 'purple',
        },
        blueBox: {
           // flex: 3,
            backgroundColor: 'blue',
            //alignSelf: 'center'
        },
        redBox: {
           // flex: 3,
            backgroundColor: 'red',
        }
    }
);

//pantalla ocupa 6 unidades flex 
// (green 1 = 16.66%, purple 2 = 33.33% y blue 3 = 50%)