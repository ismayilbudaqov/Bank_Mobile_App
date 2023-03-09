import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { getSize } from "../../utils/helper";
const { width, height } = getSize();

const Sections = ({
  backgroundColor,
  color,
  borderRadius,
  image,
  width,
  height,
  marginRight,
  margin,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          width: width,
          color: color,
          borderRadius: borderRadius,
          height: height,
          marginRight: marginRight,
          alignItems: "center",
          justifyContent: "center",
          margin: margin,
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: window.width <= 375 ? 25 : 25,
            height: window.height <= 667 ? 25 : 25,
          }}
          source={image}
        />
      </View>

      <Text style={styles.bottomText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Sections;

const styles = StyleSheet.create({
  bottomText: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 6,
  },
});
