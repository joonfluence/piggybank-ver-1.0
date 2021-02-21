import React from 'react';
import styled from 'styled-components';

const TotalRatioChartBlock = styled.div`
    display: flex;
`;

const TotalRatioGaugeBlock = styled.div`
    position: relative;
    background-color: grey;
    width: 300px;
    height: 5px;
    margin: 1rem;
`;

const TotalRatioDescription = styled.div`

`;

const TotalRatioGauge = styled.div`
    position: absolute;
    background-color: skyblue;
    width: 100%;
    height: 5px;
`;

const TotalRatioChart = ({gaudge, title}) => {
    return (
        <TotalRatioChartBlock>
            <TotalRatioDescription>
                총OOO액
            </TotalRatioDescription>
            <TotalRatioGaugeBlock>
                <TotalRatioGauge gaudge></TotalRatioGauge>
            </TotalRatioGaugeBlock>
        </TotalRatioChartBlock>
    );
};

export default TotalRatioChart;