import React from 'react';
import styled from 'styled-components';
import { ResponsivePie } from "@nivo/pie";

const ContentHeaderBlock = styled.div`

`;

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

const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #eaf6ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  height: 15vh;
  width: 80%;
`;

const ContentInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 5fr;
  column-gap: 1rem;
`;

const ImageCircle = styled.div`
  width: 100px;
  height: 100px;
`;

const ContentHeader = () => {
    return (
        <ContentHeaderBlock>
            <ContentTitle>
        <Content>
          <ContentInfo>
            <h1>2월 </h1>
            <h2>남은 예산</h2>
            <h3> ___원 </h3>
          </ContentInfo>
          <ImageCircle>
            {/* 데이터 컴포넌트가 들어갈 부분 */}
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
          </ImageCircle>
        </Content>
      </ContentTitle>
        </ContentHeaderBlock>
    );
};

export default ContentHeader;