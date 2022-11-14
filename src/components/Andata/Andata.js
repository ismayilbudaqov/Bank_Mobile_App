import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryArea,
} from "victory-native";
import { getSize } from "../../utils/helper";

const { width, height } = getSize();
const Andata = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 30,
      }}
    >
      <VictoryGroup
        width={475}
        height={280}
        style={{
          data: { strokeWidth: 3, fillOpacity: 0.7 },
        }}
      >
        <VictoryArea
          animate
          style={{
            data: { fill: "cyan", stroke: "cyan" },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7,},
          ]}
        />
        <VictoryArea
          animate={{
            duration: 3000,
            onLoad: {
              duration: 3000,
            },
          }}
          style={{
            data: { fill: "#871374", stroke: "#871374" },
            labels: { fill: "white" },
          }}
          data={[
            { x: 1, y: 3, label: "-350.50" },
            { x: 2, y: 2, label: "-420.15" },
            { x: 3, y: 6, label: "-2.220.45" },
            { x: 4, y: 2, label: "-120.55" },
            { x: 5, y: 6 },
          ]}
        />
      </VictoryGroup>
    </View>
  );
};

export default Andata;

const styles = StyleSheet.create({});
