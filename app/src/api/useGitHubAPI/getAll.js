import Axios from "axios";

const getAll = (url) => {
  const config = {
    method: "GET",
    url: `${url}?state=all`,
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

export default getAll;

