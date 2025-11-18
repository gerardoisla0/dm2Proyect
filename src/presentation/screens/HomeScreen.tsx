import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { RouteStack } from "../routes/StackNavigation";
import { useAuth } from "../hooks/useAuth";

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RouteStack>>();
    const {status, logout} = useAuth();

    const logoutUser = () => {
        logout();
        navigation.reset({
            index:0,
            routes: [{ name: 'Login' }]
        })
    }

    return(
        <>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{color:'black'}}>Hola, bienvenido:</Text>
                <Pressable
                onPress={() => navigation.navigate('Pokemons')} 
                style={style.button}
                >
                    <Text style={style.textButton}>Lista de Pokemon</Text>
                </Pressable>
                <Pressable
                onPress={() => navigation.navigate('Tabs')} 
                style={style.button}
                >
                    <Text style={style.textButton}>Top Tabs Navagitor</Text>
                </Pressable>
                <Pressable
                onPress={() => navigation.navigate('BottomTabs')} 
                style={style.button}
                >
                    <Text style={style.textButton}>Bottom Tabs Navagitor</Text>
               </Pressable>
                <Text style={{color:'black'}}>Estado: {status}</Text>
                <Pressable
                onPress={() => logoutUser()} 
                style={style.button}
                >
                    <Text style={style.textButton}>Salir</Text>
                </Pressable>
            </View>
        </>
    );
}

const style = StyleSheet.create(
{
    button :{
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        margin:10,
        alignItems: 'center',
    },
    textButton:{
        color: 'white'
    }
}
);