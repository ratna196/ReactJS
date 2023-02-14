import React,{useState,useEffect} from 'react'
import { getAllProducts,deleteProduct } from '../service/ProductService';
export default function Product() {
    const [proData,setProData]=useState([]);
    useEffect(()=>{
       getAllProducts()
       .then(res=>{
          console.log(res.data)
          setProData(res.data)
       })
    },[])
    const delpro=(id)=>{
      if(window.confirm("Do u want to delete?"))
      {
         deleteProduct(id)
         .then(res=>{
            if(res.data){
                 alert("Product Deleted");
                 let data=proData.filter(pro=> pro.id!=id);
                 setProData(data)
            }
         })
      }
    }
  return (
    <div>
        <h2> Latest Product</h2>
        <div className='row'>
             {proData?.map(pro=>
                <div key={pro.id} className="col-sm-4">
                     <div class="card" style={{width: '18rem'}}>
  
  <div class="card-body">
    <h5 class="card-title">{pro.name}</h5>
    <p class="card-text">{pro.price}</p>
    <button class="btn btn-danger" onClick={()=> delpro(pro.id)}>Delete</button>
  </div>
</div>
                </div>)}
        </div>
    </div>
  )
}
