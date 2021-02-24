import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UrltoAPI from './utils/urltoapi';
import Axios from "axios";

import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
const AppContainer = () => {
  const [url, setUrl] = useState("https://github.com/MLH-Fellowship/portfolio-template");
  const [api, setApi] = useState("https://api.github.com/repos/MLH-Fellowship/portfolio-template/pulls");
  const [data, setData] = useState("init data");


  useEffect(() => {
    getData(api, "open");
  }, [api]);

  useEffect(() => {
    // display pull request!
    alert('DATA SET');
  }, [data]);

  const makeCall = (page, prs_holder, prState) => {
    const config = {
      method: "GET",
      url: `${api}?state=${prState}&page=${page}`,
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Authorization: "", will need oauth later for higher api calls limit
      },
    };

    try {
      Axios(config)
        .then((res) => {
          let data = res.data;
          if(data == undefined || data.length == 0) // ie empty
          {
            // no more data here
            setData(prs_holder);
          }
          else
          {
              console.log('retrieved prs with lenght = ' + data.length);
              for(let i = 0; i < data.length; i++)
              {
                let pr = data[i];
                let new_pr = {
                  "title": pr["title"],
                  "url": pr["url"],
                  "state": pr["state"],
                  // add all properties you need
                };
                prs_holder.push(new_pr);
              }
              if(page == 2)
                return;
              makeCall(page + 1, prs_holder, prState);
              
          }
        })
        .catch((e) => {
          return e;
        });
    } catch (e) {
      return e;
    }
  }

const getData = (prState) => {
    makeCall(1, [], prState);
  };
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




