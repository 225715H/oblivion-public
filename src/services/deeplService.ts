import axios from 'axios';

interface TranslateResponse {
  translations: { text: string }[];
}

const translateText = async (sourceLang: string, targetLang: string, text: string): Promise<string> => {
  try {
    const response = await axios.post<TranslateResponse>('https://api-free.deepl.com/v2/translate', {
      text: [text],
      target_lang: targetLang,
      source_lang: sourceLang
    }, {
      headers: {
        'Authorization': 'DeepL-Auth-Key cdd55087-b217-4187-ab86-7df4ea8ddcc1:fx', 
        'Content-Type': 'application/json'
      }
    });
    const translatedText = response.data.translations[0].text;
    return translatedText;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Translation error:", error.response ? error.response.data : error.message);
    } else {
      console.error("Translation error:", error);
    }
    throw error;  // エラーを再スローして呼び出し元で処理できるようにする
  }
};

export default translateText;
