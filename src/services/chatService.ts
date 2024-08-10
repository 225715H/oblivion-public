import axios from 'axios';

// APIキーとURLをコメントアウト
// const apiKey = '';
// const apiUrl = 'https://api.openai.com/v1/chat/completions';

// ランダムな文章を生成する関数
export const getRandomResponse = () => {
  const responses = [
    'こんにちは！今日はいい天気ですね。こんにちは！今日はいい天気ですね。こんにちは！今日はいい天気ですね。こんにちは！今日はいい天気ですね。',
    '今何をしているのですか？',
    'おもしろい話を聞かせてください。おもしろい話を聞かせてください。おもしろい話を聞かせてください。おもしろい話を聞かせてください。おもしろい話を聞かせてください。おもしろい話を聞かせてください。',
    'どんな音楽が好きですか？',
    '最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？最近読んだ本は何ですか？',
    '上記のコードについて、apiがお金を払わないと使えないので、ランダムに何かしらの文章を返すようにしといてください。'
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

export const sendMessageToChatGPT = async (message:any) => {
  try {
    // ランダムな文章を返す
    const result = getRandomResponse();
    return result;
  } catch (error) {
    console.error('Error generating random response:', error);
    return 'エラーが発生しました。もう一度お試しください。';
  }
};
