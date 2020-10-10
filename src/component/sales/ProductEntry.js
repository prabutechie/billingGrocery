import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { http } from '../../axios'
import * as yup from 'yup'

function ProductEntry({ reloadMethod, selectData, SelectData }) {
    console.log("selectData", selectData)


    const initialValues = {
        product: "",
        hsnno: "",
        rate: "",
        qt: "",
        type: ""

    }

    const submit = (values, props) => {


        http.post("purches/tempItems", values)
            .then(res => {
                reloadMethod(res.data._id)
            })
            .catch(err => {
                console.log(err)
            })
        SelectData(initialValues)
    }



    const validationSchema = yup.object({
        product: yup.string().required("Please Enter Product Name"),
        hsnno: yup.number().required("Please Enter  HSNNO"),
        qt: yup.number().required("Please Enter Quantity"),
        rate: yup.number().required("Please Enter Rate"),
        type: yup.string().required("Please Enter  Type")

    })
    return (
        <div className="w3-container mt-3">
            <Formik
                initialValues={selectData || initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <Form autoComplete="off">
                    <div className="row">
                        <div className=" col-4 form-group">
                            <Field name="qt" type="number" className="form-control" placeholder="Quantity" />
                            <ErrorMessage name="qt" />
                        </div>
                        <div className="form-group col-4">
                            <Field as="select" name="type" className="form-control">
                                <option value="">Select Type</option>
                                <option value="pkt">pkt</option>
                                <option value="g">grams</option>
                                <option value="kg">Kilo grams</option>
                                <option value="ml">milli liter</option>
                                <option value="l">liter</option>
                            </Field>
                            <ErrorMessage name="qt" />
                        </div>
                        <div className=" col-4 form-group">
                            <Field disabled name="rate" type="number" className="form-control" placeholder="Amount" />                                      
                            <ErrorMessage name="rate" />
                        </div>

                    </div>
                    <div className="w3-container w3-center">
                        <button type="reset" className="btn w3-deep-orange mr-3" onClick={() => SelectData(initialValues)}>Reset</button>
                        <button type="submit" className="btn w3-deep-orange">Add</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ProductEntry

