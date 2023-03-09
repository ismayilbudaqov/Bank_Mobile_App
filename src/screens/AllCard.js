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
      newData.push({ secure: cardData.secure, position: false });
      setData(newData);
    }
  }, [cardData]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{ width: "100%", justifyContent: "center", alignSelf: "center" }}
      >
        <View style={styles.headerWrapper}>
          <Header position={false} />
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.bankCards}>
            {data.map((card, index) => (
              <Cards
                data={card}
                key={index}
                isOtherPage={true}
                position={card.position}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AllCard;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 30,
  },
  bankCards: {
    flexDirection: "row",
    marginLeft: 15,
  },
});
