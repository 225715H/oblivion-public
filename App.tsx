import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigations/mainNavigator";
import { TopContextProvider } from "./src/context/topContext";
import { CreateTestData } from "./src/data/createTestDatabase";

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        await CreateTestData();
        console.log("Database setup completed.");
      } catch (error) {
        console.error("Failed to set up database:", error);
      }
    })();
  }, []);

  return (
    <TopContextProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </TopContextProvider>
  );
}
