import axios from 'axios'
const fetchData = async (api) => {
    const response = await axios.get(`${api}?state=all&page=1&per_page=10000`)
    console.log(response.data)
    return response.data
  }
export default fetchData;