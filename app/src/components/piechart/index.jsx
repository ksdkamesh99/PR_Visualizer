import React from "react";
import { Pie } from "react-chartjs-2";
import colorConfig from "./color.config";
const PieChart = (props) => {
  const { merge,open,close } = props; //count
  const { merged, opened, closed } = colorConfig; //colors
  const data = {
    labels: ["Merged", "Open", "Closed"],
    datasets: [
      {
        data: [merge,open,close],
        backgroundColor: [merged, opened, closed],
        borderColor: [merged, opened, closed],
        borderWidth: 2,
      },
    ],
  };
  return <>
  <Pie data={data}/>
  </>;
};

export default PieChart;
