import React, { useState,useEffect } from 'react'
import { getAllEmps,deleteEmp } from '../service/EmpService';
function Emp() {
    const [EmpData, setEmpData] = useState([]);


    

    useEffect(() => {
        getAllEmps().then(
            res => {
                console.log(res.data);
                setEmpData(res.data);
            }
        )
    },[])

    const deleteEmpp=(id)=>{
        if(window.confirm("Do u want to delete?"))
        {
            deleteEmp(id)
           .then(res=>{
              if(res.data){
                   alert("record deleted");
                   let data=EmpData.filter(e=> e.id!=id);
                   setEmpData(data)
              }
           })
        }
      }

    return (

        <div>
            <h2> All employees detail</h2>
            <div className='row'>
                {EmpData.map(e =>
                    <div key={e.id} className="col-sm-4">
                        <div class="card" style={{ width: '18rem' }}>

                            <div class="card-body">
                                <h5 class="card-title">{e.name}</h5>

                                <button class="btn btn-danger" onClick={() => deleteEmpp(e.id)}>Delete</button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Emp

