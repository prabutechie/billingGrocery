import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './index.css'
import { http } from '../../axios'

function StockInput({ Reload, insert, update, Update, formValues, initialValues }) {


    const submit = async (values, submitProps) => {

        console.log("values", values)
        http.post("product", values)
            .then(res => {
                // console.log(res.data)
                Reload(res.data)
                Update(initialValues, false)
            })
            .catch(err => {
                console.log(err)
            })
        submitProps.resetForm()

    }

    const validationSchema = yup.object({
        product: yup.string().required("Enter Product Name"),
        hsnno: yup.number().required("Enter HSNNO"),
        type: yup.string().required("Enter Type"),
        gst: yup.number().required("Enter Product GST")
    })

    return (
        <div className="container mt-3">
            <Formik
                initialValues={formValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {
                    formikProps => (
                        <Form autoComplete="off">

                            <div className="form-group">
                                <Field name="product" type="text" className="form-control" placeholder="Enter Product Name" />
                                <ErrorMessage name="product" />
                            </div>

                            <div className="inputRow">
                                <div className="form-group">
                                    <Field name="hsnno" type="number" className="form-control" placeholder="Enter HSNNO" />
                                    <ErrorMessage name="hsnno" />
                                </div>
                                <div className="form-group">
                                    <Field name="rate" type="number" className="form-control" placeholder="Enter Rate" />
                                    <ErrorMessage name="rate" />
                                </div>

                                <div className="form-group">                                    
                                    <Field as="select" name="gst" type="number" className="form-control">
                                        <option value="">Select Gst</option>
                                        <option value="0">0%</option>
                                        <option value="5">5%</option>
                                        <option value="12">12%</option>
                                        <option value="18">18%</option>
                                        <option value="28">28%</option>
                                    </Field>

                                    <ErrorMessage name="gst" />
                                </div>


                                <div className="form-group">
                                    <Field disabled name="qt" type="number" className="form-control" placeholder="Enter Quantity" />
                                    <ErrorMessage name="qt" />
                                </div>

                                <div className="form-group">
                                    <Field as="select" name="type" className="form-control">
                                        <option value="">Select Type</option>
                                        <option value="pkt">pkt</option>
                                        <option value="kg">Kg</option>
                                        <option value="l">Litre</option>
                                        <option value="nos">Nos</option>
                                    </Field>
                                    <ErrorMessage name="type" />
                                </div>

                            </div>

                            <div className="w3-center">
                                <button className="w3-button w3-blue mr-3" type="reset" onClick={() => Update(initialValues, false)} >Reset</button>
                                {insert && <button className="w3-button w3-blue" type="submit" >Insert</button>}
                                {update && <button className="w3-button w3-blue" type="button" onClick={() => Update(initialValues, false, formikProps.values)}>Update</button>}
                            </div>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default StockInput
