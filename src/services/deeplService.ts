import axios from 'axios';

interface TranslateResponse {
  translations: { text: string }[];
}

const translateText = async (sourceLang: string, targetLang: string, text: string): Promise<string> => {
  try {
    const response = await axios.post<TranslateResponse>('https://api.deepl.com/v2/translate', {
      text: [text],
      target_lang: targetLang,
      source_lang: sourceLang
    }, {
      headers: {
        'Authorization': 'DeepL-Auth-Key db8b021e-e59d-4d73-823a-4ba91d3bbec3', 
        'Content-Type': 'application/json'
      },
      timeout: 5000,
    });
    const translatedText = response.data.translations[0].text;
    return translatedText;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Translation error:", error.response ? error.response.data : error.message);
    } else {
      console.log("Translation error:", error);
    }
    throw error;  // エラーを再スローして呼び出し元で処理できるようにする
  }
};

export default translateText;
