import { openDatabase, insertFolder, insertFlashcard, deleteFolder, getFolders } from './database';

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
    // 既存のデータを削除
    await clearDatabase();
    
    // 新しいフォルダとフラッシュカードを作成
    for (let i = 1; i <= 2; i++) {
      const folderName = `フォルダ${i}`;
      const folderId = await insertFolder(folderName);

      // 各フォルダに30個のフラッシュカードを作成
      for (let j = 1; j <= 20; j++) {
        const English = `folder${i}:flush-card${j}`;
        const Japanese = `フォルダ${i}:フラッシュカード${j}`;
        await insertFlashcard(folderId, English, Japanese);
      }
    }

    console.log('Test data created successfully.');
  } catch (error) {
    console.error('Error creating test data:', error);
  }
};
