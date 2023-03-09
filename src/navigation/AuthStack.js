import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../screens/SingUp";
import SignInScreen from "../screens/SignIn";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignUp"
        options={{
          gestureEnabled: false,
        }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="SignIn"
        options={{
          gestureEnabled: false,
        }}
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
