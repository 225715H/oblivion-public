import { Flashcard } from "../context/flashCardContext";

// フォルダ内のカードを選択するアルゴリズム
const selectFlashcardsForCycle = (flashcards: Flashcard[]): Flashcard[] => {
  const level0Cards = flashcards.filter(card => card.level === 0);
  const level1Cards = flashcards.filter(card => card.level === 1);
  const level2Cards = flashcards.filter(card => card.level === 2);
  const level3Cards = flashcards.filter(card => card.level === 3);

  const selectedCards: Flashcard[] = [];

  // カードを選択
  const selectRandomCards = (cards: Flashcard[], count: number) => {
    const shuffled = cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // 各レベルからカードを選択
  selectedCards.push(...selectRandomCards(level0Cards, Math.min(5, level0Cards.length)));
  selectedCards.push(...selectRandomCards(level1Cards, Math.min(4, level1Cards.length)));
  selectedCards.push(...selectRandomCards(level2Cards, Math.min(2, level2Cards.length)));
  selectedCards.push(...selectRandomCards(level3Cards, Math.min(1, level3Cards.length)));

  // 不足分を補う
  const totalNeeded = 12;
  let remaining = totalNeeded - selectedCards.length;

  const fillRemainingCards = (cards: Flashcard[]) => {
    while (remaining > 0 && cards.length > 0) {
      selectedCards.push(...selectRandomCards(cards, Math.min(remaining, cards.length)));
      remaining = totalNeeded - selectedCards.length;
    }
  };

  fillRemainingCards(level0Cards);
  fillRemainingCards(level1Cards);
  fillRemainingCards(level2Cards);
  fillRemainingCards(level3Cards);

  // シャッフルしてリストを返す
  return selectedCards.sort(() => 0.5 - Math.random());
};

export default selectFlashcardsForCycle;