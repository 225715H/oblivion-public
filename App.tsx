import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigations/mainNavigator";
import { TopContextProvider } from "./src/context/topContext";
import { CreateTestData } from "./src/data/createTestDatabase";
import { SQLiteProvider } from "expo-sqlite";

export default function App() {
  // useEffect(() => {
  //   // アプリ起動時にデータベースを削除
  //   CreateTestData()
  //     .then(() => {
  //       console.log("Database deleted on app startup.");
  //     })
  //     .catch((error: any) => {
  //       console.error("Failed to delete database:", error);
  //     });
  // }, []); // 空の依存配列により、アプリ起動時に一度だけ実行される

  return (
    <TopContextProvider>
      <NavigationContainer
      // スタックナビゲーションの状態をコンソールに出力
      // onStateChange={(state) => {
      //   console.log('Current navigation state:', JSON.stringify(state, null, 2));
      // }}
      >
        {/* <SQLiteProvider
          databaseName="recommend.db"
          assetSource={{ assetId: require("./assets/recommend.db") }}
        > */}
          <MainNavigator />
        {/* </SQLiteProvider> */}
      </NavigationContainer>
    </TopContextProvider>
  );
}
