import React from 'react'
// import { http } from '../../axios'

function Products({ items }) {    

    var total = 0;

    return (
        <div>
            <table className="table printbill-items-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product</th>
                        <th>HSNNO</th>                        
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Taxable Amount</th>
                        <th>Gst</th>
                        <th>Total</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((data, index) => {
                            // console.log("data", data)
                            total += data.total  

                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.product}</td>
                                    <td>{data.hsnno}</td>                                    
                                    <td>{data.qt} {data.type}</td>
                                    <td>{data.rate}</td>
                                    <td>{data.taxableamount}</td>
                                    <td>{data.gst}%</td>
                                    <td>{data.total}</td>                                                                     
                                </tr>
                            )
                        })
                    }

                    <tr>                       
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{total}</td>                        
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Products
