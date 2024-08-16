import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

let db: SQLite.SQLiteDatabase | undefined;
const dbName = "recommendedWords.db";
const dbLocation = `${FileSystem.documentDirectory}${dbName}`;

const copyDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  try {
    const dbExists = await FileSystem.getInfoAsync(dbLocation);

    if (!dbExists) {
      const assets = Asset.fromModule(
        require("./assets/www/recommendedWords.db")
      );
      await FileSystem.copyAsync({
        from: assets.uri,
        to: dbLocation,
      });
    }
  } catch (error) {
    console.error("Failed to copy database: ", error);
    throw error;
  }

  const db = await SQLite.openDatabaseAsync(dbLocation);
  return db;
};

export interface RecommendFlashcard {
  English: string;
  Japanese: string;
}

export const setupDatabase = async (): Promise<RecommendFlashcard[]> => {
  try {
    const db = await copyDatabase(); // 既存のデータベースをコピー

    if (!db) {
      throw new Error("Database not initialized.");
    }

    // テーブルの存在確認
    const tableExists = await db.getFirstAsync<{ count: number }>(
      "SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='recommends'"
    );

    if (!tableExists || tableExists.count === 0) {
      throw new Error("Table 'recommendWords' does not exist in the database.");
    } else {
      console.log(`Table 'recommendWords' exists in the database.`);
    }

    // ランダムに30個のフラッシュカードを取得
    const rows = await db.getAllAsync<RecommendFlashcard>(
      "SELECT English, Japanese FROM recommends ORDER BY RANDOM() LIMIT 30"
    );

    console.log(`Retrieved ${rows.length} flashcards from 'recommends' table.`);
    rows.forEach((flashcard, index) => {
      console.log(
        `Flashcard ${index + 1}: English = ${flashcard.English}, Japanese = ${
          flashcard.Japanese
        }`
      );
    });

    return rows;
  } catch (error) {
    console.error("Failed to setup database: ", error);
    throw error;
  }
};
