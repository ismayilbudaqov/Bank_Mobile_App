//REACGT AND REACT-NATIVE IMPORTS**
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState, useEffect } from "react";

///REACT-NATIVE-MAPS IMPORT**
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";

//COMPONENTS IMPORTS**
import SwipeUp from "../components/SwipeUp/SwipeUp";

const MapScreen = () => {
  //START MARKER CORTINATE
  const [origin, setOrigin] = useState({
    latitude: 41.112663,
    longitude: 29.02133,
    // latitudeDelta: 0.005,
    // longitudeDelta: 0.0005,
  });

  //END MARKET CORDINATE
  const [destionation, setDestionation] = useState({
    latitude: 40.98558,
    longitude: 28.79667,
  });

  useEffect(() => {
    getLocationPermision();
  }, []);

  //MAP PERMISION
  async function getLocationPermision() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permision to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      //   enableHighAccuracy: true,
    });
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setOrigin(current);
    console.log(location.coords.latitude);
  }

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}
        showsScale={true}
        showsMyLocationButton={true}
        // showsTraffic={true}
        showsUserLocation={true}
        followsUserLocation={true}
        style={{
          height: "85%",
          width: "100%",
        }}
      >
        <Marker
          coordinate={destionation}
          // draggable
          // onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
          // onPress={destionation}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{ height: 35, width: 35 }}
          />
          <Text style={{ color: "red" }}>salam</Text>
        </Marker>

        {/* <Marker
          draggable
          coordinate={destionation}
          onDragStart={(direction) =>
            setDestionation(direction.nativeEvent.coordinate)
          }
        ></Marker> */}
        <MapViewDirections
          origin={origin}
          destination={destionation}
          apikey="AIzaSyDhsujPW6Kro2UKb4vOoXV_tZXrM87vKvg" ///GOOGLE_API_KEY**
          strokeColor="black"
          strokeWidth={2}
        />
        {/* <Polyline coordinates={[origin, destionation]} strokeWidth={2} /> */}
      </MapView>

      <SwipeUp />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
