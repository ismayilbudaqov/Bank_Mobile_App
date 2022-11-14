import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { getSize } from "../../utils/helper";
const { width, height } = getSize();

console.warn({
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
});

const Sections = ({
  backgroundColor,
  color,
  borderRadius,
  image,
  width,
  height,
  alignItems,
  justifyContent,
  marginRight,
  margin,
  marginLeft,
  text,
  onPress,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
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
            width: window.width <= 375 ? 25 : 28,
            height: window.height <= 667 ? 25 : 28,
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
    color: "white",
    fontSize: width <= 375 ? 14 : 16,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 6,
  },
});
