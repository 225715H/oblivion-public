import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigations/mainNavigator";
import { TopContextProvider } from "./src/context/topContext";
import { CreateTestData } from "./src/data/createTestDatabase";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

async function copyDatabaseFile() {
  const databaseFileName = "recommend.db";
  const sqliteDirectory = `${FileSystem.documentDirectory}SQLite`;
  const databaseFileUri = `${sqliteDirectory}/${databaseFileName}`;

  await FileSystem.makeDirectoryAsync(sqliteDirectory, { intermediates: true });

  const fileExists = await FileSystem.getInfoAsync(databaseFileUri);
  if (!fileExists.exists) {
    const asset = Asset.fromModule(require("./assets/recommend.db"));
    await asset.downloadAsync();

    await FileSystem.copyAsync({
      from: asset.uri!,
      to: databaseFileUri,
    });
    console.log("Database file copied successfully.");
  } else {
    console.log("Database file already exists.");
  }
}

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        await copyDatabaseFile();
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
