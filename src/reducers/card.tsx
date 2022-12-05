export const cardReducer = (cards: any, action: any) => {
  switch (action.type) {
    case "CREATE_CARD": {
      const card = {
        cardName: action.payload.cardName,
        cardId: action.payload.cardId,
        listId: action.payload.listId,
      };
      return [...cards, card];
    }
  }
  return cards;
};
