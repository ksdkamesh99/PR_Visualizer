import { useState, useEffect } from "react";
import getAll from "./getAll";
import getOpen from './getOpen';
import getMerged from './getMerged'
const getPRData = (url,choice) => {
  var data=''
    
    switch(choice){
        case 1:
            data = getAll(url)
            if(data){console.log(data)
            return data;
            }
     
        case 2:
            data = getOpen(url)
            if(data){console.log(data)
                return data;
                }
        case 3:
            data = getMerged(url)
            if(data){console.log(data)
                return data;
                }
        default: return 'dummy value'

    }
    
};
export {getPRData};