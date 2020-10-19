import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { http } from '../../axios'
import * as yup from 'yup'

function ProductEntry({reloadMethod, selectData, SelectData}) {  
   

    const initialValues = {
        product: "",
        hsnno: "",
        rate: "",
        qt: "",
        type: ""        
       
    }      
    
    const submit = (values, props) => {       
        console.log(values)
        http.post("purches/tempItems", values)
            .then(res => {                           
                reloadMethod(res.data._id)            
            })
            .catch(err => {
                console.log(err)
            })   
        SelectData(initialValues) 
    }  

    const ResetData =()=>{
        SelectData(initialValues)
        reloadMethod(initialValues)
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
                initialValues={ selectData || initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <Form autoComplete="off"> 
                    {/* <div className="row">   
                        <div className="col-4">                            
                            <Field name="hsnno" type="number" className="form-control" placeholder="HSNNO" />
                            <ErrorMessage name="hsnno" />
                        </div>   
                        <div className=" col-4 form-group">                            
                            <Field name="mrp" type="number" className="form-control" placeholder="MRP" />
                            <ErrorMessage name="mrp" />
                        </div> 
                        <div className=" col-4 form-group">                            
                            <Field name="gst" type="number" className="form-control" placeholder="GST" />
                            <ErrorMessage name="gst" />
                        </div>                       
                    </div> */}
                    <div className="row">
                        
                        <div className=" col-4 form-group">                            
                            <Field name="qt" type="number" className="form-control" placeholder="Quantity" />
                            <ErrorMessage name="qt" />
                        </div>                        
                        <div className="form-group col-4">
                            <Field disabled as="select" name="type" className="form-control">
                                <option value="">Select Type</option>
                                <option value="pkt">pkt</option>
                                <option value="g">grams</option>
                                <option value="kg">Kilo grams</option>
                                <option value="ml">milli liter</option>
                                <option value="l">liter</option>
                                <option value="nos">Nos</option>
                            </Field>
                            <ErrorMessage name="qt" />
                        </div>
                        <div className=" col-4 form-group">
                            <Field name="rate" type="number" className="form-control" placeholder="Amount" />
                            <ErrorMessage name="rate" />
                        </div>
                        
                    </div>
                    <div className="w3-container w3-center">
                        <button type="reset" className="btn w3-deep-orange mr-3" onClick={ResetData}>Reset</button>
                        <button type="submit" className="btn w3-deep-orange">Add</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ProductEntry


// if(selectData){
    //     setautoFill(selectData)
    // }

    // const [status,setStatus] = useState(false)
    // const [products,setProducts] = useState([])   


    // const searchItem = (product)=> {       
    //     setStatus(false)
    //     http.get("product/searchProduct",{params:{product:product}})
    //     .then(res=>{            
    //         setProducts(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }

    // const statusAutoFill = (status,item) =>{       
    //     if(status){
    //         setautoFill({
    //             ...item,
    //             qt:"",
    //             rate:""
    //         })    
    //         setStatus(status)         
    //     }
    // }

    /* {
                                    (props)=> {
                                        console.log("form",props)                                        
                                        // const {field} = props
                                        // const {value} = field
                                        return(
                                            <select>
                                                {
                                                    products.map((data,index)=>(
                                                        <option key={data._id} value={index}>{data.product}</option>
                                                    ))
                                                }
                                            </select>
                                        )
                                                                       
                                        // return(
                                        //     <input                                               
                                        //         id="product"                                                                                             
                                        //         className="form-control" 
                                        //         placeholder="Enter Product Details" 
                                        //         {...field}
                                        //         onKeyPress={()=>searchItem(value)}                                                  
                                        //     /> 
                                        // )                                       
                                    }
                                } */

                                /* {
                                !status && <SearchItem items={products} statusAutoFill={statusAutoFill} />
                            } */
