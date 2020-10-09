import React from 'react'
import { useState } from 'react'
import Sales from './Sales'
import Purches from './Purches'

function Gst() {

    const [gstMenu,setgstMenu] = useState("purches")
    return (
        <div>
            <div className="w3-center">
                <h5>GST TAX DETAILS</h5>
            </div>
            <div className="gstMenu w3-row">
                <button className="w3-button w3-purple w3-half" onClick={()=>setgstMenu("purches")}>Purches GST</button>
                <button className="w3-button w3-indigo w3-half" onClick={()=>setgstMenu("sales")}>Sales GST</button>
            </div>
            {
                gstMenu === "purches" ? 
                (<Purches />)
                :
                (<Sales />)
            }
        </div>
    )
}

export default Gst
