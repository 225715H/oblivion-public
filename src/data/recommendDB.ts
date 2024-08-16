import * as FileSystem from "expo-file-system";
import * as Papa from "papaparse";
import * as SQLite from "expo-sqlite";
import { getDatabase } from "./database";
import { useSQLiteContext } from "expo-sqlite";
import { Asset } from "expo-asset";

const openDatabase = async () => {
  const uri = Asset.fromModule(require("../../assets/recommend.db")).uri;
  console.log(uri);
  const dbTest = `${FileSystem.documentDirectory}SQLite/recommend.db`;
  console.log(dbTest);
  await FileSystem.downloadAsync(uri, dbTest);
  console.log("Downloaded");
  return SQLite.openDatabaseAsync("recommend.db");
};

export interface RecommendFlashcard {
  id: number;
  English: string;
  Japanese: string;
}

export const setupDatabase = async (): Promise<RecommendFlashcard[]> => {
  const db = await openDatabase();
  console.log("setupDatabase", db);

  const rows = await db.getAllAsync(
    "SELECT * FROM recommends ORDER BY RANDOM() LIMIT 10"
  );
  return rows as RecommendFlashcard[];
};
