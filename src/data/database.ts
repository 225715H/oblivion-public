import * as SQLite from "expo-sqlite";
import { Folder } from "../context/folderContext";

let db: SQLite.SQLiteDatabase | undefined;

export const openDatabase = async () => {
  db = await SQLite.openDatabaseAsync("oblivion.db");

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS folders (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS flashcards (
      id INTEGER PRIMARY KEY NOT NULL,
      folder_id INTEGER NOT NULL,
      front TEXT NOT NULL,
      back TEXT NOT NULL,
      FOREIGN KEY (folder_id) REFERENCES folders(id)
    );
  `);
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
export const updateFolder = async (id: number, name: string) => {
  if (!db) await openDatabase();
  return await db!.runAsync(
    "UPDATE folders SET name = ? WHERE id = ?",
    name,
    id
  );
};

// フォルダーの削除
export const deleteFolder = async (id: number) => {
  if (!db) await openDatabase();
  return await db!.runAsync("DELETE FROM folders WHERE id = ?", id);
};

// 単語カードの挿入
export const insertFlashcard = async (
  folderId: number,
  front: string,
  back: string
) => {
  if (!db) await openDatabase();
  const result = await db!.runAsync(
    "INSERT INTO flashcards (folder_id, front, back) VALUES (?, ?, ?);",
    folderId,
    front,
    back
  );
  return result.lastInsertRowId;
};

// 単語カードの取得（フォルダーごと）
export const getFlashcardsByFolder = async (folderId: number) => {
  if (!db) await openDatabase();
  return await db!.getAllAsync(
    "SELECT * FROM flashcards WHERE folder_id = ?",
    folderId
  );
};

// 単語カードの更新
export const updateFlashcard = async (
  id: number,
  front: string,
  back: string
) => {
  if (!db) await openDatabase();
  return await db!.runAsync(
    "UPDATE flashcards SET front = ?, back = ? WHERE id = ?",
    front,
    back,
    id
  );
};

// 単語カードの削除
export const deleteFlashcard = async (id: number) => {
  if (!db) await openDatabase();
  return await db!.runAsync("DELETE FROM flashcards WHERE id = ?", id);
};
