import React from 'react'
import './index.css'
// import { http } from '../../axios'

function Products({ items }) {    

    console.log("items",items)

    var total = 0;

    return (
        <div>            
            <table className="w3-table itemTable" style={{color:"red",fontSize : "50px"}}>
                <thead>
                    <tr>
                        <td className = "itemTable">S.No</td>                        
                        <th>Product</th>                        
                        <th>Qt</th>
                        <th>Rate</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((data, index) => {
                            console.log("data", data)
                            total += data.rate  

                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.product}</td>                                                                   
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
                        <td>{total}</td>                        
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Products
