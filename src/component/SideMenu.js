import React from "react";
import {useDispatch} from 'react-redux'
import {sideMenu} from '../redux/Action'
import './index.css'

function SideMenu() {
   const dispatch = useDispatch()
   //  const menuWidth = {
   //      width:"100%",
   //      height:"100px"        
   //  }
   //  const textPadding={
   //      paddingTop:"30%"
   //  }
  return (
     <div className="sidemenu_container w3-light-gray">
         <div className="w3-card card_padding " onClick={()=>dispatch(sideMenu("sales"))} >
            <h5 className="text_padding">Sales</h5>
         </div>
         <div  className="w3-card card_padding" onClick={()=>dispatch(sideMenu("purches"))} >
            <h5 className="" >Purches</h5>
         </div>
         <div  className="w3-card card_padding" onClick={()=>dispatch(sideMenu("stock"))} >
            <h5 className="" >Stock</h5>                                                     
         </div>
         <div  className="w3-card card_padding" onClick={()=>dispatch(sideMenu("address"))} >
            <h5 className="" >Address</h5>
         </div>
         <div  className="w3-card card_padding" onClick={()=>dispatch(sideMenu("gst"))} >
            <h5 className="" >GST</h5>
         </div>
         {/* <div  className="w3-card card_padding" onClick={()=>dispatch(sideMenu("profit"))} >
            <h5 className="" >Profit</h5>
         </div> */}
         
     </div>
    );
}

export default SideMenu;
