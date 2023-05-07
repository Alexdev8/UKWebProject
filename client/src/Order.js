import {Card} from "./Shared_components";
import {cloneElement, useEffect, useRef, useState} from "react";
import {Outlet, useBeforeUnload, useNavigate} from "react-router-dom";
import Basket from "./Basket";
import TicketBooking from "./TicketBooking";

function OrderFormSection(props) {
    const formSection = useRef(null);

    useEffect(
        () => {
            formSection.current.scrollIntoView({behavior: "smooth"});
        }, [props.formState.state]
    )

    return(
        <section id={props.id} ref={formSection} className={((props.formState.state < props.index) ? "hidden " : "") + "content-section"} hidden={props.formState.state < props.index}>
            <h3>{props.title}</h3>
            {cloneElement(props.content, props)}
            {
                (props.index === props.formState.state) ?
                    <div>
                        <button type="button" onClick={() => props.fct.previous()}>Previous</button>
                        {
                            (props.fct.hasNext(props.index)) ?
                                <button type="button" onClick={() => props.fct.next()}>Next</button>
                            : <></>
                        }
                    </div>
                : <></>
            }
        </section>
    )
}

function HotelReservation(props) {

    return (
        <div className="date-input-div">
            <div id="start-date-input-div" className="date-input-sub-div">
                <label htmlFor="date-start-input">Arrival date</label>
                <input id="date-start-input" name="reservation-start-date" type="date" onChange={() => enable_form_input()}
                       required/>
            </div>
            <span className="vertical-separator"></span>
            <div id="end-date-input-div" className="date-input-sub-div">
                <label htmlFor="date-end-input">Departure date</label>
                <input id="date-end-input" name="reservation-end-date" type="date" disabled/>
            </div>
        </div>
    )
}

function RestaurantReservation(props) {
    return (
        <div>
            Il y a plein de restau
        </div>
    )
}

function Order({basket, setBasket}) {
    const ORDER_STATE_NB = 3
    const [formState, setFormState] = useState({
        ticketType: "",
        ticketNb: 0,
        ticketChildNb: 0,
        ticketStartDate: null,
        ticketEndDate: null,
        ticketOptions: {
            fastTrack: false
        },
        email: ""
    });

    useEffect(() => {
        function onBeforeUnload(e) {
            if (formState.email !== "") {
                e.preventDefault();
                confirm("You're about to leave this site");
                e.returnValue = "";
            }
        }
        window.addEventListener("beforeunload", onBeforeUnload);
        return() => {
            window.removeEventListener("beforeunload", onBeforeUnload);
        };
    }, [formState.ticketType]);

    function setFormInput(inputName, val) {
        //add the input and its value to the formState
        setFormState(prevState => {
            return {
                ...prevState,
                [inputName]: val
            }
        });
    }

    //TODO redirection vers /order/tickets

    return (
        <div className="main-container">
            <form name="order-form">
                <Outlet context={{formState, setFormInput}}/>
                {/*<OrderFormSection id="hotel-reservation" index={2} fct={fcts} formState={formState} setFormInput={setFormInput} title="Book your stay" content={<HotelReservation/>}/>*/}
                {/*<OrderFormSection id="restaurant-reservation" index={3} fct={fcts} formState={formState} setFormInput={setFormInput} title="Restaurants" content={<RestaurantReservation/>}/>*/}
                <Basket items={basket.items}/>
            </form>
        </div>
    );
}

export default Order;