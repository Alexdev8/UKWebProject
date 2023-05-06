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
    const today = new Date();
    const max_reservation_date = addYears(new Date(), 2);

    // init_start_date_input();

    // date_input_div.addEventListener("click", evt => {
    //     if (evt.target !== order_form["reservation-start-date"] && order_form["reservation-start-date"].value === "") {
    //         open_picker();
    //         return;
    //     }
    //     if (evt.target === start_date_input_div && !order_form["reservation-start-date"].hasFocus) {
    //         order_form["reservation-start-date"].focus();
    //         return;
    //     }
    //     if (evt.target === end_date_input_div && !order_form["reservation-end-date"].hasFocus) {
    //         order_form["reservation-end-date"].focus();
    //         return;
    //     }
    // })

    // function open_picker() {
    //     order_form["reservation-start-date"].showPicker();
    //     order_form["reservation-start-date"].focus();
    // }

    function addYears(date, years) {
        date.setFullYear(date.getFullYear() + years);
        return date;
    }

    // function init_start_date_input() {
    //     order_form["reservation-start-date"].min = today.toLocaleDateString('fr-ca');
    //     order_form["reservation-start-date"].max = max_reservation_date.toLocaleDateString('fr-ca');
    // }
    //
    // function init_end_date_input() {
    //     order_form["reservation-end-date"].min = order_form["reservation-start-date"].value;
    //     order_form["reservation-end-date"].max = max_reservation_date.toLocaleDateString('fr-ca');
    // }
    //
    function enable_form_input() {
        // if (order_form["reservation-start-date"].value !== "") {
        //     init_end_date_input();
        //     order_form["reservation-end-date"].disabled = false;
        //     order_form["reservation-end-date"].focus();
        //     order_form["reservation-end-date"].showPicker();
        // }
        // else {
        //     disable_form_input();
        // }
    }

    // function disable_form_input() {
    //     order_form["reservation-end-date"].value = "";
    //     order_form["reservation-end-date"].disabled = true;
    // }

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
    const fcts = {next: next, previous: previous, hasNext: hasNext}
    const [formState, setFormState] = useState({
        ticketType: "",
        ticketNb: 0,
        ticketChildNb: 0,
        startDate: "",
        endDate: "",
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

    function hasNext(index) {
        return index < ORDER_STATE_NB;
    }

    function next() {
        if (formState.state < ORDER_STATE_NB) {
            setFormState({...formState, state: formState.state + 1});
        }
    }

    function previous() {
        if (formState.state > 0) {
            setFormState({...formState, state: formState.state - 1});
        }
    }

    //TODO redirection vers /order/tickets

    return (
        <div className="main-container">
            <form name="order-form">
                <Outlet context={{formState, setFormInput}}/>
                {/*<OrderFormSection id="ticket-booking" index={1} fct={fcts} formState={formState} setFormInput={setFormInput} title="Choose your tickets" content={<TicketBooking {...props}/>}/>*/}
                {/*<OrderFormSection id="hotel-reservation" index={2} fct={fcts} formState={formState} setFormInput={setFormInput} title="Book your stay" content={<HotelReservation/>}/>*/}
                {/*<OrderFormSection id="restaurant-reservation" index={3} fct={fcts} formState={formState} setFormInput={setFormInput} title="Restaurants" content={<RestaurantReservation/>}/>*/}
                {/*<OrderFormSection id="hotel-reservation" index={4} fct={fcts} formState={formState} setFormInput={setFormInput} title="Restaurants" content={<RestaurantReservation/>}/>*/}
                <Basket items={basket.items}/>
                {/*{(formState.state !== 0) ? <input type="submit"/> : <></>}*/}
            </form>
        </div>
    );
}

export default Order;