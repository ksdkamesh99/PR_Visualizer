import React from "react";
import { PRBox, PieChart } from "./components";
import { Grid, Container } from "@material-ui/core";

const App = (props) => {
  const { data } = props; // const data = props.data
  return (
    <>
      <Container>
        <Grid container spacing={6}>
          <Grid item container spacing={4} xs={12} sm={12} md={7} lg={7}>
            {data.map((el) => {
              return (
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <PRBox title={el.title} />
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
