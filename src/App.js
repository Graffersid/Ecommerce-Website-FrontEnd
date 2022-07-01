
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
import AccountDetails from './Vendor/AccountDetails';
import ChangePassword from './Vendor/ChangePassword';
import AdminDashBoard from './Admin/AdminDashBoard'
import AdminVendorList from './Admin/AdminVendorList'
import AdminIndividualVendorList from './Admin/AdminIndividualVendorList';
import IndividualStore from './Vendor/IndividualStore';
import AdminCustomerList from './Admin/AdminCustomerList'
import AdminPromoCode from './Admin/AdminPromoCode';
import PromoCodeList from './Admin/PromoCodeList';
import AdminAccountDetails from './Admin/AdminAccountDetails';
import AdminChangePassword from './Admin/AdminChangePassword';
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
          <Route path="DashboardVendor/:StoreId" element={<IndividualStore/>} />  
          <Route path="/VendorOrders" element={<Order/>} ></Route> 
          <Route path="VendorOrders/:orderId" element={<OrderDetails/>}/> 
          <Route path="/DashboardAddStore" element={<AddStore/>} /> 
          <Route path="/VendorAddProduct" element={<AddProduct/>} /> 
                 
          <Route path="/VendorAccountDetails" element={<AccountDetails/>} /> 
          <Route path="/Vendorchangepassword" element={<ChangePassword/>} /> 
          <Route path="/AdminDashBoard" element={<AdminDashBoard/>} /> 
          <Route path="/AdminVendorList" element={<AdminVendorList/>} /> 
          <Route path="AdminVendorList/:VendorId" element={<AdminIndividualVendorList/>} />  
          <Route path="/AdminCustomerList" element={<AdminCustomerList/>} />  
          <Route path="/AdminPromoCode" element={<AdminPromoCode/>} /> 
          <Route path="/AdminPromoCodeList" element={<PromoCodeList/>} /> 
          <Route path="/AdminAccountDetails" element={<AdminAccountDetails/>} /> 
          <Route path="/AdminChangePassword" element={<AdminChangePassword/>} /> 
    </Routes>

    </div>
  );
}

export default App;
