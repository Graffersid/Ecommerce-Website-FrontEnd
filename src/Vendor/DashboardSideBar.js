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
            <NavLink exact to="/DashboardVendor" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" style={{color:'black'}} className={props.dashboard? `active-link-sidebar`:null}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/DashboardOrder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table"  style={{color:'black'}} className={props.order? `active-link-sidebar`:null}>Order</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/DashboardAddStore" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user"  style={{color:'black'}} className={props.addstore? `active-link-sidebar`:null}>Add Store</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user"  style={{color:'black'}}>Account Detials</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line"  style={{color:'black'}}>Change Password</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
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