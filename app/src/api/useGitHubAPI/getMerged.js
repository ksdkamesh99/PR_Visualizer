import Axios from "axios";

const getMerged = async (url) => {
    const config = {
      method: "GET",
      url:`${url}?state=merged`,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    };
    try {
      Axios(config)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((e) => {
          return e;
        });
    } catch (e) {
      return e;
    }
  };

export default getMerged;
// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
