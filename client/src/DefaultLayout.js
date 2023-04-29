import {Menu} from "./shared_components";
import {Outlet} from "react-router-dom";

function DefaultLayout() {
    //The default page layout with a navbar
    return(
        <>
            <Menu/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default DefaultLayout;