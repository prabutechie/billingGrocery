
import './index.css'
import Address from './Address'
import Invoice from './Invoice'
import Products from './Products'
import Items from './Items'



import React, { Component } from 'react'



export class ViewPrint extends Component {
    render() {
        return (
            <div>
                <div className="taddress">
                    <Address address={this.props.fromaddress} />
                </div>
                <hr />
                <div className="tinvoice">
                    <Invoice payment={this.props.payment} invoiceNo={this.props.invoiceNo} invoiceDate={this.props.invoiceDate} />
                </div>
                <hr />
                <div className="tproducts">
                    {
                        this.props.items ? (<Items items={this.props.items} />) : (<Products reload={this.props.reload} />)
                    }

                </div>
            </div>

        )
    }
}

export default ViewPrint

