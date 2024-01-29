import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavItemsPublic from "./NavItemsPublic.json"

export default function PublicPageLayout() {
    return <>
        <div style={{backgroundColor: 'rgb(55, 142, 181)', height: '80px'}}>
            <Navbar items={NavItemsPublic}/>
        </div>
        <Outlet/>
        <Footer/>
    </>
}