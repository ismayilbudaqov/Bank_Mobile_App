import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Cards from "../components/Card/Card";

const AllCard = ({ route }) => {
  const { params } = route || {};
  const { cardData } = params || {};

  const [data, setData] = useState([]);

  useEffect(() => {
    if (cardData && data.length === 0) {
      const newData = [];
      newData.push({ ...cardData, position: true });
      newData.push({ secure : cardData.secure, position: false });
      setData(newData);
    }
  }, [cardData]);

  // const data = [
  //   {
  //     balance: "1.992.34",
  //     nfc: true,
  //     type: "master",
  //     cardNumber: "5489 7654 3210 7894",
  //     cardDate: "04/24",
  //   },
  //   {
  //     balance: "992.34",
  //     nfc: true,
  //     type: "visa",
  //     cardNumber: "4455 8724 1045 1122",
  //     cardDate: "03/26",
  //   },
  // ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000040" }}>
      <View
        style={{ width: "88%", justifyContent: "center", alignSelf: "center" }}
      >
        <Header />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {data.map((card, index) => (
            <Cards
              data={card}
              key={index}
              isOtherPage={true}
              position={card.position}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AllCard;

const styles = StyleSheet.create({});
