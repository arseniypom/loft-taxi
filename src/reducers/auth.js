import { LOG_IN, LOG_OUT, SAVE_USER_INFO } from "../actions";

const initialState = {
  isLoggedIn: false,
  token: "",
  name: "",
  surname: "",
  email: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true, token: action.payload };
    case SAVE_USER_INFO:
      const { email, name, surname } = action.payload;
      return { ...state, isLoggedIn: true, email, name, surname };
    case LOG_OUT:
      return { isLoggedIn: false, token: "" };
    default:
      const user = localStorage.getItem('user');
      if (user) {
        return {...state, ...JSON.parse(user)}
      }
      return state;
  }
};

export default auth;
