import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

let db: SQLite.SQLiteDatabase | undefined;

const openDatabase = async () => {
  if (db !== undefined) {
    return db;
  }

  const dbName = "recommend.db";
  const dbDir = `${FileSystem.documentDirectory}SQLite`;
  const dbPath = `${dbDir}/${dbName}`;

  // データベースファイルが存在するか確認
  const dbExists = await FileSystem.getInfoAsync(dbPath);
  if (!dbExists.exists) {
    // ディレクトリが存在しない場合は作成
    await FileSystem.makeDirectoryAsync(dbDir, { intermediates: true });

    // アセットからデータベースファイルをコピー
    const asset = Asset.fromModule(require("../../assets/recommend.db"));
    await FileSystem.downloadAsync(asset.uri, dbPath);
  }

  // データベースを開く
  db = await SQLite.openDatabaseAsync(dbName);
  return db;
};

export default openDatabase;

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
