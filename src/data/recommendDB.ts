import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

const openDatabase = async () => {
  const dbName = "recommend.db";
  const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const dbExist = await FileSystem.getInfoAsync(dbPath);
  if (!dbExist.exists) {
    const asset = Asset.fromModule(require("../../assets/recommend.db"));

    await asset.downloadAsync();

    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );

    // asset.uriではなく、FileSystem.downloadAsyncを使用して、直接ファイルを保存します
    await FileSystem.downloadAsync(
      asset.uri,
      dbPath
    );
  }
  return SQLite.openDatabaseAsync(dbName);
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
