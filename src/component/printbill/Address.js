import React from 'react'

function ToAddress({address}) {
    return (
        <div className="toaddress">            
            {
                address && (<>
                    <h6><b>{address.name}</b></h6>
                    <p>{address.address}</p>
                    <p>{address.city}, {address.state}, {address.country} - {address.pincode} </p>
                    <p>GSTIN/UIN : {address.gstin}</p>
                </>)}
        </div>
    )
}

export default ToAddress
