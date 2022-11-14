import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Nfc from "../../assets/icons/nfc.png";
import Master from "../../assets/icons/mastercard.png";
import Visa from "../../assets/icons/visa.png";
import { getSize } from "../../utils/helper";
const card = [
  {
    id: 2,
    balance: "1.992.34",
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
  const [openModal, setOpenModal] = useState(true);
  console.log(openModal)

  return (
    <LinearGradient
      colors={["#181842", "#9a2885", "#5325ab"]}
      style={
        isOtherPage
          ? {
              width: width <= 375 ? 300 : 320,
              height: height <= 667 ? 450 : 500,
              marginRight: 39,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: "white",
            }
          : {
              width: width <= 375 ? 360 : 370,
              height: height <= 667 ? 225 : 250,
              borderRadius: 40,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "white",
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
                  top: 180,
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
                backgroundColor: "purple",
                borderRadius: 10,
                width: "100%",
                justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                style={{
                  width: "20%",
                  height: "60%",
                  borderRadius: "10%",
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {!openModal ? (
                  <View style={{ position: "absolute" }}>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                        backgroundColor: "white",
                        position: "absolute",
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
                ) : (
                  console.log("salam")
                )}
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.cardDate}>
            <Text
              style={
                isOtherPage
                  ? { fontSize: 20, fontWeight: "300", color: "#FFFFFF" }
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
    </LinearGradient>
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
});
