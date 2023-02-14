import React,{useState} from 'react'
import { addProduct } from '../service/ProductService';
import {useNavigate} from 'react-router-dom'
export default function Addproduct() {
    const [state,setState]=useState({name:'',price:''});
    const navigate=useNavigate();
    const handler=(event)=>{
         const {name,value}=event.target;
         setState({...state,[name]:value})
    }
    const postData=(event)=>{
        event.preventDefault();
        addProduct(state)
        .then(res=>{
             if(res.data){
                alert("Product Added");
                navigate("/")
             }
        })
    }
  return (
    <div>
        <h2>Add Product</h2>
        <form onSubmit={postData}>
            <div className='form-group'>
                <label> Name</label>
                <input type="text" name="name" onChange={handler} className="form-control"/>
            </div>
            <div className='form-group'>
                <label> Price</label>
                <input type="number" name="price" onChange={handler} className="form-control"/>
            </div>
            <input type="submit" value="Add" className='btn  btn-success'/>
        </form>
    </div>
  )
}
