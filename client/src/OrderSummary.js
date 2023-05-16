import Basket from "./Basket";
import {subTotal} from "./Basket";
import {useNavigate, useOutletContext} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

function Package(props) {
    return (
        <div className="option-park">
            <label>
                Rent a stroller (£15)
                <input type="checkbox"/>
            </label>
            <label>
                Book a parking spot (£10)
                <input type="checkbox"/>
            </label>
            <label>
                Book a locker (£5)
                <input type="checkbox"/>
            </label>

        </div>
    )
}

function PackagesList(props) {
    return (
        <div>
            <Package/>
        </div>
    )
}

function BookHotel(){
    return(
        <div className="booking-hotel-container">
            <h3 className="booking-hotel-title">Book your night in the park </h3>
            <label>
                Choose your room in the Grand Crown Hotel:
                <select name="hotel-room" id="hotel-room">
                    <option value="Choose your room">Choose your room</option>
                    <option value="The Tudor Suite">The Tudor Suite</option>
                    <option value="The Crown Jewel">The Crown Jewel</option>
                    <option value="The Windsor Room">The Windsor Room</option>
                    <option value="The Rose Garden View">The Rose Garden View</option>
                </select>
            </label>
        </div>
    )
}

function UserDetails(props) {
    let ticketList = [];
    const emailInput = useRef(null);
    const form = useRef(null);
    console.log(props.basket);
    ticketList = [];
    for (let adultTicket of props.basket.tickets.adult) {
        for (let i = 0; i < adultTicket.count; i++) {
            ticketList.push({id: i, visitor: "adult", ticketType: adultTicket.ticketType, ticketEndDate: adultTicket.ticketEndDate, ticketStartDate: adultTicket.ticketStartDate, ticketOptions: adultTicket.ticketOptions})
        }
    }
    for (let childTicket of props.basket.tickets.child) {
        for (let i = 0; i < childTicket.count; i++) {
            ticketList.push({id: i, visitor: "child", ticketType: childTicket.ticketType, ticketEndDate:childTicket.ticketEndDate, ticketStartDate: childTicket.ticketStartDate, ticketOptions: childTicket.ticketOptions})
        }
    }

    function checkName(name) {
        if (!/^[A-Za-z]+$/.test(name.trim())) {
            console.log("error: invalid name");
            return false;
        }
        return true;
    }

    function verifyInputs() {
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.current["email"].value.trim()))) {
            console.log("error: invalid email");
            form.current["email"].focus();
            return false;
        }
        for (let i = 0; i < ticketList.length; i++) {
            if (!checkName(form.current["visitorFirstName" + ticketList[i].visitor + ticketList[i].id].value.trim())
                || !checkName(form.current["visitorLastName" + ticketList[i].visitor + ticketList[i].id].value.trim())
            ) {
                return false;
            }
        }
        return true;
    }

    function buyBasket(e) {
        e.preventDefault();
        if (verifyInputs()) {
            let refs = [];
            for (let ticket of ticketList) {
                axios({
                    method: 'post',
                    url: '/api/tickets',
                    data: {
                        ticketStartDate: ticket.ticketStartDate,
                        ticketEndDate: ticket.ticketEndDate,
                        ticketType: ticket.ticketType,
                        visitorAge: ticket.visitor,
                        visitorFirstName: form.current["visitorFirstName" + ticket.visitor + ticket.id].value.trim(),
                        visitorLastName: form.current["visitorLastName" + ticket.visitor + ticket.id].value.trim(),
                        connected: props.user !== null,
                        email: form.current["email"].value.trim(),
                        price: subTotal(ticket, 1, ticket.visitor === "child")
                    },
                    timeout: 4000 // 4 seconds timeout
                })
                    .then(response => {
                        console.log(response);
                        if (response.status === 200 && response.statusText === "OK") {
                            refs.push(response.data);
                            if (refs.length === ticketList.length) {
                                props.setTicketsRefs(refs);
                                props.setState(2);
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        if (error.response.status === 404) {
                            console.error(error.response.data);
                            alert("The buying has failed");
                        }
                        else {
                            alert("The buying has failed");
                            console.error('error: ', error);
                        }
                    });
            }
        }
    }

    useEffect(() => {
        if (props.user !== null) {
            emailInput.current.value = props.user.email;
        }
    }, [])

    return (
        <div className={((!props.shown) ? "hidden " : "") + "content-section"}>
            <h1>Please give us some informations</h1>
            <div className="user-details">
                <form name="userDetails" className="personnel-data-ticket" ref={form}>
                    <div className="ticket-email">
                        <label>
                            Email
                            <input type="email" name="email" ref={emailInput} placeholder="Enter your email ..." className="data-selector" autoComplete="off"/>
                        </label>
                    </div>
                    <div className="name-ticket">
                        {
                            ticketList.map((ticket) => (
                                <div className="name-each-ticket">
                                    {ticket.visitor + " " + (ticket.id + 1) + " " + ticket.ticketType}
                                    <label>
                                        <input type="text" name={"visitorFirstName" + ticket.visitor + ticket.id} placeholder={"Visitor first name"} className="data-selector" aria-required={true}/>
                                    </label>
                                    <label>
                                        <input type="text" name={"visitorLastName" + ticket.visitor + ticket.id} placeholder={"Visitor last name"} className="data-selector" aria-required={true}/>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </form>
                <div>
                    <Basket items={props.basket} setBasket={props.setBasket} setCookie={props.setCookie}/>
                    <button className="button" onClick={(e) => buyBasket(e)}>Buy</button>
                </div>
            </div>
        </div>
    );
}

function OrderConfirmation(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.ticketRefs.length !== 0) {
            console.log("change");
            props.setBasket({items: {tickets: {adult: [],child: []},hotel: [],restaurant: [],options: []}});
            props.setCookie("basket", "", -1);
        }
    }, [props.ticketRefs]);

    return (
        <div className={((!props.shown) ? "hidden " : "") + "content-section"}>
            <h1>Thank you for your order</h1>
            <h2>See you soon at RoseCrown®</h2>
            <div>
                Your should receive an email with your tickets soon
            </div>
            Your tickets references:
            {props.ticketRefs.map((ref) => (
                <p>{ref}</p>
            ))}
            {(props.user !== null) ?
                <button className="button" onClick={() => navigate("../../account", {replace: true})}>See my tickets</button>
                :
                <></>
            }
            <button className="button" onClick={() => navigate("/", {replace: true})}>Return to menu</button>
        </div>
    )
}

function OrderSummary() {
    let props = useOutletContext();
    const [userSummaryState, setUserSummaryState] = useState(0);
    const [ticketsRefs, setTicketsRefs] = useState([]);
    const navigate = useNavigate();

    if (userSummaryState === 0 && props.basket.items.tickets.adult.length === 0 && props.basket.items.tickets.child.length === 0) {
        if (props.getCookie("basket") !== "") {
            props.setBasket(JSON.parse(props.getCookie("basket")));
            // props = {...props, basket: JSON.parse(props.getCookie("basket"))}
        }
        else {
            navigate("../tickets");
        }
    }

    return (
        <div className="order-summary">
            <div className={((userSummaryState !== 0) ? "hidden " : "") + "content-section"}>
                <h1>Order summary</h1>
                <div className="summary-panel">
                    <div className="resume-without-basket">
                        <PackagesList {...props}/>
                    </div>
                    <div>
                        <Basket items={props.basket.items} setBasket={props.setBasket} setCookie={props.setCookie}/>
                        <button className="button" onClick={(e) => {
                            e.preventDefault();
                            setUserSummaryState(1);
                        }}>Validate the basket</button>
                    </div>
                </div>
            </div>
            {console.log(props.basket)}
            <UserDetails shown={userSummaryState === 1} ticketForm={props.formState} basket={props.basket.items} setBasket={props.setBasket} setCookie={props.setCookie} user={props.user} setTicketsRefs={setTicketsRefs} setState={setUserSummaryState}/>
            <OrderConfirmation shown={userSummaryState === 2} ticketRefs={ticketsRefs} user={props.user} setBasket={props.setBasket} setCookie={props.setCookie}/>
        </div>
    );
}



export default OrderSummary;