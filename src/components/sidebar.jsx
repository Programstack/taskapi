/* eslint-disable no-unused-vars */
import React from 'react'

function sidebar() {
  return <>
     <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        {/* <i className="fas fa-laugh-wink"></i> */}
    </div>
    {/* <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> */}
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <a className="nav-link" href="index.html">
        {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
        <span>Medicine</span></a>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>



{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* <i className="fas fa-fw fa-cog"></i> */}
        <span>Notes</span>
    </a>
   </li>
   <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* <i className="fas fa-fw fa-cog"></i> */}
        <span>Account Number</span>
    </a>
   </li>
   <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* <i className="fas fa-fw fa-cog"></i> */}
        <span>Patient Name</span>
    </a>
   </li>
   <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* <i className="fas fa-fw fa-cog"></i> */}
        <span>Admit</span>
    </a>
   </li>
   <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* <i className="fas fa-fw fa-cog"></i> */}
        <span>Disc Date</span>
    </a>
   </li>
   <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* <i className="fas fa-fw fa-cog"></i> */}
        <span>Patient Type</span>
    </a>
   </li>
   
   <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        {/* <i className="fas fa-fw fa-cog"></i> */}
        <span>Invoice Type</span>
    </a>
   </li>
</ul>


  </>
}

export default sidebar