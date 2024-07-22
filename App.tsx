import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigations/mainNavigator";

// Appコンポーネントの定義
function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
