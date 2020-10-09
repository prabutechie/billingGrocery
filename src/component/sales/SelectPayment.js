import React from 'react'
// import { Formik } from 'formik'

function SelectPayment({Payment}) {
    return (
        <div className="container mt-3">
            <form className="form">
                <div>
                    <select name="payment" className="form-control" onChange={(e)=>Payment(e.target.value)}>
                        <option value="">Select Payment Options</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit Card">Debit Card</option>                        
                        <option value="PhonePay">PhonePay</option>
                        <option value="GooglePay">GooglePay</option>
                        <option value="AmazonPay">AmazonPay</option>
                        <option value="BHIM">BHIM</option>
                        <option value="Paytm">Paytm</option>
                        <option value="BankTransfer">BankTransfer</option>
                        <option value="Bank Check">Bank Check</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SelectPayment
