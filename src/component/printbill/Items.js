import React from 'react'
// import { http } from '../../axios'

function Products({ items }) {    

    var total = 0;

    return (
        <div>
            <table className="table printbill-items-table">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <th>Product</th>
                        <th>HSNNO</th>                        
                        <th>Quantity</th>
                        <th>Rate</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((data, index) => {
                            // console.log("data", data)
                            total += data.rate  

                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.product}</td>
                                    <td>{data.hsnno}</td>                                    
                                    <td>{data.qt} {data.type}</td>
                                    <td>{data.rate}</td>                                                                     
                                </tr>
                            )
                        })
                    }

                    <tr>                       
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
