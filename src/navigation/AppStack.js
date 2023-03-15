import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import User from "../screens/User";
import Analyze from "../screens/Analyze";
import AllCard from "../screens/AllCard";
import Map from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

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
          headerTintColor: "black",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#fff" },
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

const SettingStack = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Bildirişlər",

          headerTintColor: "white",
          headerMode: "screen",
          headerStyle: { backgroundColor: "white" },
          headerRight: () => (
            <View style={{ paddingHorizontal: 15 }}>
              <Ionicons name="notifications-sharp" size={32} color="black" />
            </View>
          ),
          headerLeft: () => {},
        }}
        name="Home"
        component={Settings}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Profil",

          headerTintColor: "white",
          headerMode: "screen",
          headerStyle: { backgroundColor: "white" },
          headerRight: () => (
            <View style={{ paddingHorizontal: 15 }}>
              <Ionicons
                name="ios-person-circle-sharp"
                size={32}
                color="black"
              />
            </View>
          ),
        }}
        name="Home"
        component={User}
      />
    </Stack.Navigator>
  );
};
const MapStack = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Map",

          headerTintColor: "white",
          headerMode: "none",
          headerStyle: { backgroundColor: "white" },
        }}
        name="Map"
        component={Map}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // position: "relative",
    //     backgroundColor: "red",
    //   }}
    // >
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Ana Seife") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Bildiris") {
            iconName = focused ? "notifications" : "notifications";
          } else if (route.name === "Profil") {
            iconName = focused ? "person-sharp" : "person-sharp";
          } else if (route.name === "Map") {
            iconName = focused ? "location-sharp" : "location-sharp";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarLabelStyle: {},

        tabBarStyle: {
          height: 70,
          backgroundColor: "black",
          // borderRadius: 100,
          // borderTopLeftRadius:50,
          // borderTopRightRadius:50
          // marginLeft: 5,
          // marginRight: 5,
          // height: 55,
          // position: "absolute",
          // bottom: 30,
        },
        tabBarActiveTintColor: "#49BAFF",

        tabBarInactiveTintColor: "white",
      })}
    >
      <Tab.Screen name="Ana Seife" component={HomeStack} />

      <Tab.Screen
        name="Bildiris"
        component={SettingStack}
        options={{ tabBarBadge: 5 }}
      />

      <Tab.Screen name="Profil" component={ProfileStack} />
      <Tab.Screen name="Map" component={MapStack} />
    </Tab.Navigator>
    // </View>
  );
};

export default Tabs;
