import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Footer, Menu, Carousel} from './Shared_components';
import {useState} from "react";
import Main from "./Main";
import NotFound from "./NotFound";
import Order from "./Order";
import Viking from "./Viking";
import Roman from "./Roman";
import DefaultLayout from "./DefaultLayout";
import NoNavbarLayout from "./NoNavbarLayout";
import Attractions from "./Attractions";
import Shadows from "./Nightshow";
import WorkShopCarousel from "./ParkWorkshop";
import TicketBooking from "./TicketBooking";
import Offers from "./Offers";

function App() {
    const [basket, setBasket] = useState({
        items: [
            {
                name: "Ticket",
                amount: "3",
                price: 39.99
            },
            {
                name: "Child ticket and other stuff",
                amount: "2",
                price: 19.89
            }
        ]
    })

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="attractions" element={<Attractions/>}/>
                    <Route path="shadows-of-britannia" element={<Shadows/> }/>
                    <Route path="workshop" element={<WorkShopCarousel/> }/>
                    <Route path="attractions/viking" element={<Viking/>}/>
                    <Route path="attractions/roman" element={<Roman/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/" element={<NoNavbarLayout/>}>
                    <Route path="offers" element={<Offers/>}/>
                    <Route path="order" element={<Order basket={basket} setBasket={setBasket}/>}>
                        <Route path="tickets" element={<TicketBooking/>}></Route>
                        <Route path="hotel" element={<></>}></Route>
                        <Route path="restaurant" element={<></>}></Route>
                        <Route path="summary" element={<></>}></Route>
                    </Route>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
