const sales = require('express').Router()
const salesSchema = require('../schema/sales/Sales')
const tempItem = require('../schema/purches/TempItems')
const productSchema = require('../schema/Product')


sales.get("/", async (req, res) => {
    const findSales = await salesSchema.find()
    res.send(findSales)
})

sales.post("/", async (req, res) => {
    const items = await tempItem.find()

    const { address, payment, invoiceNo, invoiceDate } = req.body

    var x;
    var total = 0, gstTotal = 0, grandTotal = 0;
    const count = items.length
    var loopcount = 0

    for (x of items) {
        var available = await productSchema.findOne({ product: x.product })
        const newAvailable = available.qt - x.qt
        var update = {
            $set: {
                qt: newAvailable
            }
        }
        var find = { product: x.product }
        const updateProduct = await productSchema.updateOne(find, update)

        total += x.total
        gstTotal += x.gstTotal
        grandTotal += x.grandTotal

        loopcount += 1

    }

    // console.log(loopcount, count)


    if (count > 0) {
        if (loopcount === count) {
            const insert = {
                address: address,
                invoicedate: invoiceDate,
                invoiceno: invoiceNo,
                payment: payment,
                items: items,
                Total: total,
                gstTotal: gstTotal,
                grandTotal: grandTotal
            }


            // console.log(insert)


            const InsertData = await new salesSchema(insert)
            await InsertData.save(async (err, doc) => {
                if (err) {
                    res.status(404).send(err)
                }
                if (res) {
                    res.status(200).send(doc)
                    await tempItem.deleteMany({})
                }
            })

        }
    }



})

sales.delete("/", async (req, res) => {
    const { id } = req.query
    const findBill = await salesSchema.findOne({ _id: id })

    //update Product Available

    const items = findBill.items
    var x, count = 0, length = items.length;
    // console.log(findBill, items)

    for (x of items) {
        var available = await productSchema.findOne({ product: x.product })

        const newAvailable = available.qt + x.qt
        var update = {
            $set: {
                qt: newAvailable
            }
        }
        var find = { product: x.product }
        const updateProduct = await productSchema.updateOne(find, update)
        // console.log(update)
        count += 1


    }

    // console.log(count, length)

    if (count === length) {
        const deleteBill = await salesSchema.deleteOne({ _id: id })
        // console.log(deleteBill)

        if (deleteBill) {
            res.status(200).send(deleteBill)
        }
    }



})


module.exports = sales