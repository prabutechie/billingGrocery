import React from "react";
import './index.css'


function Banner() {    
    return(
        <div className="banner w3-teal">
            <div className="softwarename">
                <h2 className="w3-center">Grocery Billing Software</h2>
            </div>
            <div className="companyname ">
                <h4 className="mr-3 mt-0 w3-right  w3-text-light">TechPort Softwares</h4>
            </div>
        </div>
    );
}

export default Banner;
