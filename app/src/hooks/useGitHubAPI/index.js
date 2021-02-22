import axios from "axios";
import { useState, useEffect } from "react";
import getAll from "./getAll";
const usePR = (url,choice) => {
  const [data, setData] = useState([]);
    
    switch(choice){
        case 1:return getAll(url);
        case 2:return getOpen(url);
        case 3: return getMerged(url);
        default: return 'dummy value'

    }
};
export default usePR;