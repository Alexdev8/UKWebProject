import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Footer, Menu} from './shared_components';
import Order from "./Order";
import Main from "./Main";
import Attractions from "./Attractions";

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
                    <Route path="*" element={<p>Page not found</p>}/>
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;
