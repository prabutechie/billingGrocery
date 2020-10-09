import React from 'react'


function Invoice({invoiceNo,invoiceDate,payment}) {
    return (
        <div>
            <table className="w3-table">
                <tbody>
                    <tr>
                        <td>Invoice No : </td>
                        <td><b>{invoiceNo}</b></td>
                    </tr>
                    <tr>
                        <td>Date : </td>
                         <td><b>{invoiceDate}</b></td>
                    </tr>
                    <tr>
                        <td>Mode of PAyment : </td>
                        <td><b>{payment}</b></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Invoice
