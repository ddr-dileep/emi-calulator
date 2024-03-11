import React, { memo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./pieChart.scss";

const PieChart = ({ options }) => {
  return (
    <div className="piechart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default memo(PieChart);
