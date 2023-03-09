import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getSize } from "../../utils/helper";

const { width, height } = getSize();
const ItemBox = (props) => {
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <Animated.View
          style={[styles.deleteBox, { transform: [{ scale: scale }] }]}
        >
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            <Ionicons name="trash" size={32} color="#f5ebe0" />
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.dribContainer}>
          <View style={styles.ballBox}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
              source={props.data.image}
            />
          </View>
          <View style={{}}>
            <Text style={styles.drible}>{props.data.name}</Text>
            <Text style={styles.dribleDate}>{props.data.date}</Text>
          </View>
        </View>
        <View>
          {props.data.pay ? (
            <Text style={[styles.drible, { color: "red" }]}>
              {props.data.price}
            </Text>
          ) : (
            <Text style={styles.updatrePrice}>{props.data.price}</Text>
          )}
          <Text style={styles.dribleSecond}>{props.data.time}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  container: {
    height: 70,
    padding: 16,
    width: "100%",
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "black",
    backgroundColor: "gray",
    // backgroundColor:"#ced4da",

    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteBox: {
    backgroundColor: "#d80032",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 70,
    borderRadius: 10,
  },
  dribContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    // backgroundColor:"red",
    width: "70%",
  },
  ballBox: {
    width: width <= 375 ? 50 : 50,
    height: width <= 375 ? 50 : 50,
    marginRight: 5,
  },
  drible: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  updatrePrice: {
    color: "green",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  dribleDate: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  dribleSecond: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    textAlign: "right",
  },
});
