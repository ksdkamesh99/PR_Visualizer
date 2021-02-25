import axios from "axios";

// An utility function which helps to get yourself a clean data.
const cleanData=(data)=>{
    let status = null
     if(data.state==="closed" && data.merged_at!==null)
     {
        status="Merged"
     }
     else if(data.state==="closed" && data.merged_at===null){
      status="Closed"
     }
     else
     status = "Open"
   //   const getComments =async () =>{
   //      const uri = data.comments_url;
   //      console.log(uri)
   //      await axios.get(uri).then((response)=>{return  console.log(response.data)})
   //   }
    const comments =  "Not Yet"
const cleandata = {
  github:data.html_url,
  number:data.number,
  status:status,
  title:data.title,
  opened:new Date(data.created_at).toDateString(),

}
return cleandata;

}
export default cleanData
