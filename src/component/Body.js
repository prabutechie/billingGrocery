import React from "react";
import {useSelector} from 'react-redux'
import Sales from './sales'
import Purches from './purches'
import Stock from './stock'
// import Profit from './profit'
import Address from './address'
// import Gst from './gst'

function Body() {
  const sidemenu = useSelector(state => state.sideMenu)
  
  return (
    <div>
     {
       sidemenu === "sales" && <Sales />
     }
     {
       sidemenu === "purches" && <Purches />
     }
     {
       sidemenu === "stock" && <Stock />
     }
     {
       sidemenu === "address" && <Address />
     }  
     {/* {
       sidemenu === "gst" && <Gst />
     }  
     {
       sidemenu === "profit" && <Profit />
     }   */}
        
    </div>
  );
}

export default Body;
