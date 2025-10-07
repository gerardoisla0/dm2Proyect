import { StyleSheet, View } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={ styles.container }>

        <View style={[styles.box, styles.purpleBox ]} />
        <View style={[styles.box, styles.orangeBox ]} />
        <View style={[styles.box, styles.blueBox ]} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white'
  },
  purpleBox: {
    backgroundColor: '#60a0e4ff',
  },
  orangeBox: {
    backgroundColor: '#adf09cff',
  },
  blueBox: {
    backgroundColor: '#d64141ff',
  },

})