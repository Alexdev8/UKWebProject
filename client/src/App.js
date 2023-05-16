import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Footer} from './Shared_components';
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
import {SignIn, LogIn} from "./Signin";
import VintageRestaurants from "./VintageRestaurants";
import Restaurant from "./Restaurant";
import CrownHotel from "./CrownHotel";
import PrivacyPolicy from "./PrivacyPolicy";
import Account from "./Account";
import AboutUs from "./AboutUs";
import Cottage from "./Cottage";
import EmailField from "./Account";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function App() {
    const [prevLocation, setPrevLocation] = useState("/");
    const [user, setUser] = useState((!!getCookie("user")) ? {email: getCookie("user")} : null);
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
    });

    function addTickets(ticket) {
        console.log(ticket);
        const newBasket = basket;
        newBasket.items.tickets = [...newBasket.items.tickets, ticket]
        console.log(newBasket);
        setBasket(newBasket);
    }

    return (
        <BrowserRouter>
            <Header user={user} setUser={setUser} setPrevLocation={setPrevLocation} setCookie={setCookie}/>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="shadows-of-britannia" element={<Shadows/> }/>
                    <Route path="workshop" element={<WorkShopCarousel/> }/>
                    <Route path="attractions" element={<Attractions/>}/>
                    <Route path="attractions/viking" element={<Viking/>}/>
                    <Route path="attractions/roman" element={<Roman/>}/>
                    <Route path="attractions/centurywar" element={<CenturyWar/>}/>
                    <Route path="attractions/trafalgar" element={<Trafalgar/>}/>
                    <Route path="attractions/robinhood" element={<Robinhood/>}/>
                    <Route path="vintage-village" element={<VintageVillage/> }/>
                    <Route path="vintage-restaurants" element={<VintageRestaurants/> }/>
                    <Route path="restaurants" element={<Restaurant/> }/>
                    <Route path="the-grand-crown-hotel" element={<CrownHotel/>} />
                    <Route path="cottage" element={<Cottage/>} />
                    <Route path="account" element={<Account user={user}/>}/>
                    <Route path="account/signin" element={<SignIn/>}/>
                    <Route path="account/login" element={<LogIn originPath={prevLocation} user={user} setUser={setUser} setCookie={setCookie}/>} />
                    <Route path="account/my-account" element={<EmailField />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy/> }/>
                    <Route path="about" element={<AboutUs/> }/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/" element={<NoNavbarLayout/>}>
                    <Route path="offers" element={<Offers/>}/>
                    <Route path="order" element={<Order basket={basket} setBasket={setBasket} addTickets={addTickets}/>}>
                        <Route path="tickets" element={<TicketBooking/>} />
                        <Route path="summary" element={<OrderSummary/>}></Route>
                    </Route>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
