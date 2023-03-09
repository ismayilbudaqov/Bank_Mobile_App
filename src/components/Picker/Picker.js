import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

const CustomPicker = ({ open, setOpen, selectValue, setSelectValue }) => {
  const handeleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "60%",
        width: "100%",
        bottom: -100,
        position: "absolute",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <View style={styles.BtnArea}>
        <TouchableOpacity
          onPress={() => handleConfirm()}
          style={styles.CloseBtn}
        >
          <Text style={styles.btnTextL}>Testdiqle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handeleClose()}
          style={styles.CloseBtn2}
        >
          <Text style={styles.btnTextL}>Baqla</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderBox}>
        <Picker
          style={{
            bottom: 100,
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
          selectedValue={selectValue}
          onValueChange={(itemValue, itemIndex) => setSelectValue(itemValue)}
          itemStyle={{ color: "black", fontSize: 20 }}
        >
          <Picker.Item label="Kisi" value="Kisi" />
          <Picker.Item label="Qadin" value="Qadin" />
          <Picker.Item label="Diger" value="Diger" />
        </Picker>
      </View>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  genderBox: {
    marginTop: 10,
  },
  CloseBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 30,
  },
  CloseBtn2: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: 65,
    height: 30,
  },
  BtnArea: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  btnTextL: {
    fontSize: 16,
    color: "black",
  },
  borderBox: {
    height: "60%",
    width: "100%",
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 30,
  },
});
