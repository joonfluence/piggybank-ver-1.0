import React from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";

// 배열 안에 객체를 보관하고, 거기에 데이터를 담아 보관해야 하기 때문에, 해당 데이터를 받아와서 출력해줘야 한다. 그러므로 해당 데이터를 아예 컴포넌트로 분리시키는 편이 나을 것이다.

const ResponsivePieChart = styled(ResponsivePie)``;

const PieTotalRatio = ({ data, color }) => {
  return (
    <>
      <ResponsivePieChart
        data={data}
        margin={{ top: 0, right: 40, bottom: 0, left: 40 }}
        cornerRadius={3}
        colors={{ scheme: color }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default PieTotalRatio;
