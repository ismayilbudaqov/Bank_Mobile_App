import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import settings from "../screens/settings";
import User from "../screens/User";
import Analyze from "../screens/Analyze";
import AllCard from "../screens/AllCard";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Ana Sehife",
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Ana Sehife",
          headerTintColor: "white",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#000040" },
        }}
        name="Analyze"
        component={Analyze}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AllCard"
        component={AllCard}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Ana Seife") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Bildiris") {
            iconName = focused ? "notifications" : "notifications";
          } else if (route.name === "Profil") {
            iconName = focused ? "man" : "man";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#383467",
        },
        tabBarActiveTintColor: "#49BAFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Ana Seife"
        component={HomeStack}
        options={{ tabBarBadge: 5 }}
      />
      <Tab.Screen
        name="Bildiris"
        component={settings}
        options={{ tabBarBadge: 1 }}
      />
      <Tab.Screen name="Profil" component={User} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  red: {
    backgroundColor: "red",
  },
});
