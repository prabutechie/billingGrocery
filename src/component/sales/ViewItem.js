import React, { useEffect, useState } from 'react'
import { http } from '../../axios'
import './index.css'
import DeleteIcon from '@material-ui/icons/Delete'

function ViewItem({ reload,Reload }) {
    
    
    const [viewdata, setviewData] = useState([])

    useEffect(() => {
       
        http.get("purches/tempItems")
            .then(res => {
                // console.log(res.data)
                setviewData(res.data)
            })
            .catch(err => {
                // console.log(err)
            })
    }, [reload])

    const Delete = (id) => {
        http.delete("purches/tempitems", { params: { id: id } })
            .then(res => {
                // console.log(res.data)
                if (res.data.ok === 1) {
                    Reload(res.data)
                    alert("Item Removed Successfully")
                }
                else {
                    alert("Item Not Removed")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (viewdata.length > 0) {
        return (
            <div className="mt-3 w3-container">
                <table className="w3-table-all">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>HSNNO</th>
                            <th>MRP</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>total</th>
                            <th>GST</th>
                            <th>total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewdata.map(data => {
                                // console.log("data", data)
                                return (
                                    <tr key={data._id}>
                                        <td>{data.product}</td>
                                        <td>{data.hsnno}</td>
                                        <td>{data.mrp}</td>
                                        <td>{data.qt}</td>
                                        <td>{data.rate}</td>
                                        <td>{data.total}</td>
                                        <td>{data.gst}%</td>
                                        <td>{data.grandTotal}</td>
                                        <td>
                                            <DeleteIcon
                                                className="w3-text-red"
                                                onClick={() => Delete(data._id)}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
   
}

export default ViewItem
