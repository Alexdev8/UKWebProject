import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Footer} from './shared_components';

import DefaultLayout from "./DefaultLayout";
import NoNavbarLayout from "./NoNavbarLayout";
import Main from "./Main";
import NotFound from "./NotFound";
import Order from "./Order";
import Attractions from "./Attractions";
import Viking from "./Viking";
import Roman from "./Roman";

function App() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<DefaultLayout/>}>
                        <Route path="/" element={<Main/>}/>
                        <Route path="attractions" element={<Attractions/>}/>
                        <Route path="attractions/viking" element={<Viking/>}/>
                        <Route path="attractions/roman" element={<Roman/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                    <Route path="/" element={<NoNavbarLayout/>}>
                        <Route path="order" element={<><div></div><main><Order/></main></>}/>
                    </Route>
                </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;
