import React, { useMemo, useReducer, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import reducer, {
  initialState,
  LOGGED_IN,
  LOGGED_OUT,
} from "../reducers/AuthReducer";

export const TOKEN_KEY = "token";
export const USER_KEY = "user";
export const keys = [TOKEN_KEY, USER_KEY];

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState || {});

  const getAuthState = async () => {
    try {
      let token = await AsyncStorage.getItem(TOKEN_KEY);
      let user = await AsyncStorage.getItem(USER_KEY);
      user = JSON.parse(user);
      if (token !== null && user !== null) await handleLogin({ token, user });
      else await handleLogout();
      // if (token !== null) {
      //   getProfile(token).then((response) => {
      //     //  console.log('response', response);
      //     updateUser(response.data);
      //   });
      // }
      return { token, user };
    } catch (error) {
      throw new Error(error);
    }
  };

  const getToken = async () => {
    let token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  };

  const handleLogin = async (data) => {
    try {
      let { token, user } = data;
      let data_ = [
        [USER_KEY, JSON.stringify(user)],
        [TOKEN_KEY, token],
      ];
      await AsyncStorage.multiSet(data_);

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      dispatch({ type: LOGGED_IN, user: data.user, jwt: data.token });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(keys);

      delete axios.defaults.headers.common["Authorization"];

      dispatch({ type: LOGGED_OUT });
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateUser = async (user) => {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
      dispatch({ type: LOGGED_IN, user });
    } catch (error) {
      throw new Error(error);
    }
  };

  const value = useMemo(() => {
    return {
      state,
      getAuthState,
      handleLogin,
      handleLogout,
      updateUser,
      getToken,
    };
  }, [state]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth };
export default AuthProvider;
