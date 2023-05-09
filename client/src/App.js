import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Footer, Menu, Carousel} from './Shared_components';
import {useState} from "react";
import Main from "./Main";
import NotFound from "./NotFound";
import Order from "./Order";
import OrderSummary from "./OrderSummary";
import Viking from "./Viking";
import Roman from "./Roman";
import Robinhood from "./Robinhood";
import CenturyWar from "./CenturyWar";
import Trafalgar from "./Trafalgar";
import DefaultLayout from "./DefaultLayout";
import NoNavbarLayout from "./NoNavbarLayout";
import Attractions from "./Attractions";
import Shadows from "./Nightshow";
import TicketBooking from "./TicketBooking";
import Offers from "./Offers";
import WorkShopCarousel from "./ParkWorkshop";
import VintageVillage from "./VintageVillage";
import {SignIn} from "./Shared_components";
import CreateAccount from "./register/LogIn";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
    const [basket, setBasket] = useState({
        items: {
            tickets: [
            ],
            hotel: [
            ],
            restaurant: [
            ],
            options: [
            ]
        }
    })

    function addTickets(ticket) {
        console.log(ticket);
        const newBasket = basket;
        newBasket.items.tickets = [...newBasket.items.tickets, ticket]
        console.log(newBasket);
        setBasket(newBasket);
    }

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
                    <Route path="attractions/centurywar" element={<CenturyWar/>}/>
                    <Route path="attractions/trafalgar" element={<Trafalgar/>}/>
                    <Route path="attractions/robinhood" element={<Robinhood/>}/>
                    <Route path="vintage-village" element={<VintageVillage/> }/>
                    <Route path="create-account" element={<CreateAccount/> }/>
                    <Route path="privacy-policy" element={<PrivacyPolicy/> }/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/" element={<NoNavbarLayout/>}>
                    <Route path="offers" element={<Offers/>}/>
                    <Route path="order" element={<Order basket={basket} setBasket={setBasket} addTickets={addTickets}/>}>
                        <Route path="tickets" element={<TicketBooking/>}></Route>
                        <Route path="hotel" element={<></>}></Route>
                        <Route path="restaurant" element={<></>}></Route>
                        <Route path="summary" element={<OrderSummary/>}></Route>
                    </Route>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
