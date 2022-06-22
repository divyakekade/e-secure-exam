import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import {ReactComponent as MenuIcon} from "../Icons/menu-icon.svg";
import {ReactComponent as LogoutIcon} from "../Icons/logout-icon.svg";
import {ReactComponent as ProfileIcon} from "../Icons/profile-icon.svg";
import SidebarStudent from "./SidebarStudent";
import SidebarFaculty from "./SidebarFaculty";
// import SidebarFaculty from "./SidebarFaculty";
// import {ReactComponent as DropdownIcon} from "../Icons/dropdown-icon.svg";
export default function Navbar2({role}){
    const [sidebar, setSidebar]=React.useState(false)
    function showSidebar(){
        setSidebar((prevState)=>!prevState)
    }
    function displaySidebar(){
        if(sidebar===true){
        if(role==="Student") {
            return <SidebarStudent role={role}/>}
        else{
            return <SidebarFaculty role={role}/>}
    }}
    return(
        <>
        <nav className="navbar2">
            <MenuIcon className="menu-icon" onClick={showSidebar}/>
            <div className="right-part">
            <ProfileIcon className="profile-icon"/>
            {/* <h4>Welcome</h4> */}
            <h4>user_name</h4>
            <Link to="/"><LogoutIcon className="logout-icon"/></Link>
            {/* <DropdownIcon className="dropdown-icon"/> */}
            </div>
        </nav>
        {displaySidebar()}
        </>
    )
}