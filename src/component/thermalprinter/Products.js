import React, { useState, useEffect } from 'react'
import { http } from '../../axios'

function Products({ reload }) {
    const [data, setData] = useState([])
    // console.log(products)


    useEffect(() => {
        http.get("purches/tempItems")
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                // console.log(err)
            })
    }, [reload])

    var grandTotal = 0;

    console.log("product",data)

    return (
        <div style={{marginTop:"100px"}}>
            <table className="ptable table">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <th>Product</th>                        
                        <th>Qt</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => {
                            grandTotal += data.rate



                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>                                    
                                    <td>{data.product}</td>
                                    <td>{data.qt}{data.type}</td>
                                    <td>{data.rate}</td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td></td>                        
                        <td></td>
                        <td></td>
                        <td>Rs {grandTotal}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Products
