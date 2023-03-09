export const LOGGED_IN = "auth/LOGGED_IN";
export const LOGGED_OUT = "auth/LOGGED_OUT";

export const initialState = {
  isLoggedIn: false,
  user: null,
  jwt: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: {
      let { user, jwt } = action;
      if (jwt) {
        return { ...state, isLoggedIn: true, user, jwt };
      }
      return { ...state, isLoggedIn: true, user };
    }

    case LOGGED_OUT: {
      return { ...state, ...initialState };
    }

    default:
      return state;
  }
};

export default AuthReducer;
