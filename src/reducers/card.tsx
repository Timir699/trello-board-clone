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

    // case "REMOVE_LIST_ID_FROM_CARD": {
    //   return cards.filter((card: any) => card.cardId !== action.payload.cardId);
    // }

    // case "ADD_LIST_ID_TO_CARD": {
    //   const card = {
    //     cardName: action.payload.card.cardName,
    //     cardId: action.payload.cardId,
    //     listId: action.payload.listId,
    //   };
    //   cards.push(card);

    //   return cards;
    // }
    case "SORT_CARD_ID": {
      console.log(action.payload);

      return cards;
    }
  }
  return cards;
};
