import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

const openDatabase = async () => {
  const uri = Asset.fromModule(require("../../assets/recommend.db")).uri;
  const dbTest = `${FileSystem.documentDirectory}SQLite/recommend.db`;

  const dbExist = await FileSystem.getInfoAsync(dbTest);
  if (dbExist.exists) return SQLite.openDatabaseAsync("recommend.db");
  await FileSystem.downloadAsync(uri, dbTest);
  return SQLite.openDatabaseAsync("recommend.db");
};

export interface RecommendFlashcard {
  id: number;
  English: string;
  Japanese: string;
}

export const setupDatabase = async (): Promise<RecommendFlashcard[]> => {
  const db = await openDatabase();

  // おすすめのフラッシュカードを取得
  const rows = await db.getAllAsync(
    "SELECT * FROM recommends ORDER BY RANDOM() LIMIT 10" // LIMITの値を変えれば取得するフラッシュカードの数を変更できる
  );
  return rows as RecommendFlashcard[];
};
