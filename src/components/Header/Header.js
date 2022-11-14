import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Avatar from "../../assets/images/Avatar.png";
import { getSize } from "../../utils/helper";

const header = [
  {
    welcome: "Salam",
    name: "Orxan Memedov",
    avatar: Avatar,
    bank_card: "Bank Cards",
  },
];
const { width, height } = getSize();
const Header = () => {
  return (
    <View>
      {header.map((item, index) => (
        <View style={styles.header} key={index}>
          <View>
            <Text style={styles.hello}>{item.welcome}</Text>
            <Text style={styles.burning}>{item.name}</Text>
          </View>

          <View style={styles.avatar}>
            <Image
              style={{ width: "100%", resizeMode: "contain", height: "100%" }}
              source={Avatar}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  hello: {
    fontSize: width <= 375 ? 25 : 30,
    color: "white",
    fontWeight: "700",
  },
  burning: {
    fontSize: 16,
    color: "#B9B2C4",
  },
  avatar: {
    width: width <= 375 ? 50 : 60,
    height: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
