import Product from "./components/Product";
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Addproduct from "./components/Addproduct";
import Emp from "./components/Emp";

import FetchEmps from "./components/fetchapi";
function App() {
  return (
    <Router>
      <nav>
          <Link to="/"> Home</Link>
          {<Link to="/addpro"> Add Product</Link> }
      </nav>
    <div className="container">
        <Routes>
            <Route path="/" element={<Product/>}/>
            { <Route path="/addpro" element={<Addproduct/>}/> }
        </Routes>
    </div>
    </Router>
  );
}

export default App;
