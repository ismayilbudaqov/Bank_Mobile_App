import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Router from "./src/navigation";
import AuthProvider from "./src/provider/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Router />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
