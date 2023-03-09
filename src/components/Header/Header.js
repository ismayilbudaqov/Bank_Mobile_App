import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Avatar from "../../assets/images/Avatar.png";
import { getSize } from "../../utils/helper";
import { useAuth } from "../../provider/AuthProvider";

const { width, height } = getSize();

const Header = ({ position = true }) => {
  const { state } = useAuth();

  const header = [
    {
      transformCard: "Bütün Kartlar",
      welcome: "Salam",
      name: state.user.displayName,
      avatar: Avatar,
      bank_card: "Bank Cards",
    },
  ];
  return (
    <View>
      {header.map((item, index) => (
        <View style={styles.header} key={index}>
          <View style={styles.headerRide}>
            {position ? (
              <Text style={styles.hello}>{item.welcome} 🥳</Text>
            ) : (
              <Text
                style={{
                  fontSize: width <= 375 ? 25 : 25,
                  color: "black",
                  fontWeight: "700",
                }}
              >
                {item.transformCard} 🤑
              </Text>
            )}

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
    fontSize: 25,
    color: "black",
    fontWeight: "700",
  },
  burning: {
    fontSize: 16,
    color: "black",
  },
  avatar: {
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: width <= 375 ? 0 : 55,
  },
  headerRide: {
    justifyContent: "center",
  },
});
