import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PokemonScreen } from "./screens/PokemonScreen";
import { BoxObjectModel } from "./screens/BoxObjectModel";
import { PositionScreen } from "./screens/PositionScreen";
import { FlexScreen } from "./screens/FlexScreen";
import { HomeworkScreen } from "./screens/HomeworkScreen";

export const App = () => {
  return (
    <SafeAreaProvider>
      {/*<PokemonScreen />
      <BoxObjectModel />
      <PositionScreen />
      <FlexScreen />*/}
      <HomeworkScreen />
    </SafeAreaProvider>
  );
}