import * as SQLite from "expo-sqlite";
import { Folder } from "../context/folderContext";
import { Flashcard } from "../context/flashCardContext";

let db: SQLite.SQLiteDatabase | undefined;
const DATABASE_VERSION = 2;

export const openDatabase = async () => {
  db = await SQLite.openDatabaseAsync(`oblivion-test${DATABASE_VERSION}.db`);

  const result = await db!.getFirstAsync("PRAGMA user_version");
  const currentVersion = (result as { user_version: number }).user_version;

  if (currentVersion >= DATABASE_VERSION) return;
  await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS folders (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        checked INTEGER DEFAULT 1
      );
      CREATE TABLE IF NOT EXISTS flashcards (
        id INTEGER PRIMARY KEY NOT NULL,
        folder_id INTEGER NOT NULL,
        English TEXT NOT NULL,
        Japanese TEXT NOT NULL,
        level INTEGER DEFAULT 0,
        FOREIGN KEY (folder_id) REFERENCES folders(id)
        ON DELETE CASCADE
      );
      CREATE INDEX IF NOT EXISTS folder_id_index ON flashcards (folder_id);
      PRAGMA user_version = ${DATABASE_VERSION};
    `);
};

// databaseの取得
export const getDatabase = () => {
  if (!db) {
    throw new Error("Database is not opened yet. Please call openDatabase first.");
  }
  console.log("getDatabase");
  return db;
};

// フォルダーの挿入
export const insertFolder = async (name: string) => {
  if (!db) await openDatabase();
  const result = await db!.runAsync(
    "INSERT INTO folders (name) VALUES (?);",
    name
  );
  return result.lastInsertRowId;
};

// フォルダーの取得
export const getFolders = async (): Promise<Folder[]> => {
  if (!db) await openDatabase();
  const rows = await db!.getAllAsync("SELECT * FROM folders");
  return rows as Folder[];
};

// フォルダーの更新
export const updateFolder = async (id: number, name: string, check: number) => {
  if (!db) await openDatabase();
  return await db!.runAsync(
    "UPDATE folders SET name = ?, checked = ? WHERE id = ? ",
    name,
    id,
    check
  );
};

// フォルダーの削除
export const deleteFolder = async (id: number) => {
  if (!db) await openDatabase();
  await db!.runAsync("DELETE FROM flashcards WHERE folder_id = ?", id); // 関連する単語カードを削除
  return await db!.runAsync("DELETE FROM folders WHERE id = ?", id); // フォルダーを削除
};

// 単語カードの挿入
export const insertFlashcard = async (
  folderId: number,
  English: string,
  Japanese: string
) => {
  if (!db) await openDatabase();
  const result = await db!.runAsync(
    "INSERT INTO flashcards (folder_id, English, Japanese) VALUES (?, ?, ?);",
    folderId,
    English,
    Japanese
  );
  return result.lastInsertRowId;
};

// 単語カードの取得（フォルダーごと）
export const getFlashcardsByFolder = async (folderId: number) => {
  if (!db) await openDatabase();
  const rows = await db!.getAllAsync(
    "SELECT * FROM flashcards WHERE folder_id = ?",
    folderId
  );
  return rows as Flashcard[];
};

// 単語カードの更新
export const updateFlashcard = async (
  id: number,
  English: string,
  Japanese: string,
  folder_id: number
) => {
  if (!db) await openDatabase();
  return await db!.runAsync(
    "UPDATE flashcards SET English = ?, Japanese = ?, folder_id = ? WHERE id = ?",
    English,
    Japanese,
    folder_id,
    id
  );
};

// 単語カードのレベルを更新
export const updateFlashcardLevel = async (
  id: number,
  level: number
) => {
  if (!db) await openDatabase();
  
  // フラッシュカードのlevelを更新
  return await db!.runAsync(
    "UPDATE flashcards SET level = ? WHERE id = ?",
    level,
    id
  );
};

// 単語カードの削除
export const deleteFlashcard = async (id: number) => {
  if (!db) await openDatabase();
  return await db!.runAsync("DELETE FROM flashcards WHERE id = ?", id);
};
