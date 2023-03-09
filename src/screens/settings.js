import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ItemBox from "../components/ItemBox/ItemBox";
import { profile } from "../assets/images/index";

const Settings = () => {
  const data = [
    {
      id: "1",
      name: "Nazar Nazaraliyev",
      date: "3 dek 22",
      price: "+₼102.24",
      time: "3:24 Pm",
      image: profile,
      pay: false,
    },
    {
      id: "2",
      name: "Orxan Memedov",
      date: "24 yan 22",
      price: "-₼45.24",
      time: "2:24 Pm",
      image: profile,
      pay: true,
    },
    {
      id: "3",
      name: "Yusif Cabrayilov",
      date: "20 yan 22",
      price: "+₼120.24",
      time: "1:13 Pm",
      image: profile,
      pay: true,
    },
    {
      id: "4",
      name: "Ali Abdiyev",
      date: "4 yan 22",
      valyuta: "1",
      price: "+₼20.24",
      time: "6:13 Pm",
      image: profile,
      pay: false,
    },
    {
      id: "5",
      name: "Ismayil Buudaqov",
      date: "13 yan 22",
      price: "+₼102.24",
      time: "3:24 Pm",
      image: profile,
      pay: true,
    },
  ];

  const [lists, setLists] = useState(data);

  const deleteItem = (item) => {
    // const arr = [...lists];
    // arr.splice(index, 1);
    // setLists(arr);
    setLists(lists.filter((data) => data != item));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          marginTop: 10,
          width: "100%",
          height: "100%",
          paddingHorizontal: 10,
        }}
      >
        <FlatList
          data={lists}
          renderItem={({ item, index }) => {
            return (
              <ItemBox data={item} handleDelete={() => deleteItem(item)} />
            );
          }}
          // ItemSeparatorComponent={() => {
          //   return <View style={styles.separatorLine}></View>;
          // }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  // separatorLine: {
  //   height: 1,
  //   backgroundColor: "white",
  // },
});
