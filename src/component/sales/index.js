import React, { useState, useRef } from 'react'
import ProductEntry from './ProductEntry'
import ViewItem from './ViewItem'
import NameEntry from './NameEntry'
import SelectProduct from './SelectProduct'
import SelectPayment from './SelectPayment'

import ViewSales from './ViewSales'

import CloseIcon from '@material-ui/icons/Close'

import PrintButton from './PrintButton'

import ViewPrint from '../printbill/ViewPrint'
import { http } from '../../axios'
import { NativeAddress } from '../../default/NativeAddress'

import {MyDate} from '../../mycode/MyDate'

function Sales() {

    const [reloadView, setreloadView] = useState(1)
    const [selectData, setselectData] = useState()


    const [address, setAddress] = useState()
    const [payment, setPayment] = useState()
    const [invoiceNo,setinvoiceNo] = useState()
    

    const [newSales, setnewSales] = useState(false)

    console.log("payment", payment)
    console.log("address", address)

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

   

    const NewSales = () => {
        setnewSales(true)
    }

    const CloseSales = () => {
        setnewSales(false)
    }

    const CancelBill =()=>{
        setAddress()
        setPayment()        
        setnewSales(false)

        http.delete("purches/tempItemsAll")
            .then(res=>{
                setreloadView(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const Invoice = (no) =>{        
        if(no === 0){
            setinvoiceNo(`SPE/20-21/000${no + 1}`)
        }
        if(no > 0  && no < 9 ){
            setinvoiceNo(`SPE/20-21/000${no+1}`)
        }
        if(no > 9 && no < 99){
            setinvoiceNo(`SPE/20-21/00${no+1}`)
        }
        if(no > 99 && no < 999 ){
            setinvoiceNo(`SPE/20-21/0${no+1}`)
        }
        if(no >999 && no < 9999){
            setinvoiceNo(`SPE/20-21/${no+1}`)
        }
        
    }

    






    return (
        <div>
            <div className="w3-container mt-3">
                { !newSales && <button onClick={NewSales} className="btn w3-indigo w3-right"> +New Sales</button>}
            </div>


            {
                newSales && (
                    <div>
                        <div className="container mt-3">
                            <button onClick={CloseSales} className="btn w3-red w3-right"> <CloseIcon /> Close</button>
                        </div>
                        <div className="w3-container mt-1">
                            <SelectProduct SelectData={SelectData} />
                            <ProductEntry reloadMethod={Reload} selectData={selectData} SelectData={SelectData} />
                            <ViewItem reload={reloadView} Reload={Reload} />

                            <NameEntry Address={Address} />
                            <SelectPayment Payment={Payment} />
                            

                            <ViewPrint fromaddress={NativeAddress} toaddress={address} ref={componentRef} reload={reloadView} address={address} payment={payment} invoiceNo={invoiceNo} invoiceDate={MyDate(Date.now())} />


                            <div className="buttons">
                                
                                <div>
                                    <button onClick={CancelBill} className="btn w3-red">Cancel Bill</button>
                                </div>     

                                <PrintButton address={address}  payment={payment} invoiceDate={MyDate(Date.now())} invoiceNo={invoiceNo} componentRef={componentRef}  Reload={Reload} CloseSales={CloseSales} />
                            </div>

                        </div>
                    </div>
                )
            }



            <ViewSales reload={reloadView} Invoice={Invoice} Reload={Reload} />

        </div>
    )
}

export default Sales
