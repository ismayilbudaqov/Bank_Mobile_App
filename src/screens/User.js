import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import ProfileInput from "../components/ProfileInput/ProfileInput";
import ImagePickerExample from "../components/ImagePicker/ImagePicker";
import Picker from "../components/Picker/Picker";

const User = () => {
  const user = {
    id: 1,
    name: "Ismayil",
    surname: "Budaqov",
    phone: "+903662788292",
    dateOfBirthday: "12/02/2002",
    gender: null,
  };

  const [gender, setGender] = useState(false);

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phone, setPhone] = useState(user.phone);
  const [dateOfBirthday, setDateOfBirthday] = useState(user.dateOfBirthday);
  const [selectGender, setSelectGender] = useState("Cins");

  const handeleOpen = () => {
    setGender(true);
    setSelectGender("Kisi");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <View style={styles.Allborder}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ImagePicker}>
              <ImagePickerExample />
            </View>
            <View>
              <ProfileInput
                label="Ad"
                name="name"
                value={name}
                setValue={setName}
              />
            </View>
            <View>
              <ProfileInput
                label="Soyad"
                name="surname"
                value={surname}
                setValue={setSurname}
              />
            </View>
            <View>
              <ProfileInput
                label="Telefon Nömrəniz"
                name="phone"
                value={phone}
                setValue={setPhone}
              />
            </View>
            <View>
              <ProfileInput
                label="Doğum Tarixi"
                name="dateOfBirthday"
                value={dateOfBirthday}
                setValue={setDateOfBirthday}
              />
            </View>

            <View style={styles.genderBox}>
              <Text style={styles.BoxText}>Cins</Text>
              <TouchableOpacity
                style={styles.selectGender}
                onPress={() => handeleOpen()}
              >
                <Text style={styles.selectedText}>{selectGender}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.saveAre}>
              <TouchableOpacity style={styles.saveBtn}>
                <Text style={{ color: "black", fontSize: 16 }}>
                  Yadda Saxla
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>

      {gender ? (
        <Picker
          open={gender}
          setOpen={setGender}
          selectValue={selectGender}
          setSelectValue={setSelectGender}
        />
      ) : null}
      {/* {gender ? (
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
              onPress={() => handleComfrium()}
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
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              itemStyle={{ color: "black", fontSize: 20 }}
            >
              <Picker.Item label="Kisi" value="Kisi" />
              <Picker.Item label="Qadin" value="Qadin" />
              <Picker.Item label="Diger" value="Diger" />
            </Picker>
          </View>
        </View>
      ) : null} */}
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  Allborder: {
    height: "95%",
    alignItems: "center",
    width: "100%",
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
  selectGender: {
    width: 295,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  selectedText: {
    fontSize: 16,
    color: "black",
    // justifyContent:"center",
  },
  BoxText: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    marginBottom: 7,
  },
  genderBox: {
    marginTop: 10,
  },
  ImagePicker: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  saveBtn: {
    width: 190,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  saveAre: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
