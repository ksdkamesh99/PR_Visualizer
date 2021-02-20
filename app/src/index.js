import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Grid, Container, Typography, TextField } from "@material-ui/core";
const AppContainer = () =>{
  const [url,setUrl] = useState('')

  return(

    <Grid container spacing={4}>
      <Grid
        style={{ background: "#2559A7" }}
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        {" "}
        <Container>
          <br />
          <Typography style={{ color: "white" }} variant="h2">
            PR Visualizer
          </Typography>
          <TextField
<<<<<<< HEAD
            value={url}
            onChange={(e)=>{setUrl(e.target.value)}}
=======
>>>>>>> 7aa7ba1f9512b79286336d21dd2e7be5f6ae4ec7
            style={{ background: "white" }}
            variant="filled"
            fullWidth
            label="Enter GitHub Repo Url"
            color="primary"
            placeholder="https://github.com/username/reponame"
          />
        </Container>
      </Grid>

      <Grid
        style={{ background: "black" }}
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Container>dsd</Container>
      </Grid>

<<<<<<< HEAD
      <Grid
        style={{ marginTop: "7px" }}
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <App />
      </Grid>
    </Grid>

)};
ReactDOM.render(
  <React.StrictMode>
    <AppContainer/>
=======
      <Grid style={{marginTop:"7px"}} item container xs={12} sm={12} md={12} lg={12}>
        <App />
      </Grid>
    </Grid>
>>>>>>> 7aa7ba1f9512b79286336d21dd2e7be5f6ae4ec7
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
