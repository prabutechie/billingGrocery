import React, { useState, useRef } from 'react'
import ProductEntry from './ProductEntry'
import ViewItem from './ViewItem'
import NameEntry from './NameEntry'
import SelectProduct from './SelectProduct'
import SelectPayment from './SelectPayment'
import InvoiceDetails from './InvoiceDetails'
import ViewPurches from './ViewPurches'

import CloseIcon from '@material-ui/icons/Close'

import PrintButton from './PrintButton'

import ViewPrint from '../printbill/ViewPrint'
import { http } from '../../axios'
import { NativeAddress } from '../../default/NativeAddress'
import { MyDate } from '../../mycode/MyDate'

function Purcches() {
    const [reloadView, setreloadView] = useState(1)
    const [selectData, setselectData] = useState()


    const [address, setAddress] = useState()
    const [payment, setPayment] = useState()
    const [invoiceNo, setinvoiceNo] = useState()
    const [invoiceDate, setinvoiceDate] = useState()

    const [newPurches, setnewPurches] = useState(false)
    


    // console.log("payment", payment)
    // console.log("address", address)





    const Reload = (id) => {
        // console.log(id)
        setreloadView(id)
    }




    const SelectData = (data) => {
        // console.log("index Select Data",data)
        if (data) {
            const { _id, __v, ...resData } = data
            resData.qt = ""
            resData.rate = ""
            setselectData(resData)
        }

    }

    const Address = (address) => {
        setAddress(address)
    }

    const Payment = (payment) => {
        setPayment(payment)
        
    }

    const componentRef = useRef()

    const InvoiceNo = (value) => {
        setinvoiceNo(value)
    }

    const InvoiceDate = (value) => {
        setinvoiceDate(value)
    }

    const NewPurches = () => {
        setnewPurches(true)
    }

    const ClosePurches = () => {
        setnewPurches(false)
    }

    const CancelBill =()=>{
        setAddress()
        setPayment()
        setinvoiceNo()
        setinvoiceDate()
        setnewPurches(false)

        http.delete("purches/tempItemsAll")
            .then(res=>{
                setreloadView(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    






    return (
        <div>
            <div className="w3-container mt-3">
                { !newPurches && <button onClick={NewPurches} className="btn w3-green w3-right"> +New Purches</button>}
            </div>


            {
                newPurches && (
                    <div>
                        <div className="container mt-3">
                            <button onClick={ClosePurches} className="btn w3-red w3-right"> <CloseIcon /> Close</button>
                        </div>
                        <div className="w3-container mt-1">
                            <SelectProduct SelectData={SelectData} reload={reloadView} />
                            <ProductEntry reloadMethod={Reload} selectData={selectData} SelectData={SelectData} />
                            <ViewItem reload={reloadView} Reload={Reload} />

                            <NameEntry Address={Address} />
                            <SelectPayment Payment={Payment} />

                            <InvoiceDetails InvoiceDate={InvoiceDate} InvoiceNo={InvoiceNo} />

                            <ViewPrint fromaddress={address} toaddress={NativeAddress} ref={componentRef} reload={reloadView} address={address} payment={payment} invoiceDate={MyDate(invoiceDate)} invoiceNo={invoiceNo} />


                            <div className="buttons">
                                
                                <div>
                                    <button onClick={CancelBill} className="btn w3-red">Cancel Bill</button>
                                </div>     

                                <PrintButton address={address}  payment={payment} componentRef={componentRef} invoiceDate={MyDate(invoiceDate)} invoiceNo={invoiceNo} Reload={Reload} ClosePurches={ClosePurches} />
                            </div>

                        </div>
                    </div>
                )
            }



            <ViewPurches reload={reloadView} Reload={Reload} />

        </div>
    )
}

export default Purcches
