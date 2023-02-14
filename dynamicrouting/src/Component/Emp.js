import React from 'react'

import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

const EmpApp = () => {
        
    return(

        < BrowserRouter>
            <Link to="/" >HomePage</Link>
            <Link to="/showemp" >ViewEmployees</Link>
           
            <Routes>
                <Route path="/" exact="true" element={<MyHome />} />

                <Route path="/showemp" exact="true" element={<ShowEmpData />} />

                <Route path="*"  element={<Page404 />} />

            </Routes>
   
   </BrowserRouter>

    )
}

function MyHome() {
  return (
    <div>
            <h3 style={{"color":"blue",padding:50}}>This is HomePage</h3>

    </div>
  )
}

function ShowEmpData() {
    return (
      <div>
              <h3 style={{"color":"red",padding:30}}>This is view all emps data</h3>
  
      </div>
    )
  }

  
  function Page404() {
    return (
      <div>
        <h3 style={{color:"grey"}}>PageNotFound</h3>
      </div>
    )
  }
  






export default EmpApp