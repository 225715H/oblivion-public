import axios from 'axios';

// ランダムな文章を生成する関数 apiの代わり　遅延も再現
export const getRandomResponse = async () => {
  const responses = [
    'てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、',
    'てれぱん、',
    'てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、てれぱん、',
    'あーや、あーや、あーや、あーや、あーや、あーや、あーや、あーや、',
    'テスト、テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
    'ういうい'
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const randomDelay = Math.floor(Math.random() * 2000) + 1000; // 1〜3秒の間でランダムに遅延

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(responses[randomIndex]);
    }, randomDelay);
  });
};

export const sendMessageToChatGPT = async (message: any) => {
  try {
    // ランダムな文章を返す
    const result = await getRandomResponse();
    return result;
  } catch (error) {
    console.error('Error generating random response:', error);
    return 'エラーが発生しました。もう一度お試しください。';
  }
};
