import React from 'react'

function InvoiceDetails({InvoiceNo, InvoiceDate}) {    

    
    return (
        <div className="container mt-3">
            <form className="form">
                <div className="invoice-input">
                    <input type="text" className="form-control" onChange={(e)=>InvoiceNo(e.target.value)}  placeholder="Enter Invoice Number" />
                    <input type="date" className="form-control" onChange={(e)=>InvoiceDate(e.target.value)} />
                </div>               
            </form>
        </div>
    )
}

export default InvoiceDetails
