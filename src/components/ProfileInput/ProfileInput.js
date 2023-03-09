import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const ProfileInput = ({ name, value, setValue, label }) => {
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

      <TextInput
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={label}
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "white",
          borderRadius: 10,
          paddingHorizontal: 20,
          fontSize: 16,
          borderWidth: 1,
          borderColor: "black",
        }}
      />
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({});
