import React from 'react'
import { Grid } from '@material-ui/core'


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
                        
                        return(
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box style={{border:'1px solid black', padding:'4px'}}>
                            {number}
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
