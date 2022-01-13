import { SAVE_CREDENTIALS } from "../actions";

const initialState = {
  cardNumber: "0000 0000 0000 0000",
  expiryDate: "",
  cardName: "",
  cvc: "",
};

const credentials = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CREDENTIALS:
      const { cardNumber, expiryDate, cardName, cvc } = action.payload;
      return { cardNumber, expiryDate, cardName, cvc };
    default:
      const billingInfo = localStorage.getItem('billingInfo');
      if (billingInfo) {
        return {...state, ...JSON.parse(billingInfo)}
      }
      return state;
  }
};

export default credentials;
