
import './HomePage.css';
import Home from './components/Home';
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import ProductPage from './components/ProductPage';
import Products from './components/Products';
import Dashboard from './Vendor/Dashboard';
import Order from './Vendor/Order';
import AddStore from './Vendor/AddStore'
import OrderDetails from './Vendor/OrderDetails';
import AddProduct from './Vendor/AddProduct';

function App() {
  return (
    <div className="App">
 
    <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path="/products" element={<Products/>}> </Route>
          <Route path="products/:productId" element={<ProductPage/>}/>  
          <Route path="/DashboardVendor" element={<Dashboard/>} /> 
          <Route path="/VendorOrders" element={<Order/>} ></Route> 
          <Route path="VendorOrders/:orderId" element={<OrderDetails/>}/> 
          <Route path="/DashboardAddStore" element={<AddStore/>} /> 
          <Route path="/VendorAddProduct" element={<AddProduct/>} /> 
    </Routes>

    </div>
  );
}

export default App;
