import { Outlet } from "react-router-dom"
import Nav2 from "../components/NavBar2"

const MainLayout = () => {
    return (
        <>
        <Nav2 />
        <Outlet />
        </>
    )
}

export default MainLayout