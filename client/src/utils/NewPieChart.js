import React from 'react';
import styled from 'styled-components';
import "./NewPieChart.css";

const NewPieChartBlock = styled.div`

`;

const NewPieChart = ({data}) => {
    return (
        <NewPieChartBlock>
            <div class="pieContainer">
            <div class="pieBackground"></div>
            <div id="pieSlice1" class="hold"><div class="pie"></div></div>
            <div id="pieSlice2" class="hold"><div class="pie"></div></div>
            <div id="pieSlice3" class="hold"><div class="pie"></div></div>
            <div id="pieSlice4" class="hold"><div class="pie"></div></div>
            <div id="pieSlice5" class="hold"><div class="pie"></div></div>
            <div id="pieSlice6" class="hold"><div class="pie"></div></div>
            </div>
        </NewPieChartBlock>
    );
};

export default NewPieChart;