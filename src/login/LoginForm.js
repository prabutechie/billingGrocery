import React from 'react'
import {Formik, Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import './index.css'

function LoginForm({checkLogin}) {

    const initialValues = {
        username:"",
        password:""
    }

    const submit = (values)=>{
        // console.log(values)
        checkLogin(values)
    }

    const validationSchema =  yup.object({
        username: yup.string().required("Please Enter Username"),
        password: yup.string().required("Please Enter Password")
    })


    return (
        <div className="w3-center mt-3">
            <Formik 
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form autocomplete="off" className="loginform w3-center">
                    <div className="form-group w3-center">
                        <Field name="username" type="text" className="form-control" placeholder="Username" />
                        <ErrorMessage name="username" />
                    </div>

                    <div className="form-group">
                        <Field name="password" type="password" className="form-control" placeholder="Password" />
                        <ErrorMessage name="password" />
                    </div>

                    <div>
                        <button className="btn btn-success">Login</button>
                    </div>

                </Form>

            </Formik>
        </div>
    )
}

export default LoginForm
