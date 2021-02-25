import React, { useState } from "react";
import { PRBox, PieChart } from "./components";
import { Grid, Container, Button, TextField } from "@material-ui/core";
import _, { set } from "lodash";
import cleanData from "./utils/clean_data";
import Selection from './data/selected'
import groupStore from './data/group'
import GroupCollection from './components/Group/group'
const App = (props) => {
  const { data } = props;
  const [prData, setPrData] = useState(data);
  const [showGroupedPRs, setShowGroupedPRs] = useState(data);
  const [datavisibility, setDataVisibility] = useState(true);
  const [groupName, setGroupName] = useState("");
  
  const [groupStatus,setGroupStatus] = useState(false)
  const [errorSelection,setErrorSelection] = useState(false)
  const [displayGroups,setDisplayGroups] = useState(false)
  const displayAll = () => {
    setPrData(data);
    setDataVisibility(true);
    setShowGroupedPRs(false)
  };

  const displayClose = () => {
    var closeData = _.filter(data, (el) => {
      return el.state === "closed" && el.merged_at === null;
    });
    setPrData(closeData);
    setDataVisibility(true);
    setShowGroupedPRs(false)
  };

  const displayMerged = () => {
    var mergeData = _.filter(data, (el) => {
      return el.state === "closed" && el.merged_at !== null;
    });
    setPrData(mergeData);
    setDataVisibility(true);
    setShowGroupedPRs(false)
  };
  const createNewGroup=(name)=>{
    const config = {
      name:name,
      prList:[]
    }
    groupStore.push(config)
    console.log(groupStore)
    setGroupStatus(true)
  }
  console.log(Selection.length)
  var cleanResponse;
  return (
    <>
      <Container>
        <Grid container spacing={6}>
          <Grid item container spacing={4} xs={12} sm={12} md={7} lg={7}>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button
                variant="outlined"
                onClick={() => {
                  displayClose();
                }}
              >
                View Closed PRs
              </Button>
            </Grid>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button
                variant="outlined"
                onClick={() => {
                  displayMerged();
                }}
              >
                View Merged PRs
              </Button>
            </Grid>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button
                variant="outlined"
                onClick={() => {
                  displayAll();
                }}
              >
                All PRs
              </Button>
            </Grid>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button
                variant="outlined"
                onClick={() => {
                  setDataVisibility(false);
                  setDisplayGroups(false)
                  setShowGroupedPRs(false)
                }}
              >
                Create A Group
              </Button>
            </Grid>
            <Grid item spacing={4} xs={12} sm={12} md={4} lg={4}>
              <Button
                variant="outlined"
                onClick={() => {
                  setDataVisibility(false);
                  setDisplayGroups(false);
                  setShowGroupedPRs(true)
                }}
              >
                View Groups
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  if(Selection.length==0)
                  {
                    setErrorSelection(true)
                  }
                  else{
                    setDisplayGroups(true)
                  }
                }}
              >
               Add Selected to group 
              
              </Button>
              {
                 errorSelection && <><h5 style={{color:"red"}}>No PR Selected for Grouping</h5></>
               }
            </Grid>
          </Grid>
          <Grid item container spacing={4} xs={12} sm={12} md={7} lg={7}>
            { displayGroups && (
              <>
                 {groupStore.map((el,index)=>(
                    <Button variant="outlined" color="primary"
                    onClick={
                      ()=>{
                        Selection.map((prs)=>{
                          groupStore[index].prList.push(prs)
                        })
                        console.log(groupStore)
                      }
                     
                    }
                    >
                      Group Index: {index} <br/>
                      Group Name: {el.name} 
                    </Button>

                 ))} 
              </>
            )}
          </Grid>


          <Grid item container spacing={4} xs={12} sm={12} md={7} lg={7}>
            {!showGroupedPRs &&!datavisibility && (
              <>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <TextField fullWidth variant="filled" label="Group Name"
                   value={groupName} 
                   onChange={(e)=>{setGroupName(e.target.value)}}/>
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <Button variant="outlined"
                  onClick={()=>{
                    if(groupName)
                    createNewGroup(groupName)
                  }}
                  >
                    Create New Group
                  </Button>{" "}
                  {
                    groupStatus && <><h5>Group Created</h5></>
                  }
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <h3>Existing Groups</h3>
                {groupStore.map((el,index)=>(
                    <Button variant="outlined" color="primary">
                      Group Index: {index} <br/>
                      Group Name: {el.name} 
                    </Button>

                 ))} 
                </Grid>
              </>
            )}
          </Grid>

          <Grid item container spacing={4} xs={12} sm={12} md={7} lg={7}>
            {datavisibility &&
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
                      key={cleanResponse.number}
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

          {datavisibility && <Grid item container xs={12} sm={12} md={5} lg={5}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
             
              <PieChart merge={5} open={5} close={5} />
            </Grid>
          </Grid>}  
          {
            showGroupedPRs && <>
            {groupStore.map((group)=>{
            
            return   <GroupCollection name={group.name} prList={group.prList}/> 
            })}
            </>
          }
        </Grid>
      </Container>
    </>
  );
};

export default App;
