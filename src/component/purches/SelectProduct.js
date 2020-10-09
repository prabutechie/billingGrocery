import React,{useState, useEffect} from 'react'
import { http } from '../../axios'

function SelectProduct({SelectData}) {

    const [data,setData] = useState([])
    

    useEffect(()=>{
        http.get("product")
            .then(res=>{
                setData(res.data)
            })  
            .catch(err=>{
                console.log(err)
            })
    },[])

    const SelectProduct=(index)=>{
        // console.log("Select Product",data[index])        
        SelectData(data[index])

    }
    return (
        <div className="container mt-3">
            <form className="form">
                <div className="form-group">
                    <select onChange={(e)=>SelectProduct(e.target.value)} className="form-control">
                        <option>Select Product</option>
                        {
                            data.map((data,index)=>{
                                return(
                                    <option key={data._id} value={index}>{data.product}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SelectProduct
