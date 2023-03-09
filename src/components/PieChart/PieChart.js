import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import {
  VictoryPie,
  VictoryArea,
  VictoryChart,
  VictoryBar,
  VictoryStack,
} from "victory-native";
import { getSize } from "../../utils/helper";

const { width, height } = getSize();

const CostumeChart = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VictoryChart
        width={width >= 375 ? 400 : 500}
        height={300}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        events={[
          {
            childName: ["area-1", "area-2"],
            target: "data",
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    childName: "area-4",
                    mutation: (props) => {
                      const fill = props.style.fill;
                      return fill === "tomato"
                        ? null
                        : { style: { fill: "tomato" } };
                    },
                  },
                ];
              },
            },
          },
        ]}
      >
        <VictoryStack>
          <VictoryArea
            colorScale={["tomato", "orange", "gold", "cyan", "red"]}
            name="area-1"
            data={[
              { x: "Sent", y: 2 },
              { x: "Okt", y: 3 },
              { x: "Noy", y: 5 },
              { x: "Dek", y: 4 },
            ]}
          />
          <VictoryArea
            colorScale={["tomato", "orange", "gold", "cyan", "red"]}
            name="area-2"
            data={[
              { x: "Yan", y: 1 },
              { x: "Fev", y: 4 },
              { x: "Mar", y: 5 },
              { x: "Apr", y: 10 },
            ]}
          />
          <VictoryArea
            colorScale={["tomato", "orange", "cyan", "red"]}
            name="area-3"
            data={[
              { x: "May", y: 3 },
              { x: "Iy", y: 2 },
              { x: "Iyn", y: 6 },
              { x: "Avg", y: 2 },
            ]}
          />
        </VictoryStack>
      </VictoryChart>
    </View>
  );
};

export default CostumeChart;

const styles = StyleSheet.create({});
