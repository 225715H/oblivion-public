import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DATABASE_NAME = "recommend.db";
const DATABASE_VERSION = 1;

export const openDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  const dbDirectory = `${FileSystem.documentDirectory}SQLite`;
  const dbPath = `${dbDirectory}/${DATABASE_NAME}`;

  // データベースファイルの存在を確認
  const dbInfo = await FileSystem.getInfoAsync(dbPath);
  let needToCopy = false;

  if (!dbInfo.exists) {
    needToCopy = true;
  } else {
    // バージョンをチェック
    const storedVersion =
      (await AsyncStorage.getItem("DATABASE_VERSION")) || "0";
    if (parseInt(storedVersion, 10) !== DATABASE_VERSION) {
      // 古いデータベースを削除
      await FileSystem.deleteAsync(dbPath, { idempotent: true });
      needToCopy = true;
    }
  }

  if (needToCopy) {
    // データベースをコピー
    await FileSystem.makeDirectoryAsync(dbDirectory, { intermediates: true });
    const asset = Asset.fromModule(require("../../assets/recommend.db"));
    await asset.downloadAsync();

    // `Asset.uri` を使用してデータベースファイルをコピー
    await FileSystem.copyAsync({
      from: asset.uri!,
      to: dbPath,
    });

    await AsyncStorage.setItem("DATABASE_VERSION", DATABASE_VERSION.toString());
    console.log("Database file copied.");
  }

  // データベースを開く（非同期メソッドを使用）
  const db = await SQLite.openDatabaseAsync(DATABASE_NAME);
  return db;
};

export interface RecommendFlashcard {
  id: number;
  English: string;
  Japanese: string;
}

export const setupDatabase = async (): Promise<RecommendFlashcard[]> => {
  const db = await openDatabase();

  // 非同期メソッドを使用してデータを取得
  const rows = await db.getAllAsync<RecommendFlashcard>(
    "SELECT * FROM recommends ORDER BY RANDOM() LIMIT 10;"
  );
  return rows;
};
