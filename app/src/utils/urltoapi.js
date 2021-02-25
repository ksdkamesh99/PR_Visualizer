const UrltoAPI = (data) =>{
    if(isGithubUrl(data))
      return addGitHubAPI(data) + addPullRoute(data);
    else
      return "Invalid URL"
  }
  
  const addGitHubAPI = (data) => {
    data = data.trim()
    data = data.replace("www.","")
    return data.replace(
      "github.com/",
      "api.github.com/repos/"
    );
  };
  
  const addPullRoute = (data)=>{
  data = data.trim();
  return data[data.length-1]!='/'?  `/pulls`:`pulls`
  }

  function isGithubUrl(str) {
  
    let pattern1 = new RegExp('^(https://)?'+ // protocol
      '(www[.])?'+ // 3w ?
      '(github.com/)'+ // github
      '([a-zA-Z0-9_-]+)/'+ // repo owner
      '([a-zA-Z0-9_-]+)/*$','i'); // repo name
  
  
    let pattern2 = new RegExp('^(www[.])?'+ // 3w ?
      '(github.com/)'+ // github
      '([a-zA-Z0-9_-]+)/'+ // repo owner
      '([a-zA-Z0-9_-]+)/*$','i'); // repo name
  
    
    let pattern3 = new RegExp('^(github.com/)'+ // github
      '([a-zA-Z0-9_-]+)/'+ // repo owner
      '([a-zA-Z0-9_-]+)/*$','i'); // repo name
  
    return pattern1.test(str) || pattern2.test(str) || pattern3.test(str);
  }

  export default UrltoAPI;
