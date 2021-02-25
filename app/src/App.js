import React, { useState } from "react";
import { PRBox, PieChart } from "./components";
import { Grid, Container, Button } from "@material-ui/core";
import _ from "lodash";
import cleanData from "./utils/clean_data";
const App = (props) => {
  const { data } = props;
  const [prData,setPrData] =useState(data)

  const displayAll=()=>{
    setPrData(data)
  }

  const displayClose=()=>{
    var closeData = _.filter(data, (el) => {
      return el.state === "closed" && el.merged_at===null;
    });
    setPrData(closeData)
  }

  const displayMerged=()=>{
    var mergeData = _.filter(data, (el) => {
      return el.state=== "closed" && el.merged_at!==null;
    });
    setPrData(mergeData)
  }



  var cleanResponse;
  return (
    <>
      <Container>
        <Grid container spacing={6}>
          <Grid item container spacing={4} xs={12} sm={12} md={7} lg={7}>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button variant="outlined" onClick={()=>{displayClose()}}>View Closed PRs</Button>
            </Grid>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button variant="outlined" onClick={()=>{displayMerged()}} >View Merged PRs</Button>
            </Grid>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button variant="outlined" onClick={()=>{displayAll()}} >All PRs</Button>
            </Grid>
          </Grid>
          <Grid item container spacing={4} xs={12} sm={12} md={7} lg={7}>
            {
              
         prData &&
            prData.map((el) => {
              cleanResponse = cleanData(el);
              // if(cleanResponse.status==="Merged")
              // setMergeCount(merged+1);
              // if(cleanResponse.status="Closed")
              // setCloseCount(closed+1);
              // if(cleanResponse.status="Open")
              // setOpenCount(opened+1);
              return (
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <PRBox
                    key = {cleanResponse.number}
                    title={cleanResponse.title}
                    number={cleanResponse.number}
                    status={cleanResponse.status}
                    opened={cleanResponse.opened}
                    githublink={cleanResponse.github}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Grid item container xs={12} sm={12} md={5} lg={5}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <PieChart merge={5} open={5} close={5} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
