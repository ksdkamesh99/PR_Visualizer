import axios from 'axios';
import _ from 'lodash'
const getMerged = async (api) => {
    const response = await axios.get(`${api}?state=closed&page=1&per_page=10000`)
    let merged = _.filter(response.data, o=>!o.fork)
    console.log(response.data)
    return response.data
  }
export default getMerged;