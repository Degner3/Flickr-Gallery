import { Outlet } from "react-router-dom"
import style from "./MainLayout.module.scss"
import { Nav } from "../Components/Navigation/nav"
import { Footer } from "../Components/Footer/Footer"





export const MainLayout = () => {


    return (
        <main className={style.layout}>
            <Nav/>
                <Outlet/>
            <Footer/>
        </main>
    )
    
}