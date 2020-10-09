// import React from 'react'
// import { toWords } from './NumberToWord';

import './index.css'
import Address from './Address'
import Invoice from './Invoice'
import Products from './Products'
import Items from './Items'

// function ViewPrint({ address, payment, reload }) {

//     const words = toWords(1)
//     console.log(words)

//     return (
//         <div>
//             <p className="w3-center">TAX INVOICE</p>

//             <div className="viewprint">
//                 <div className="top">
//                     <div className="address">
//                         <FromAddress />
//                         <ToAddress address={address} />
//                     </div>

//                     <div className="invoice">
//                         <Invoice payment={payment} />
//                     </div>
//                 </div>

//                 <div className="products">
//                     <Products reload={reload} />
//                 </div>

//                 <div>
//                     {
//                         words
//                     }
//                 </div>

//             </div>

//             <p className="w3-center">This is Computer Generated Invoice</p>
//         </div>
//     )
// }

// export default ViewPrint

import React, { Component } from 'react'


export class ViewPrint extends Component {    
    render() {
        return (
            <div className="mt-2">
                <p className="w3-center mt-3">TAX INVOICE</p>

                <div className="viewprint">
                    <div className="top">
                        <div className="address">
                            <Address address={this.props.fromaddress} />                            
                        </div>

                        <div className="invoice">
                            <Invoice payment={this.props.payment} invoiceNo={this.props.invoiceNo} invoiceDate={this.props.invoiceDate} />
                        </div>
                    </div>

                    <div className="products">
                        {
                            this.props.items ? (<Items items = {this.props.items} />):(<Products reload={this.props.reload} />)
                        }
                        
                    </div>

                </div>

                <p className="w3-center">This is Computer Generated Invoice</p>
            </div>
        )
    }
}

export default ViewPrint

