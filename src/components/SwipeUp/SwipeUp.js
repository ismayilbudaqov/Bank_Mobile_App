import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";

import { paypal, ball, youtube, amazon } from "../../assets/images/index";
import { Ionicons } from "@expo/vector-icons";
const SwipeUp = () => {
  const listData = [
    {
      name: "Dribble",
      date: "13 yan 22",
      valyuta: "1",
      price: "102.24",
      time: "3:24 Pm",
      image: ball,
    },
    {
      name: "Amazon",
      date: "24 yan 22",
      valyuta: "1",
      price: "45.24",
      time: "2:24 Pm",
      image: amazon,
    },
    {
      name: "Youtube",
      date: "20 yan 22",
      valyuta: "1",
      price: "120.24",
      time: "1:13 Pm",
      image: youtube,
    },
    {
      name: "Paypal",
      date: "4 yan 22",
      valyuta: "1",
      price: "20.24",
      time: "6:13 Pm",
      image: paypal,
    },
    {
      name: "Dribble",
      date: "13 yan 22",
      valyuta: "1",
      price: "102.24",
      time: "3:24 Pm",
      image: ball,
    },
    {
      name: "Amazon",
      date: "24 yan 22",
      valyuta: "1",
      price: "45.24",
      time: "2:24 Pm",
      image: amazon,
    },
    {
      name: "Youtube",
      date: "20 yan 22",
      valyuta: "1",
      price: "120.24",
      time: "1:13 Pm",
      image: youtube,
    },
    {
      name: "Paypal",
      date: "4 yan 22",
      valyuta: "1",
      price: "20.24",
      time: "6:13 Pm",
      image: paypal,
    },
    {
      name: "Youtube",
      date: "20 yan 22",
      valyuta: "1",
      price: "120.24",
      time: "1:13 Pm",
      image: youtube,
    },
    {
      name: "Paypal",
      date: "4 yan 22",
      valyuta: "1",
      price: "20.24",
      time: "6:13 Pm",
      image: paypal,
    },
    {
      name: "Paypal",
      date: "4 yan 22",
      valyuta: "1",
      price: "20.24",
      time: "6:13 Pm",
      image: paypal,
    },
    {
      name: "Youtube",
      date: "20 yan 22",
      valyuta: "1",
      price: "120.24",
      time: "1:13 Pm",
      image: youtube,
    },
    {
      name: "Paypal",
      date: "4 yan 22",
      valyuta: "1",
      price: "20.24",
      time: "6:13 Pm",
      image: paypal,
    },
  ];

  const animationHeight = useRef(new Animated.Value(250)).current;

  const [scrolling, setScrolling] = useState(false);

  const swiping = (event) => {
    const { nativeEvent } = event || {};
    const { velocityY } = nativeEvent || {};
    const height = animationHeight.__getValue();
    if (velocityY < 0 && height == 250) {
      setAnimatedHeight(450);
    } else if (velocityY > 0 && height == 450) {
      setAnimatedHeight(250);
    }
  };

  const setAnimatedHeight = (height) => {
    Animated.timing(animationHeight, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setScrolling(height === 250 ? false : true);
  };

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        bottom: -135,
        justifyContent: "flex-end",
        height: "50%",
      }}
    >
      <PanGestureHandler onGestureEvent={swiping}>
        <Animated.View
          style={{
            height: animationHeight,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrolling}
            style={{
              paddingHorizontal: 30,
              width: "100%",
              backgroundColor: "gray",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              height: "100%",
            }}
            scrollEventThrottle={16}
            onScroll={(e) => {
              if (e.nativeEvent.contentOffset.y <= 0) {
                setAnimatedHeight(250);
              }
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 30,
              }}
            >
              {scrolling ? (
                <Ionicons name="ios-chevron-down" size={32} color="white" />
              ) : (
                <Ionicons
                  name="ios-chevron-up-outline"
                  size={32}
                  color="white"
                />
              )}
            </View>
            <View style={styles.viewBox}>
              <Text style={styles.transac}>Əməliyyatlar</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>Hamısına baxın</Text>
              </TouchableOpacity>
            </View>
            {listData.map((item, index) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
                key={index}
              >
                <View style={styles.dribContainer}>
                  <View style={styles.ballBox}>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                      }}
                      source={item.image}
                    />
                  </View>
                  <View>
                    <Text style={styles.drible}>{item.name}</Text>
                    <Text style={styles.dribleDate}>{item.date}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.drible}>-₼{item.price}</Text>
                  <Text style={styles.dribleSecond}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeUp;

const styles = StyleSheet.create({
  ballBox: {
    width: 50,
    height: 50,
  },
  drible: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  dribleDate: {
    fontSize: 16,
    fontWeight: "400",
    color: "#B9B2C4",
  },
  dribContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 130,
  },
  dribleSecond: {
    fontSize: 16,
    fontWeight: "400",
    color: "#B9B2C4",
    textAlign: "right",
  },
  viewBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10,
  },
  transac: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  viewAll: {
    color: "#B9B2C4",
    fontSize: 16,
    fontWeight: "400",
  },
});
