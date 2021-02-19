import React from "react";
import { PRBox } from "./components";
import { Grid, Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Grid container spacing={4}>
       
        <Grid item  container  spacing={4} xs={12} sm={12} md={7} lg={7}>
         
          <Grid container spacing={5}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <PRBox title="Hello World" />
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <PRBox title="Hello World" />
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <PRBox number={2}title="Hello World" />
            </Grid>
            </Grid>
          
        </Grid>
        <Grid item container xs={12} sm={12} md={5} lg={5}></Grid>
      </Grid>
    </Container>
  );
}

export default App;
