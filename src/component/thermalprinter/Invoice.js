import React from 'react'
import './index.css'


function Invoice({invoiceNo,invoiceDate,payment}) {
    return (
        <div className="mt-3">
            <table className="w3-table invoiceData">
                <tbody>
                    <tr>
                        <td>No : </td>
                        <td><b>{invoiceNo}</b></td>
                    </tr>
                    <tr>
                        <td>Date : </td>
                         <td><b>{invoiceDate}</b></td>
                    </tr>
                    <tr>
                        <td>Mode of Payment : </td>
                        <td><b>{payment}</b></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Invoice
