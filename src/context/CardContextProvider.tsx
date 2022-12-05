import { createContext, useReducer } from "react";
import { cardReducer } from "./../reducers/card";

export const CardContext = createContext<any>(null);

const CardContextProvider = ({ children }: any) => {
  const [cards, cardsDispatch] = useReducer(cardReducer, []);

  const values = {
    cards,
    cardsDispatch,
  };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export default CardContextProvider;
