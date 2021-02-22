import axios from "axios";

const getAll = async (url) => {
    const config = {
      method: "GET",
      url:`${url}?state=open`,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    };
    let res = await Axios(config)
    let {data} = res;
    return Promise.all(data)
  };

export default getAll;
// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
