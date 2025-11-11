import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { PokemonScreen } from "../screens/PokemonScreen";
import { CalculatorScreen } from "../screens/CalculatorScreen";
import { TabsNavigator } from "./TabsNavigator";
import { BottomTabsNavigator } from "./BottomTabsNavigator";
import { DrawerNavigation } from "./DrawerNavigation";
import { LoginScreen } from "../screens/auth/LoginScreen";

export type RouteStack = {
  Home: undefined,
  Pokemons: undefined,
  Calculator: undefined,
  Tabs: undefined,
  BottomTabs: undefined,
  Drawer: undefined,
  Login: undefined,
}

const Stack = createStackNavigator<RouteStack>();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    shadowColor: 'transparent',
                    backgroundColor: '#007bff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold'}
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pokemons" component={PokemonScreen} />
            <Stack.Screen name="Calculator" component={CalculatorScreen} />
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="BottomTabs" component={BottomTabsNavigator} />
        </Stack.Navigator>
    );
}