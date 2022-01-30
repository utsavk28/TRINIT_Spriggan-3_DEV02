import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {data} from "./SummaryData.jsx";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
      <>
    <div className="ml-5 mr-4" style={{height:"300px", width:"300px"}}>
    <Pie data={data} />;
    </div>

      </>
  );
};

export default PieChart;
