import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../provider/AuthProvider";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

export const Router = () => {
  const { state, getAuthState } = useAuth();

  return (
    <NavigationContainer>
      {state.user ? <AppStack token={state.jwt} /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
