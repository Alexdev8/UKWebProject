import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Footer, Menu} from './shared_components';
import Order from "./Order";
import Main from "./Main";
import Attractions from "./Attractions";
import NotFound from "./NotFound";
import Viking from "./Viking";
import Roman from "./Roman";
import Robinhood from "./Robinhood";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Menu/>
            <main>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/order" element={<Order/>}/>
                    <Route path="/attractions" element={<Attractions/>}/>
                    <Route path="/viking" element={<Viking/>}/>
                    <Route path="/roman" element={<Roman/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;
