import React from "react";
import config from "./color.config";
import _ from 'lodash'
import GroupStore from './../../data/group'
import { Box, Button, Checkbox, Grid } from "@material-ui/core";
import temp from './../../data/selected'
const PRBox = (props) => {
  const showGroupList=(number,status,githublink)=>{
           
    
    return(  GroupStore.map((el,index)=>{
                <Button variant="outlined" key={index}>
                    {el.name}
                </Button>
            }))
  }



  const { title, number, status, opened, comments, githublink, tags } = props;

  var {
    BoxColor,
    StatusColor,
    OpenColor,
    CommentColor,
    linkColor,
    linkFontColor,
  } = config;

  if (status === "Closed") {
    StatusColor = "red";
    BoxColor = "#fc7e7c";
  }

  if (status === "Merged") {
    StatusColor = "#b19cd9 ";
    BoxColor = "#b795fc";
  }
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "22px",
          backgroundColor: BoxColor,
        }}
      >
        <Grid item sm={12} xs={12} md={12} lg={12} id="PRHeading">
          <span id={number}>
            <b>#{number}</b>{" "}
          </span>
          <span>{title}</span>
        </Grid>
        <Grid container item sm={12} xs={12} md={12} lg={12} id="PRstats">
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            sm={12}
            d="status"
            style={{ padding: "10px", backgroundColor: StatusColor }}
          >
            Status: {status}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            sm={12}
            id="opened"
            style={{ padding: "10px", backgroundColor: OpenColor }}
          >
            Opened on: {opened}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            sm={12}
            id="comments"
            style={{ padding: "10px", backgroundColor: CommentColor }}
          >
            Total Comments: {comments}
          </Grid>
        </Grid>
        <Grid container item sm={4} xs={4} md={7} lg={7} id="link">
          <Grid
            item xs={12} sm={12} md={5} lg={5}
            style={{
              padding: "10px",
              backgroundColor: linkColor,
              color: linkFontColor,
              marginRight:'4px'
            }}
          >
            <a href={githublink} style={{ color: linkFontColor }}>
              View on GitHub
            </a>
          </Grid>
          <Grid
            item xs={12} sm={12} md={6} lg={6}
           
          >
           <Checkbox
           color="primary"
            name="Select to group" 
            onChange={(e)=>{
                    const checkedPR = {number: number, link:githublink, status: status  }
                    if(e.target.checked)
                        {
                        temp.push(checkedPR)
                            console.log(temp)
                    }
                    else{
                        _.remove(temp,(el)=>{ return el.number===checkedPR.number})
                    console.log(temp)                        
                    }
            }}
            />
Select to Group
          
          </Grid>

          
        </Grid>
      </Grid>
    </>
  );
};
export default PRBox;
