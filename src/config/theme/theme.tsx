import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#5C5C5E',
    orange: '#FF9F0A',
      
    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000',
}

export const styles = StyleSheet.create({
   calcultorContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    padding: 20
   },
   mainResult:{
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
   },
   subResult:{
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
   },
   row: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
    justifyContent: 'center',
    padding: 10
   },
   button: {
    backgroundColor: colors.darkGray,
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
   },
   buttonText:{
    fontSize: 30,
    color: colors.textPrimary,
    fontWeight: '300',
    textAlign: 'center',
    padding: 10
   }
});