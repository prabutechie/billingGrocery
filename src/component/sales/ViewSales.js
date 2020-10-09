import React, { useState, useEffect } from 'react'
import { http } from '../../axios'
import { MyDate } from '../../mycode/MyDate'
import ViewPrint from '../printbill/ViewPrint'
import { NativeAddress } from '../../default/NativeAddress'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Filter from '../Filter'

function ViewSales({ reload, Invoice, Reload }) {

    const [sales, setSales] = useState([])
    const [filterData, setfilterData] = useState()

    const FilterData = (filter) => {
        setfilterData(filter)
    }

    useEffect(() => {
        http.get("sales")
            .then(res => {
                setSales(res.data)
                Invoice(res.data.length)

            })
            .catch(err => {
                console.log(err)
            })
    }, [reload, Invoice])

    const DeleteSales = (id) => {
        http.delete("sales", { params: { id: id } })
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
            <Filter FilterData={FilterData} data={sales} />
            {
                filterData ?
                    (
                        <div>
                            {
                                filterData.map((data, index) => {
                                    return (
                                        <div key={index} className="w3-card mt-3 " >
                                            <p className="w3-center w3-purple  pt-3 ">{data.address.name}</p>
                                            <div className="iv">
                                                <p className="ml-3">Invoice No : <b>{data.invoiceno}</b></p>
                                                <p>Invoice Date : <b>{MyDate(data.invoicedate)}</b></p>
                                                <p>Total: <b>{data.grandTotal}</b></p>

                                                <div className="mr-3">
                                                    <button className="w3-text-green mr-3" data-toggle="modal" data-target={`#ids${index}`} ><VisibilityIcon /></button>
                                                    <button className="w3-text-red" onClick={() => DeleteSales(data._id)}><DeleteIcon /></button>
                                                </div>
                                            </div>

                                            <div className="modal" id={`ids${index}`}>
                                                <div className="modal-dialog modal-xl">
                                                    <div className="modal-content">
                                                        <button type="button" className="w3-right btn w3-red close" data-dismiss="modal">&times;</button>
                                                        <div className="w3-container">
                                                            <ViewPrint items={data.items} fromaddress={NativeAddress} toaddress={data.address} payment={data.payment} invoiceDate={data.invoicedate} invoiceNo={data.invoiceno} />
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
                                sales.map((data, index) => {
                                    return (
                                        <div key={index} className="w3-card mt-3 " >
                                            <p className="w3-center w3-purple  pt-3 ">{data.address.name}</p>
                                            <div className="iv">
                                                <p className="ml-3">Invoice No : <b>{data.invoiceno}</b></p>
                                                <p>Invoice Date : <b>{MyDate(data.invoicedate)}</b></p>
                                                <p>Total: <b>{data.grandTotal}</b></p>

                                                <div className="mr-3">
                                                    <button className="w3-text-green mr-3" data-toggle="modal" data-target={`#ids${index}`} ><VisibilityIcon /></button>
                                                    <button className="w3-text-red" onClick={() => DeleteSales(data._id)}><DeleteIcon /></button>
                                                </div>
                                            </div>

                                            <div className="modal" id={`ids${index}`}>
                                                <div className="modal-dialog modal-xl">
                                                    <div className="modal-content">
                                                        <button type="button" className="w3-right btn w3-red close" data-dismiss="modal">&times;</button>
                                                        <div className="w3-container">
                                                            <ViewPrint items={data.items} fromaddress={NativeAddress} toaddress={data.address} payment={data.payment} invoiceDate={data.invoicedate} invoiceNo={data.invoiceno} />
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

export default ViewSales
