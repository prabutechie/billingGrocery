const purches = require('express').Router()
const tempItem = require('../schema/purches/TempItems')
const tempPurches = require('../schema/purches/TempPurches')
const purchesSchema = require('../schema/purches/Purches')

const productSchema = require('../schema/Product')


// Purches Main

purches.post("/", async (req, res) => {

    const items = await tempItem.find()
    console.log("items", items)

    const { address, payment, invoiceNo, invoiceDate } = req.body

    var x, newAvailable, total = 0;

    const count = items.length
    var loopcount = 0

    for (x of items) {
        var available = await productSchema.findOne({ product: x.product })

        console.log("AVAILABLE", available)

        if (x.type === "g" || x.type === "ml") {
            newAvailable = available.qt + x.qt / 1000
        }

        if (x.type === "pkt" || x.type === "kg" || x.type === "l" || x.type === "nos") {
            newAvailable = available.qt + x.qt
        }

        var update = {
            $set: {
                qt: newAvailable
            }
        }
        console.log(update)
        var find = { product: x.product }
        const updateProduct = await productSchema.updateOne(find, update)

        total += x.total

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
                total: total
            }


            console.log(insert)


            const InsertData = await new purchesSchema(insert)
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

purches.get("/", async (req, res) => {
    const findData = await purchesSchema.find()
    res.status(200).send(findData)
})

purches.put("/", async (req, res) => {
    // console.log("Purches")
})

purches.delete("/", async (req, res) => {
    const { id } = req.query
    const findBill = await purchesSchema.findOne({ _id: id })

    //update Product Available

    const items = findBill.items
    var x, count = 0, length = items.length;
    // console.log(findBill, items)

    for (x of items) {
        var available = await productSchema.findOne({ product: x.product })

        if (x.type === "g" || x.type === "ml") {
            qt = x.qt / 1000
        }

        if (x.type === "pkt" || x.type === "kg" || x.type === "l" || x.type === "nos") {
            qt = x.qt
        }

        if (available.qt >= qt) {
            const newAvailable = available.qt - qt
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
        else {
            res.status(200).send("Cont't delete - Reason : Available is Low")
            break
        }

    }

    // console.log(count, length)

    if (count === length) {
        const deleteBill = await purchesSchema.deleteOne({ _id: id })
        // console.log(deleteBill)

        if (deleteBill) {
            res.status(200).send(deleteBill)
        }
    }



})



//          Temp Items


purches.post("/tempItems", async (req, res) => {
    console.log(req.body)


    const { gst, rate, type, qt, ...restBody } = req.body

    var taxableamount

    if (type === "g" || type === "ml") {
        taxableamount = rate * (qt / 1000)
    }

    if (type === "pkt" || type === "kg" || type === "l" || type === "nos") {
        taxableamount = rate * qt
    }

    // const taxableamount = rate 
    const numGst = Number(gst)
    const gstamount = taxableamount * (numGst / 100)
    const total = taxableamount + gstamount

    const insertValues = {
        gst: numGst,
        rate: rate,
        taxableamount: taxableamount,
        type: type,
        qt: qt,
        gstamount: gstamount,
        total: total,
        ...restBody
    }

    console.log(insertValues)

    const insert = await new tempItem(insertValues)
    // console.log(insert)

    await insert.save((err, doc) => {
        if (err) {
            console.log(err)
            res.status(404).send(err)
        }
        if (doc) {
            res.status(200).send(doc)
            // updateProducts()
        }
    })
})

purches.get("/tempItems", async (req, res) => {
    const get = await tempItem.find()
    res.status(200).send(get)
})

purches.put("/tempItems", async (req, res) => {

})

purches.delete("/tempItems", async (req, res) => {
    const deleteItem = await tempItem.deleteOne({ _id: req.query.id })
    res.status(200).send(deleteItem)

})

purches.delete("/tempItemsAll", async (req, res) => {
    const deleteItem = await tempItem.deleteMany()
    res.status(200).send(deleteItem)

})

//  Temp Purches
purches.post("/tempPurches", async (req, res) => {
    const { address, payment } = req.body
    const items = await tempItem.find()
    // console.log(items)

    var arr;
    var total = 0
    var gstTotal = 0
    var grandTotal = 0

    for (arr of items) {
        total += arr.total
        gstTotal += arr.gstTotal
        grandTotal += arr.grandTotal
    }

    // console.log(total, gstTotal, grandTotal)



    const insert = await new tempPurches({
        address: address,
        payment: payment,
        items: items,
        total: total,
        gstTotal: gstTotal,
        grandTotal: grandTotal
    })


    await insert.save((err, doc) => {
        if (err) {
            res.status(404).send(err)
        }
        else {
            res.status(200).send(doc)
        }
    })

})



purches.get("/tempPurches", (req, res) => {

})

purches.put("/tempPurches", (req, res) => {

})

purches.delete("/tempPurches", (req, res) => {

})



module.exports = purches