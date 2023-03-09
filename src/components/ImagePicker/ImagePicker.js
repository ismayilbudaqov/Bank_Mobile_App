import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Cnstants from "expo-constants";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Permision denied");
      }
    }
  }, []);

  const PickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let Ismayil = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("salam", Ismayil);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
              overflow: "hidden",
              resizeMode: "cover",
            }}
          />
        )}
      </View>
      <TouchableOpacity onPress={PickerImage}>
        <Text style={{ fontSize: 15, color: "black", marginTop: 5 }}>
          Şəkli redaktə et
        </Text>
      </TouchableOpacity>
    </View>
  );
}
