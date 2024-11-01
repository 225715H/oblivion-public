import axios from 'axios';

const translateText = async (sourceLang: string, targetLang: string, text: string): Promise<string> => {
  try {
    const response = await axios.post('https://deepl-api-server.onrender.com/translate', {
      sourceLang,
      targetLang,
      text,
    }, {
      timeout: 5000,
    });
    const translatedText = response.data.translatedText;
    return translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
};

export default translateText;
