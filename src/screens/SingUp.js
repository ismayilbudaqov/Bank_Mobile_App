import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";
import GlobalInput from "../components/GlobalInput/GlobalInput";

import Icon from "../assets/images/register.png";
import Google from "../assets/icons/google.png";

import Facebook from "../assets/icons/fb.png";
import Apple from "../assets/icons/apple.png";

const SingUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  const auth = getAuth(app);

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        auth.currentUser.displayName = email.split("@")[0];
        navigation.navigate("SignIn");
      })
      .catch((error) => {
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
        <GlobalInput value={name} onChangeText={setName} label={"Ad"} />
      </View>
      <View>
        <GlobalInput value={email} onChangeText={setEmail} label={"Email"} />
      </View>
      <View style={styles.passwordInput}>
        <GlobalInput
          label={"Sifre"}
          keyboartType={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.BtnArea}>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.loginBtn}
        >
          <Text style={styles.comfirium}>Tesdiqle</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 28,
        }}
      >
        <View style={{ height: 1, width: 100, backgroundColor: "gray" }}></View>
        <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 12 }}>
          Davam et
        </Text>
        <View style={{ height: 1, width: 100, backgroundColor: "gray" }}></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "40%",
          justifyContent: "space-between",
          marginTop: 18,
        }}
      >
        <TouchableOpacity style={{ width: 30, height: 30 }}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={Google}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 30, height: 30 }}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={Facebook}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 30, height: 30 }}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={Apple}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ marginTop: 21, flexDirection: "row", alignItems: "center" }}
      >
        <Text style={{ fontSize: 14 }}>Hesabiniz var?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text
            style={{
              color: "blue",
              fontSize: 16,
              marginLeft: 5,
              fontWeight: "500",
            }}
          >
            Giris et
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "white",
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  passwordInput: {
    marginBottom: 50,
  },
  comfirium: {
    fontSize: 16,
    color: "black",
  },
});
