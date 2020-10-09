import React, { useEffect, useState } from 'react'
import { http } from '../../axios'


function NameEntry({Address}) {

    const [data, setData] = useState([])
    // const [viewData, setViewData] = useState()

    useEffect(() => {
        http.get("address")
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])    

    

    const ChooseName = (e) =>{
        // setViewData(data[e]) 
        Address(data[e])
    }
    

    return (
        <div className="container mt-3">            
            <form className="form">
                <select name="address" onChange={(e) => { ChooseName(e.target.value) }} className="form-control">
                    <option value="" className="w3-white">Select Company Name</option>
                    {
                        data.map((data, index) => {
                            return (
                                <option key={data._id} value={index}>{data.name}</option>
                            )
                        })
                    }
                </select>
            </form>

            {/* {
                viewData && (
                    <div className="container">
                        <table className="w3-table-all">
                            <tbody>                                
                                <tr>
                                    <td>Address</td>
                                    <td>{viewData.address}, {viewData.city}, {viewData.state}, {viewData.country}, {viewData.pincode}</td>
                                </tr>
                                <tr>
                                    <td>GSTIN</td>
                                    <td>{viewData.gstin}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{viewData.email}</td>
                                </tr>
                                <tr>
                                    <td>Mobile</td>
                                    <td>{viewData.contact}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>)} */}
        </div>
    )
}

export default NameEntry
