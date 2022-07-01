import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import '../CSS/DashboardSidebar.css'
const DashboardSidebar = (props) => {
  return (
    
    
    
    <div style={{ display: 'flex', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor="transparent">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} style={{padding:'0px'}}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>

          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/AdminDashBoard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" style={{color:'black'}} className={props.AdminDashBoard? `active-link-sidebar`:null}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AdminVendorList" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table"  style={{color:'black'}} className={props.adminvendorlist? `active-link-sidebar`:null}>Vendor</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AdminCustomerList" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user"  style={{color:'black'}} className={props.admincustomerlist? `active-link-sidebar`:null}>Customers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AdminPromoCode" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user"  style={{color:'black'}} className={props.promocode? `active-link-sidebar`:null}>Promo Code</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AdminAccountDetails" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="user"  style={{color:'black'}} className={props.accountdetails? `active-link-sidebar`:null}>Account Detials</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AdminChangePassword" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line"  style={{color:'black'}} className={props.changepassword? `active-link-sidebar`:null}>Change Password</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default DashboardSidebar;