//REACT NATIVE IMPORTS**
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from "react-native";
//REACT IMPORTS**
import React, { useState, useEffect, useRef } from "react";
//HELPER FUNCTIONS AND IMAGES  IMPORTS **
import { Ionicons } from "@expo/vector-icons";
import { paypal, ball, youtube, amazon } from "../assets/images";
import { getSize } from "../utils/helper";
//LIBRARIY IMPORTS**
import { PanGestureHandler } from "react-native-gesture-handler";

//COMPONENTS IMPORTS**
import CustomPieChart from "../components/PieChart/PieChart";

const { width, height } = getSize();

const Analyze = ({}) => {
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

  const animationHeight = useRef(new Animated.Value(150)).current;
  const [scrolling, setScrolling] = useState(false);
  const [selected, setSelected] = useState(null);
  const setAnimatedHeight = (height) => {
    Animated.timing(animationHeight, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setScrolling(height === 150 ? false : true);
  };

  useEffect(() => {
    if (selected !== null) {
      navigation.navigate("AllCard", {
        cardData: data.find((card) => card.id === selected),
      });
      setSelected(null);
    }
  }, [selected]);

  const swiping = (event) => {
    const { nativeEvent } = event || {};
    const { velocityY } = nativeEvent || {};
    const height = animationHeight.__getValue();
    if (velocityY < 0 && height == 150) {
      // setListPosition(Math.abs(y) + ListPosition);
      setAnimatedHeight(450);
    } else if (velocityY > 0 && height == 450) {
      setAnimatedHeight(150);
      // setListPosition(ListPosition - (y - 200));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 30 }}>
        {/* <CustomPieChart /> */}
        <View style={styles.totalBox}></View>
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
      >
        <PanGestureHandler onGestureEvent={swiping}>
          <Animated.View style={{ height: animationHeight }}>
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
                  setAnimatedHeight(150);
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
                <Ionicons
                  name="ios-chevron-up-outline"
                  size={32}
                  color="white"
                />
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
    </SafeAreaView>
  );
};

export default Analyze;

const styles = StyleSheet.create({
  total: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 8,
  },
  balance: {
    fontSize: 32,
    fontWeight: "500",
    color: "black",
  },
  totalBox: {
    alignItems: "center",
  },
  viewBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
  },
  transac: {
    fontSize: width <= 375 ? 17 : 20,
    fontWeight: "600",
    color: "white",
  },
  viewAll: {
    color: "#B9B2C4",
    fontSize: 16,
    fontWeight: "400",
  },
  ballBox: {
    width: width <= 375 ? 50 : 55,
    height: width <= 375 ? 50 : 55,
  },
  drible: {
    color: "white",
    fontSize: width <= 375 ? 16 : 18,
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
    width: width <= 375 ? 130 : 135,
  },
  dribleSecond: {
    fontSize: 16,
    fontWeight: "400",
    color: "#B9B2C4",
    textAlign: "right",
  },
});
