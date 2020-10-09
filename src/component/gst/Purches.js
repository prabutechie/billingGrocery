import React, { useState, useEffect } from 'react'
import { http } from '../../axios'
import Filter from '../Filter'

function Purches() {

    const [data, setData] = useState([])
    const [filterData, setfilterData] = useState()

    const FilterData = (filter) => {
        setfilterData(filter)
    }




    useEffect(() => {
        http.get("purches")
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    var x = 0;
    return (
        <div>
            <Filter FilterData={FilterData} data={data} />
            <table className="w3-table-all">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Company</td>
                        <td>Gst No</td>
                        <td>Date</td>
                        <td>Invoice</td>
                        <td>Amount</td>
                        <td>GST %</td>
                        <td>TAX</td>
                        <td>Total Amount</td>
                    </tr>
                </thead>

                {
                    filterData ?
                        (
                            <tbody>
                                {
                                    filterData.map(data => {
                                        return data.items.map((items) => {
                                            x += 1
                                            return (
                                                <tr key={x}>
                                                    <td>{x}</td>
                                                    <td>{data.address.name}</td>
                                                    <td>{data.address.gstin}</td>
                                                    <td>{data.invoicedate}</td>
                                                    <td>{data.invoiceno}</td>
                                                    <td>{items.total}</td>
                                                    <td>{items.gst}%</td>
                                                    <td>{items.gstTotal}</td>
                                                    <td>{items.grandTotal}</td>
                                                </tr>
                                            )

                                        })
                                    })
                                }
                            </tbody>
                        )
                        :
                        (
                            <tbody>
                                {
                                    data.map(data => {
                                        return data.items.map((items) => {
                                            x += 1
                                            return (
                                                <tr key={x}>
                                                    <td>{x}</td>
                                                    <td>{data.address.name}</td>
                                                    <td>{data.address.gstin}</td>
                                                    <td>{data.invoicedate}</td>
                                                    <td>{data.invoiceno}</td>
                                                    <td>{items.total}</td>
                                                    <td>{items.gst}%</td>
                                                    <td>{items.gstTotal}</td>
                                                    <td>{items.grandTotal}</td>
                                                </tr>
                                            )

                                        })
                                    })
                                }
                            </tbody>


                        )
                }

            </table>
        </div>
    )
}

export default Purches
