const UrltoAPI = (data) =>{
    return addGitHubAPI(data) + addPullRoute(data);
  }
  
  const addGitHubAPI = (data) => {
    data = data.trim()
    return data.replace(
      "github.com/",
      "api.github.com/repos/"
    );
  };
  
  const addPullRoute = (data)=>{
  data = data.trim();
  return data[data.length-1]!='/'?  `/pulls`:`pulls`
  }

  export default UrltoAPI;