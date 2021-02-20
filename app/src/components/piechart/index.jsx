import React from "react";
import { Pie } from "react-chartjs-2";
import {Box} from "@material-ui/core"
import colorConfig from "./color.config";
const PieChart = (props) => {
  const { merge,open,close } = props; //count
  const { merged, opened, closed,container } = colorConfig; //colors
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
  <Box style={{background:container, border:'1px solid black',borderRadius:'5px'}}><br/>
  <Pie style={{margin:'-15px'}} data={data}/><br/>
  </Box>
  </>;
};

export default PieChart;
