import Axios from "axios";

const makeApiCall = (api, prState, hook_setter) => {
  let per_page = 5;
  const config = {
    method: "GET",
    url: `${api}?state=${prState}&page=1?per_page=${per_page}`,
    headers: {
      Accept: "application/vnd.github.v3+json",
      // Authorization: "", will need oauth later for higher api calls limit
    },
  };

  try {
    Axios(config)
      .then((res) => {
        let data = res.data;
        console.log('retrieved prs with lenght = ' + data.length);
        let prs_holder = [];
        for (let i = 0; i < data.length; i++) {
          let pr = data[i];
          let new_pr = {
            "title": pr["title"],
            "url": pr["url"],
            "state": pr["state"],
            // add all properties you need
          };
          prs_holder.push(new_pr);
        }
        hook_setter('' + prs_holder);
      })
      .catch((e) => {
        return e;
      });
  } catch (e) {
    return e;
  }
}

export default makeApiCall;

