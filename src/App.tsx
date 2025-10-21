import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PokemonScreen } from "./presentation/screens/PokemonScreen";
import { BoxObjectModel } from "./presentation/screens/BoxObjectModel";
import { PositionScreen } from "./presentation/screens/PositionScreen";
import { FlexScreen } from "./presentation/screens/FlexScreen";
import { HomeworkScreen } from "./presentation/screens/HomeworkScreen";
import { CalculatorScreen } from "./presentation/screens/CalculatorScreen";
import { StackNavigation } from "./presentation/routes/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export const App = () => {
  return (
    <SafeAreaProvider>
      {/*<PokemonScreen />
      <BoxObjectModel />
      <PositionScreen />
      <FlexScreen />
      <HomeworkScreen />
      <CalculatorScreen />*/}
      <NavigationContainer>
       <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}