import { Routes, Route } from "react-router-dom"
import Order from "./Order"
import UserComponent from "./Component/UserComponent"

function App() {
  return (
    <div className="App">
      {/* <UserComponent/> */}
      { 

      <Routes>
        <Route path="order/cart/:orderId" element={<Order />} />
      </Routes> 
    }
    </div>
  )
}

export default App