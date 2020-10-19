import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './index.css'
import { http } from '../../axios'

function InputEntry({ Reload, updateValues, Update, update, insert, initialValues }) {

    // console.log("updateValues",updateValues)   



    const submit = (values, submitProps) => {
        // console.log("form values", values)
        http.post("address", values)
            .then(res => {
                // console.log(res.data)
                Reload(res.data._id)

            })
            .catch(err => {
                console.log(err)
            })
        submitProps.resetForm()
    }

    // const ResetForm = ()=>{
    //     setauoFill(initialValues)
    // }

    
    const validationSchema = yup.object({
        name: yup.string().required("Please Enter Name"),
        gstin: yup.string().required("Please Enter GSTIN"),
        contact: yup.number().required("Please Enter Mobile No"),
        email: yup.string().email("Invalid Email").required("Please Enter Email-Id "),
        address: yup.string().required("Please Enter Address"),
        city: yup.string().required("Please Enter City"),
        state: yup.string().required("Please Enter State"),
        country: yup.string().required("Please Enter Country"),
        pincode: yup.number().required("Please Enter Pincode")
    })
    return (
        <div className="container mt-3">
            <Formik
                initialValues={updateValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {
                    (formikProps) =>{
                        // console.log("formikProps",formikProps)
                    
                    
                    return (
                        <Form className="form" autoComplete="off">
                            <div className="form-group">
                                <Field name="name" type="text" placeholder="Enter Name Of The Company" className="form-control" />
                                <ErrorMessage name="name" />
                            </div>
                            <div className="form-group">
                                <Field name="gstin" type="text" placeholder="Company GSTIN NO" className="form-control" />
                                <ErrorMessage name="gstin" />
                            </div>
                            <div className="contactDetails">
                                <div className="form-group">
                                    <Field name="contact" type="number" placeholder="Enter Mobile No" className="form-control" />
                                    <ErrorMessage name="contact" />
                                </div>
                                <div className="form-group">
                                    <Field name="email" type="text" placeholder="Enter Email Id" className="form-control" />
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <Field name="address" type="text" placeholder="Eg : Door No, Street, Area Name" className="form-control" />
                                <ErrorMessage name="address" />
                            </div>
                            <div className="addressInput">
                                <div className="form-group">
                                    <Field name="city" type="text" placeholder="Enter City" className="form-control" />
                                    <ErrorMessage name="city" />
                                </div>
                                <div className="form-group">
                                    <Field name="state" type="text" placeholder="Enter State" className="form-control" />
                                    <ErrorMessage name="state" />
                                </div>
                                <div className="form-group">
                                    <Field name="country" type="text" placeholder="Enter Country" className="form-control" />
                                    <ErrorMessage name="country" />
                                </div>
                                <div className="form-group">
                                    <Field name="pincode" type="number" placeholder="Enter Pincode" className="form-control" />
                                    <ErrorMessage name="pincode" />
                                </div>
                            </div>
                            <div className="form-group w3-center">
                                <button className="w3-button w3-indigo mr-3" type="reset" onClick={()=>Update(initialValues,false)}>Reset</button>
                                {
                                    insert && <button className="w3-button w3-purple" type="submit">Submit</button>
                                }
                                {

                                    update && <button className="w3-button w3-purple" type="button" onClick={() => Update(initialValues, false, formikProps.values )}>Update</button>

                                }

                            </div>
                        </Form>
                    )}
                }


            </Formik>
        </div>
    )
}

export default InputEntry
