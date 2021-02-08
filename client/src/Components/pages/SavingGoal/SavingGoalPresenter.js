import React from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    id: "lisp",
    label: "lisp",
    value: 341,
    color: "hsl(181, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 563,
    color: "hsl(236, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 185,
    color: "hsl(349, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 297,
    color: "hsl(125, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 446,
    color: "hsl(61, 70%, 50%)",
  },
];

const barData = [
  {
    country: "AD",
    "hot dog": 81,
    "hot dogColor": "hsl(311, 70%, 50%)",
    burger: 13,
    burgerColor: "hsl(84, 70%, 50%)",
    sandwich: 161,
    sandwichColor: "hsl(263, 70%, 50%)",
    kebab: 175,
    kebabColor: "hsl(20, 70%, 50%)",
    fries: 191,
    friesColor: "hsl(103, 70%, 50%)",
    donut: 131,
    donutColor: "hsl(215, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 110,
    "hot dogColor": "hsl(291, 70%, 50%)",
    burger: 115,
    burgerColor: "hsl(46, 70%, 50%)",
    sandwich: 141,
    sandwichColor: "hsl(107, 70%, 50%)",
    kebab: 80,
    kebabColor: "hsl(197, 70%, 50%)",
    fries: 68,
    friesColor: "hsl(66, 70%, 50%)",
    donut: 151,
    donutColor: "hsl(236, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 192,
    "hot dogColor": "hsl(58, 70%, 50%)",
    burger: 110,
    burgerColor: "hsl(20, 70%, 50%)",
    sandwich: 199,
    sandwichColor: "hsl(213, 70%, 50%)",
    kebab: 143,
    kebabColor: "hsl(222, 70%, 50%)",
    fries: 35,
    friesColor: "hsl(120, 70%, 50%)",
    donut: 159,
    donutColor: "hsl(266, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 191,
    "hot dogColor": "hsl(141, 70%, 50%)",
    burger: 176,
    burgerColor: "hsl(296, 70%, 50%)",
    sandwich: 170,
    sandwichColor: "hsl(277, 70%, 50%)",
    kebab: 156,
    kebabColor: "hsl(55, 70%, 50%)",
    fries: 142,
    friesColor: "hsl(321, 70%, 50%)",
    donut: 132,
    donutColor: "hsl(235, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 125,
    "hot dogColor": "hsl(336, 70%, 50%)",
    burger: 86,
    burgerColor: "hsl(130, 70%, 50%)",
    sandwich: 27,
    sandwichColor: "hsl(97, 70%, 50%)",
    kebab: 106,
    kebabColor: "hsl(95, 70%, 50%)",
    fries: 18,
    friesColor: "hsl(175, 70%, 50%)",
    donut: 71,
    donutColor: "hsl(57, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 166,
    "hot dogColor": "hsl(211, 70%, 50%)",
    burger: 150,
    burgerColor: "hsl(32, 70%, 50%)",
    sandwich: 11,
    sandwichColor: "hsl(194, 70%, 50%)",
    kebab: 50,
    kebabColor: "hsl(162, 70%, 50%)",
    fries: 185,
    friesColor: "hsl(83, 70%, 50%)",
    donut: 47,
    donutColor: "hsl(116, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 192,
    "hot dogColor": "hsl(53, 70%, 50%)",
    burger: 33,
    burgerColor: "hsl(207, 70%, 50%)",
    sandwich: 26,
    sandwichColor: "hsl(35, 70%, 50%)",
    kebab: 22,
    kebabColor: "hsl(48, 70%, 50%)",
    fries: 45,
    friesColor: "hsl(200, 70%, 50%)",
    donut: 25,
    donutColor: "hsl(272, 70%, 50%)",
  },
];

const SavingGoalPresenterBlock = styled.div``;

const PieBlock = styled.div`
  width: 500px;
  height: 500px;
`;

const ChartBlock = styled.div`
  width: 500px;
  height: 500px;
`;

const SavingGoalPresenter = () => {
  return (
    <>
      <SavingGoalPresenterBlock>
        <PieBlock>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            cornerRadius={3}
            colors={{ scheme: "nivo" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: "color" }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
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
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
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
        </PieBlock>
        <PieBlock>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            cornerRadius={3}
            colors={{ scheme: "nivo" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: "color" }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
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
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
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
        </PieBlock>
        <ChartBlock>
          <ResponsiveBar
            data={barData}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy="country"
            margin={{ top: 0, right: 130, bottom: 50, left: 60 }}
            padding={0.2}
            layout="horizontal"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "country",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "food",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </ChartBlock>
      </SavingGoalPresenterBlock>
    </>
  );
};

export default SavingGoalPresenter;
