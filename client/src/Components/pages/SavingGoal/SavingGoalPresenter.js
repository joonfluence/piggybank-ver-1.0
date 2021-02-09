import React from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import ContentHeader from "../../ContentHeader";
import FormBoard from "../../FormBoard";
import ContentLists from "../../ContentLists";

const SavingGoalPresenterBlock = styled.div`
  background-color: white;
`;

const SavingGoalPresenter = () => {
  return (
    <>
      <SavingGoalPresenterBlock>
        <ContentHeader />
        <FormBoard />
        <ContentLists />
      </SavingGoalPresenterBlock>
    </>
  );
};

export default SavingGoalPresenter;

// <PieBlock>
//           <ResponsivePie
//             data={data}
//             margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//             cornerRadius={3}
//             colors={{ scheme: "nivo" }}
//             borderWidth={1}
//             borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//             radialLabelsSkipAngle={10}
//             radialLabelsTextColor="#333333"
//             radialLabelsLinkColor={{ from: "color" }}
//             sliceLabelsSkipAngle={10}
//             sliceLabelsTextColor="#333333"
//             defs={[
//               {
//                 id: "dots",
//                 type: "patternDots",
//                 background: "inherit",
//                 color: "rgba(255, 255, 255, 0.3)",
//                 size: 4,
//                 padding: 1,
//                 stagger: true,
//               },
//               {
//                 id: "lines",
//                 type: "patternLines",
//                 background: "inherit",
//                 color: "rgba(255, 255, 255, 0.3)",
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10,
//               },
//             ]}
//             fill={[
//               {
//                 match: {
//                   id: "ruby",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "c",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "go",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "python",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "scala",
//                 },
//                 id: "lines",
//               },
//               {
//                 match: {
//                   id: "lisp",
//                 },
//                 id: "lines",
//               },
//               {
//                 match: {
//                   id: "elixir",
//                 },
//                 id: "lines",
//               },
//               {
//                 match: {
//                   id: "javascript",
//                 },
//                 id: "lines",
//               },
//             ]}
//             legends={[
//               {
//                 anchor: "bottom",
//                 direction: "row",
//                 justify: false,
//                 translateX: 0,
//                 translateY: 56,
//                 itemsSpacing: 0,
//                 itemWidth: 100,
//                 itemHeight: 18,
//                 itemTextColor: "#999",
//                 itemDirection: "left-to-right",
//                 itemOpacity: 1,
//                 symbolSize: 18,
//                 symbolShape: "circle",
//                 effects: [
//                   {
//                     on: "hover",
//                     style: {
//                       itemTextColor: "#000",
//                     },
//                   },
//                 ],
//               },
//             ]}
//           />
//         </PieBlock>
//         <PieBlock>
//           <ResponsivePie
//             data={data}
//             margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//             cornerRadius={3}
//             colors={{ scheme: "nivo" }}
//             borderWidth={1}
//             borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//             radialLabelsSkipAngle={10}
//             radialLabelsTextColor="#333333"
//             radialLabelsLinkColor={{ from: "color" }}
//             sliceLabelsSkipAngle={10}
//             sliceLabelsTextColor="#333333"
//             defs={[
//               {
//                 id: "dots",
//                 type: "patternDots",
//                 background: "inherit",
//                 color: "rgba(255, 255, 255, 0.3)",
//                 size: 4,
//                 padding: 1,
//                 stagger: true,
//               },
//               {
//                 id: "lines",
//                 type: "patternLines",
//                 background: "inherit",
//                 color: "rgba(255, 255, 255, 0.3)",
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10,
//               },
//             ]}
//             fill={[
//               {
//                 match: {
//                   id: "ruby",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "c",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "go",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "python",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "scala",
//                 },
//                 id: "lines",
//               },
//               {
//                 match: {
//                   id: "lisp",
//                 },
//                 id: "lines",
//               },
//               {
//                 match: {
//                   id: "elixir",
//                 },
//                 id: "lines",
//               },
//               {
//                 match: {
//                   id: "javascript",
//                 },
//                 id: "lines",
//               },
//             ]}
//             legends={[
//               {
//                 anchor: "bottom",
//                 direction: "row",
//                 justify: false,
//                 translateX: 0,
//                 translateY: 56,
//                 itemsSpacing: 0,
//                 itemWidth: 100,
//                 itemHeight: 18,
//                 itemTextColor: "#999",
//                 itemDirection: "left-to-right",
//                 itemOpacity: 1,
//                 symbolSize: 18,
//                 symbolShape: "circle",
//                 effects: [
//                   {
//                     on: "hover",
//                     style: {
//                       itemTextColor: "#000",
//                     },
//                   },
//                 ],
//               },
//             ]}
//           />
//         </PieBlock>
//         <ChartBlock>
//           <ResponsiveBar
//             data={barData}
//             keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
//             indexBy="country"
//             margin={{ top: 0, right: 130, bottom: 50, left: 60 }}
//             padding={0.2}
//             layout="horizontal"
//             valueScale={{ type: "linear" }}
//             indexScale={{ type: "band", round: true }}
//             colors={{ scheme: "nivo" }}
//             defs={[
//               {
//                 id: "dots",
//                 type: "patternDots",
//                 background: "inherit",
//                 color: "#38bcb2",
//                 size: 4,
//                 padding: 1,
//                 stagger: true,
//               },
//               {
//                 id: "lines",
//                 type: "patternLines",
//                 background: "inherit",
//                 color: "#eed312",
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10,
//               },
//             ]}
//             fill={[
//               {
//                 match: {
//                   id: "fries",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "sandwich",
//                 },
//                 id: "lines",
//               },
//             ]}
//             borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "country",
//               legendPosition: "middle",
//               legendOffset: 32,
//             }}
//             axisLeft={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "food",
//               legendPosition: "middle",
//               legendOffset: -40,
//             }}
//             labelSkipWidth={12}
//             labelSkipHeight={12}
//             labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
//             legends={[
//               {
//                 dataFrom: "keys",
//                 anchor: "bottom-right",
//                 direction: "column",
//                 justify: false,
//                 translateX: 120,
//                 translateY: 0,
//                 itemsSpacing: 2,
//                 itemWidth: 100,
//                 itemHeight: 20,
//                 itemDirection: "left-to-right",
//                 itemOpacity: 0.85,
//                 symbolSize: 20,
//                 effects: [
//                   {
//                     on: "hover",
//                     style: {
//                       itemOpacity: 1,
//                     },
//                   },
//                 ],
//               },
//             ]}
//             animate={true}
//             motionStiffness={90}
//             motionDamping={15}
//           />
//         </ChartBlock>
