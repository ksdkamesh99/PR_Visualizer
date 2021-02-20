import React from 'react'
import config from './color.config'
import {Box, Grid} from "@material-ui/core"
const PRBox=(props)=>{

    const {title, number, status, opened, comments, link, tags} = props
    const { BoxColor,
    StatusColor,
    OpenColor,
    CommentColor,
    linkColor,
    linkFontColor} = config
    return(
        <>
        <Grid container spacing={1} style={{border:'1px solid black',borderRadius:'5px',padding:"22px",backgroundColor:BoxColor}}>
            <Grid  item sm={12} xs={12} md={12} lg={12} id ="PRHeading">
            <span id="PRno">#{number} </span><span>{title}</span>
            </Grid>
            <Grid container item sm={12} xs={12} md={12} lg={12}  id="PRstats">
                <Grid  item xs={12} md={4} lg={4} sm={12} d="status"
                style={{padding:'10px',backgroundColor:StatusColor}}
                >
                    Status: {status}
                </Grid>
                <Grid item xs={12} md={4} lg={4} sm={12} id="opened"
                style={{padding:'10px',backgroundColor:OpenColor}}
                >
                    Opened on: {opened}
                </Grid>
                <Grid item xs={12} md={4} lg={4} sm={12} id="comments"
                style={{padding:'10px',backgroundColor:CommentColor}}
                >
                    Total Comments: {comments}
                </Grid>
            </Grid>
            <Grid container item sm={4} xs={4} md={4} lg={4} id="link"
            >
               <Grid item style={{padding:'10px',backgroundColor:linkColor,color:linkFontColor}}> View on GitHub</Grid>
            </Grid>
        </Grid>
        </>
    )
}
export default PRBox;