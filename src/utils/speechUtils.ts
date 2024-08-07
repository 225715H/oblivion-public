import * as Speech from 'expo-speech';

export const speakText = (text: string, lan: string) => {
  const languageCode = lan === '日本語' ? 'ja' : 'en';
  console.log('speaking', text, languageCode);
  Speech.speak(text, { language: languageCode });
};
