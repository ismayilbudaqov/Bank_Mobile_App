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
import { PanGestureHandler } from "react-native-gesture-handler";
import Svg, { Circle, Rect } from "react-native-svg";
import React, { useState, useEffect, useRef } from "react";
import Cards from "../components/Card/Card";
import Sections from "../components/Sections/Sections";
import Header from "../components/Header/Header";
import { analize, calendar, document, collect, swipe } from "../assets/icons";
import { paypal, ball, youtube, amazon } from "../assets/images";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Analyze from "./Analyze";
import { getSize } from "../utils/helper";
import SwipeView from "react-native-vertical-swipe-view";
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

const data = [
  {
    id: 2,
    balance: "1.992.34",
    nfc: true,
    type: "master",
    cardNumber: "5489 7654 3210 7894",
    cardDate: "04/24",
    secure: 445,
  },
  {
    id: 1,
    balance: "992.34",
    nfc: true,
    type: "visa",
    cardNumber: "4455 8724 1045 1122",
    cardDate: "03/26",
    secure: 652,
  },
];
const { width, height } = getSize();
const HomeScreen = ({ navigation }) => {
  const animationHeight = useRef(new Animated.Value(150)).current;
  const [selected, setSelected] = useState(null);
  const [ListPosition, setListPosition] = useState(0);
  const [scrolling, setScrolling] = useState(false);

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
    <SafeAreaView style={{ backgroundColor: "#000040", flex: 1 }}>
      <View
        style={{ width: "100%", justifyContent: "center", alignSelf: "center" }}
      >
        <View style={{ paddingHorizontal: 30 }}>
          <Header />
        </View>

        <ScrollView
          style={{
            height: height <= 667 ? 265 : 280,
            width: "100%",
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {data.map((card, index) => (
            <Cards
              onPress={() => setSelected(card.id)}
              data={card}
              key={index}
            />
          ))}
        </ScrollView>
        <View style={styles.sectionsBox}>
          <Sections
            width={width <= 375 ? 70 : 75}
            height={height <= 667 ? 70 : 75}
            backgroundColor={"#189090"}
            borderRadius={25}
            image={analize}
            text={"Analiz"}
            onPress={() => navigation.navigate("Analyze")}
          />
          <Sections
            width={width <= 375 ? 70 : 75}
            height={height <= 667 ? 70 : 75}
            backgroundColor={"#3c5a45"}
            borderRadius={25}
            image={calendar}
            text={"Təqvim"}
          />
          <Ionicons name="" size={32} color="green" />
          <Sections
            width={width <= 375 ? 70 : 75}
            height={height <= 667 ? 70 : 75}
            backgroundColor={"#acac47"}
            borderRadius={25}
            image={document}
            text={"Sənəd"}
          />

          <Sections
            width={width <= 375 ? 70 : 75}
            height={height <= 667 ? 70 : 75}
            backgroundColor={"#a06343"}
            borderRadius={25}
            image={collect}
            text={"Toplamaq"}
          />
        </View>
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
                backgroundColor: "#6930c3",
                borderTopLeftRadius: "30%",
                borderTopRightRadius: "30%",
                height: "100%",
              }}
              scrollEventThrottle={16}
              onScroll={(e) => {
                if (e.nativeEvent.contentOffset.y <= 0) {
                  setAnimatedHeight(150);
                }
              }}
            >
              <View style={styles.viewBox}>
                {/* <Image source={swipe}/> */}
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sectionsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal: 30,
    width: "100%",
    // backgroundColor: "red",
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
  viewBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 30,
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
  headerTop: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  lineTop: {
    width: 40,
    height: 6,
    backgroundColor: "gray",
  },
  curtainView: {
    width: "100%",
  },
});
