import { openDatabase, insertFolder, insertFlashcard, deleteFolder, getFolders, getDatabase } from './database';

export const clearDatabase = async () => {
  try {
    // データベースを開く
    await openDatabase();

    // すべてのフォルダを取得
    const folders = await getFolders();

    // 各フォルダを削除（関連するフラッシュカードも削除される）
    for (const folder of folders) {
      await deleteFolder(folder.id);
    }

    console.log('Database cleared successfully.');
  } catch (error) {
    console.error('Error clearing the database:', error);
  }
};

export const CreateTestData = async () => {
  try {
    const folders = await getFolders();
    if (folders.length > 0) {
      console.log('Test data already exists.');
      return;
    }

    clearDatabase();
    const folderName = 'フォルダ';
    const folderId = await insertFolder(folderName);

    // フラッシュカードを作成
    const English = "example";
    const Japanese = "例";
    await insertFlashcard(folderId, English, Japanese);

    console.log('Test data created successfully.');
  } catch (error) {
    console.error('Error creating test data:', error);
  }
};
