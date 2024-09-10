import { Outlet } from "react-router-dom"
import NavbarUser from "../components/NavBarUser"


const MainLayout = () => {
    return (
        <>
        <NavbarUser />
        <Outlet />
        </>
    )
}

export default MainLayout