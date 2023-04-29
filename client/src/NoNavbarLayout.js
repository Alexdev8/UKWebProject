import {Outlet} from "react-router-dom";

function NoNavbarLayout() {
    //A page layout without navbar
    return(
        <>
            <div/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default NoNavbarLayout;