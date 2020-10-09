import React from "react";
// import Main from './Main'
import Body from "./Body";
import SideMenu from "./SideMenu";
import Banner from "./Banner";
import './index.css'


function index() {
  return (
    <div className="main">
      <div className="banner">
        <Banner />
      </div>

      <div className="body">
        <div className="sidemenu">
          <SideMenu />
        </div>
        <div className="mainbody">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default index;
