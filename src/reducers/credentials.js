import { SAVE_CREDENTIALS, CLEAR_CREDENTIALS } from "../actions";

const initialState = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
};

const credentials = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CREDENTIALS:
      const { cardNumber, expiryDate, cardName, cvc } = action.payload;
      return { ...state, cardNumber, expiryDate, cardName, cvc };
    case CLEAR_CREDENTIALS:
      return initialState;
    default:
      return state;
  }
};

export default credentials;
