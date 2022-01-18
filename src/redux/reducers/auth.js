import { LOG_IN, LOG_OUT, REGISTER, SAVE_TOKEN } from "../actions";

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("token")) ? true : false,
  token: JSON.parse(localStorage.getItem("token")) || "",
  name: "",
  surname: "",
  email: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, token: "" };
    case REGISTER:
      const { email, name, surname } = action.payload;
      return { ...state, email, name, surname };
    case SAVE_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default auth;
