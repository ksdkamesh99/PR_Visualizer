import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UrltoAPI from './utils/urltoapi';
import getAll from './api/useGitHubAPI/getAll'
import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
const AppContainer = () => {
  const [url, setUrl] = useState("https://github.com/Tech-Phantoms/Tech_Phantoms_website");
  const [api, setApi] = useState("");
  const [data, setData] = useState("")


  useEffect(() => {
    setData(getAll(api));
  }, [api]);

  useEffect(() => {
    console.log(data);
  }, [data]);


  // const data = useGitHubAPI(api);
  return (
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
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            style={{ background: "white" }}
            variant="filled"
            fullWidth
            label="Enter GitHub Repo Url"
            color="primary"
            placeholder="https://github.com/username/reponame"
          /><br/><br/>
          <Button 
          variant="contained"
          onClick={()=>{
            setApi(UrltoAPI(url));
          }}
          >
            Visualize
          </Button>
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

      <Grid
        style={{ marginTop: "7px" }}
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <h1>{data}</h1>
        <App />
      </Grid>
    </Grid>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




