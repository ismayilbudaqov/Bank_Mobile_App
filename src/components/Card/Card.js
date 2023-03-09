import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Nfc from "../../assets/icons/nfc.png";
import Master from "../../assets/icons/mastercard.png";
import Visa from "../../assets/icons/visa.png";
import { getSize } from "../../utils/helper";
const card = [
  {
    id: 2,
    balance: "2.992.34",
    nfc: Nfc,
    bankSections: Master,
    cardNumber: "5489 7654 3210 7894",
    cardDate: "04/24",
  },
  {
    id: 1,
    balance: "992.34",
    nfc: Nfc,
    bankSections: Visa,
    cardNumber: "4455 8724 1045 1122",
    cardDate: "03/26",
  },
];

const { width, height } = getSize();
const bankSection = {
  master: Master,
  visa: Visa,
};

const Card = ({
  data,
  card,
  onPress,
  isOtherPage = false,
  userId,
  position = true,
}) => {
  const animation = useRef(new Animated.Value(1)).current;

  const toggleCVC = () => {
    Animated.timing(animation, {
      toValue: animation._value == 0 ? 1 : 0,
      duration: 1000,
    }).start();
  };

  return (
    <View
      // colors={[]}
      style={
        isOtherPage
          ? {
              width: width <= 375 ? 300 : 300,
              height: height <= 667 ? 450 : 450,
              marginRight: 25,
              borderRadius: 25,
              backgroundColor: "#181842",
            }
          : {
              width: width <= 375 ? 360 : 360,
              height: height <= 667 ? 225 : 225,
              borderRadius: 25,
              marginLeft: 10,
              backgroundColor: "#181842",
            }
      }
    >
      <TouchableOpacity onPress={onPress} style={styles.cardBorder}>
        {!isOtherPage && (
          <View>
            <Text style={styles.price}>{data.balance}₼</Text>
          </View>
        )}
        {data.nfc && (
          <View
            style={
              isOtherPage
                ? {
                    alignSelf: "center",
                    transform: [{ rotate: "-90deg" }],
                    alignSelf: "center",
                  }
                : { alignItems: "flex-end", height: 30, marginBottom: 10 }
            }
          >
            <View
              style={
                isOtherPage
                  ? { width: 60, height: 60 }
                  : {
                      width: 50,
                      height: 30,
                      marginTop: 10,
                    }
              }
            >
              <Image
                style={
                  isOtherPage
                    ? { resizeMode: "contain", width: 40, height: 40 }
                    : { width: "100%", height: "100%", resizeMode: "contain" }
                }
                source={Nfc}
              />
            </View>
          </View>
        )}

        <View
          style={
            isOtherPage
              ? {
                  transform: [{ rotate: "-90deg" }],
                  flexDirection: "row",
                  justifyContent: "space-between",
                  top: width <= 376 ? 165 : 165,
                  left: 50,
                  position: "absolute",
                  width: width <= 376 ? 350 : 400,
                }
              : {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 41,
                }
          }
        >
          {position === false && (
            <View
              style={{
                backgroundColor: "#f0eff4",
                borderRadius: 10,
                width: "100%",
                justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <Animated.View
                style={[
                  styles.fadingContainer,
                  {
                    opacity: animation,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={toggleCVC}
                  style={
                    {
                      // width: "100%",
                      // height: "100%",
                      // backgroundColor: "red",
                    }
                  }
                >
                  <Text
                    style={{
                      fontSize: 30,
                      transform: [{ rotate: "90deg" }],
                      textAlign: "center",
                    }}
                  >
                    👀
                  </Text>
                </TouchableOpacity>
              </Animated.View>
              <View
                style={{
                  width: "20%",
                  height: "70%",
                  // position: "relative",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    // paddingHorizontal: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    {data.secure}
                  </Text>
                </View>
              </View>
            </View>
          )}

          <View style={styles.cardDate}>
            <Text
              style={
                isOtherPage
                  ? { fontSize: 17, fontWeight: "300", color: "#FFFFFF" }
                  : { fontSize: 16, fontWeight: "300", color: "#FFFFFF" }
              }
            >
              {data.cardNumber}
            </Text>
            <Text
              style={
                isOtherPage
                  ? {
                      fontSize: 15,
                      color: "rgba(255, 255, 255, 0.7)",
                      marginTop: 8,
                    }
                  : {
                      fontSize: 12,
                      color: "rgba(255, 255, 255, 0.7)",
                      marginTop: 8,
                    }
              }
            >
              {data.cardDate}
            </Text>
          </View>

          <View
            style={
              isOtherPage
                ? { width: 48, height: 47 }
                : { width: 49, height: 58 }
            }
          >
            <Image
              style={{ resizeMode: "contain", width: "100%", height: "100%" }}
              source={bankSection[data.type]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  background: {
    width: 368,
    height: 230,
    borderRadius: 40,
  },
  price: {
    color: "#FFFFFF",
    fontSize: Dimensions.get("window").height / 28,
    fontWeight: "500",
  },
  cardBorder: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  fadingContainer: {
    position: "absolute",
    width: "20%",
    height: "70%",
    borderRadius: 10,
    backgroundColor: "black",
    zIndex: 9,
    left: 15,
  },
});
