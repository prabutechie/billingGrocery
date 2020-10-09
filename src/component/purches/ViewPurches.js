import React, { useState, useEffect } from 'react'
import { http } from '../../axios'
import ViewPrint from '../printbill/ViewPrint'
import { NativeAddress } from '../../default/NativeAddress'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility';
import './index.css'
import Filter from '../Filter'

function ViewPurches({ reload, Reload }) {

    const [purches, setPurches] = useState([])
    const [filterData, setfilterData] = useState()

    const FilterData = (filter) => {
        setfilterData(filter)
    }

    useEffect(() => {
        http.get("purches")
            .then(res => {
                setPurches(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload])

    const DeletePurches = (id) => {
        http.delete("purches", { params: { id: id } })
            .then(res => {
                if (res.data.ok === 1) {
                    alert("Bill Deleted Successfully")
                }
                else {
                    alert(res.data)
                }
                Reload(res.data)
            })
            .catch(err => {
                if (err) {
                    alert(err)
                }
            })
    }

    return (
        <div className="container mt-3">
            <Filter FilterData={FilterData} data={purches} />
            {
                filterData ?
                    (
                        <div>
                            {
                                filterData.map((data, index) => {
                                    return (
                                        <div key={index} className="w3-card mt-3" >
                                            <p className="w3-center w3-indigo pt-3 ">{data.address.name}</p>
                                            <div className="iv">
                                                <p className="ml-3">Invoice No : <b>{data.invoiceno}</b></p>
                                                <p>Invoice Date : <b>{data.invoicedate}</b></p>
                                                <p>Total: <b>{data.grandTotal}</b></p>

                                                <div className="mr-3">
                                                    <button className="w3-text-green mr-3" data-toggle="modal" data-target={`#id${index}`} ><VisibilityIcon /></button>
                                                    <button className="w3-text-red" onClick={() => DeletePurches(data._id)}><DeleteIcon /></button>
                                                </div>

                                            </div>

                                            <div className="modal" id={`id${index}`}>
                                                <div className="modal-dialog modal-xl">
                                                    <div className="modal-content">
                                                        <button type="button" className="w3-right btn w3-red close" data-dismiss="modal">&times;</button>
                                                        <div className="w3-container">
                                                            <ViewPrint items={data.items} fromaddress={data.address} toaddress={NativeAddress} payment={data.payment} invoiceDate={data.invoicedate} invoiceNo={data.invoiceno} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                    :
                    (
                        <div>
                            {
                                purches.map((data, index) => {
                                    return (
                                        <div key={index} className="w3-card mt-3" >
                                            <p className="w3-center w3-indigo pt-3 ">{data.address.name}</p>
                                            <div className="iv">
                                                <p className="ml-3">Invoice No : <b>{data.invoiceno}</b></p>
                                                <p>Invoice Date : <b>{data.invoicedate}</b></p>
                                                <p>Total: <b>{data.grandTotal}</b></p>

                                                <div className="mr-3">
                                                    <button className="w3-text-green mr-3" data-toggle="modal" data-target={`#id${index}`} ><VisibilityIcon /></button>
                                                    <button className="w3-text-red" onClick={() => DeletePurches(data._id)}><DeleteIcon /></button>
                                                </div>

                                            </div>

                                            <div className="modal" id={`id${index}`}>
                                                <div className="modal-dialog modal-xl">
                                                    <div className="modal-content">
                                                        <button type="button" className="w3-right btn w3-red close" data-dismiss="modal">&times;</button>
                                                        <div className="w3-container">
                                                            <ViewPrint items={data.items} fromaddress={data.address} toaddress={NativeAddress} payment={data.payment} invoiceDate={data.invoicedate} invoiceNo={data.invoiceno} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    )

            }
        </div>
    )
}

export default ViewPurches
