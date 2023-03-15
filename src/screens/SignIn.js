import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useAuth } from "../provider/AuthProvider";
import GlobalInput from "../components/GlobalInput/GlobalInput";
import app from "../config/firebase";
import Icon from "../assets/images/login.png";

const SignIn = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = useState("");
  const { handleLogin } = useAuth();

  const navigation = useNavigation();

  const auth = getAuth(app);

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        auth.currentUser.displayName = email.split("@")[0];

        const data = {
          user: userCredential.user,
          token: userCredential._tokenResponse.idToken,
        };
        handleLogin(data);
      })

      .catch((error) => {
        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: 150, height: 150 }}>
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={Icon}
        />
      </View>
      <View>
        <GlobalInput value={email} onChangeText={setEmail} label={"Email"} />
        {error ? (
          <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>
        ) : (
          ""
        )}
      </View>

      <View style={styles.passwordInput}>
        <GlobalInput
          label={"Sifre"}
          keyboartType={true}
          onChangeText={setPassword}
          value={password}
        />
        {error ? (
          <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>
        ) : (
          ""
        )}
      </View>
      <View style={styles.BtnArea}>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.loginBtn}
        >
          <Text style={styles.comfirium}>Giris et</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              color: "blue",
              fontSize: 16,
            }}
          >
            Qeydiyyat
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "white",
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  passwordInput: {
    marginBottom: 50,
  },
  comfirium: {
    fontSize: 16,
    color: "black",
  },
});
