import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const GlobalInput = ({
  label,
  keyboartType,
  form,
  setForm,
  onChangeText,
  value,
}) => {
  const [icon, setIcon] = useState("eye-off");
  const [hidePassword, setHidePassword] = useState(true);
  const handleSohowPassword = () => {
    icon !== "eye-off"
      ? (setIcon("eye-off"), setHidePassword(false))
      : (setIcon("eye"), setHidePassword(true));
  };

  return (
    <View style={{ marginTop: 10, width: 295 }}>
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "white",
          }}
        >
          {label}
        </Text>
      </View>
      {!keyboartType ? (
        <TextInput
          onChangeText={(text) => onChangeText(text)}
          value={value}
          autoFocus={true}
          placeholder={label}
          autoCapitalize="none"
          style={{
            width: 300,
            height: 50,
            backgroundColor: "white",
            borderRadius: 10,
            paddingHorizontal: 20,
            fontSize: 16,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
      ) : (
        <View style={styles.passwordInput}>
          <TextInput
            secureTextEntry={hidePassword}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={label}
            style={{
              width: 250,
              height: 50,
              backgroundColor: "white",
              borderRadius: 10,
              paddingHorizontal: 20,
              fontSize: 16,
            }}
          />
          <TouchableOpacity onPress={() => handleSohowPassword()}>
            {!hidePassword ? (
              <Ionicons name="eye-off-outline" size={30} color="black" />
            ) : (
              <Ionicons name="eye-outline" size={30} color="black" />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default GlobalInput;

const styles = StyleSheet.create({
  passwordInput: {
    width: 300,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
});
