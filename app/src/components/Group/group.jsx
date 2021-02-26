import React from 'react'
import { Grid, Box } from '@material-ui/core'


const GroupPRs =(props)=>{
    const {name, prList } =props
    return (<>
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <b>{name}</b>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
           <Grid container>
                {
                    prList.map((el)=>{
                        let BoxColor=''
                        if(el.status==="Merged")
                        BoxColor = "#fc7e7c";
                        if(el.status==="Closed")
                        BoxColor = "#b795fc";
                        if(el.status==='Open')
                        BoxColor = "#d0f08b"; 
                        return(
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box style={{background:BoxColor,border:'1px solid black', padding:'4px'}}>
                          <a target="_blank" href={el.link}>  {el.number}</a>
                        </Box>
                        </Grid>)
                    })
                }
           </Grid>
        </Grid>

    </Grid>
    </>)
}



export default GroupPRs
