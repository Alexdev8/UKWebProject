import {Card} from "./shared_components";
import {cloneElement, useEffect, useRef, useState} from "react";

const cardData = [
    {
        key: 0,
        id: "undated-ticket",
        title: "1 day undated pass",
        caption: "1 day park access whenever you want",
        image: "https://www.lepal.com/assets/images/background/pages/attractions.jpg?v=1680775020",
    },
    {
        key: 1,
        id: "dated-ticket",
        title: "1-7 days dated pass",
        caption: "1-7 days park access on a scheduled date",
        image: "https://www.evenement.com/wp-content/uploads/2020/01/an-amusement-park-at-night-2884693.jpg",
    },
    {
        key: 2,
        id: "special-ticket",
        title: "special pass",
        caption: "customised park access for special events or occasions",
        image: "https://handheldcatering.com/wp-content/uploads/2019/10/corporate-event-catering-for-holidays.jpg",
    }
]

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

function TicketTypeSelection(props) {
    const [visible, setVisible] = useState(true);

    let style = {};

    let styleHide = {
        height: "0",
        opacity: "0",
        transform: "translateY(-200%)"
    };

    function select_ticket_type(type, typeExplicit) {
        style = styleHide;
        // ticket_booking.style.display = "block";
        setTimeout(function () {
            style.display = "none";
            // ticket_booking.classList.toggle("hidden", false);
        }, 400);
        props.setFormState({...props.formState, ticketType: type, ticketTypeExplicit: typeExplicit, state: 1});
        setVisible(false);
    }

    return (
        <div className="ticket-type-selection" style={style} hidden={!visible && props.formState.state !== 0}>
            {cardData.map((card) => (
                <Card key={card.key} card={card} onClick={select_ticket_type}/>
            ))}
        </div>
    )
}

function TicketBooking(props) {
    return (
        <div>
            <label>{props.formState.ticketTypeExplicit}<input type="number" defaultValue="1" min="1" max="20"/></label>
        </div>
    )
}

function HotelReservation(props) {
    let order_form = document.forms["order-form"];

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

function Order() {
    const ORDER_STATE_NB = 3

    const [formState, setFormState] = useState({
        state: 0,
        ticketType: "",
        ticketTypeExplicit: "",
        startDate: "",
        endDate: "",
        email: ""
    });
    console.log(formState);

    const fcts = {next: next, previous: previous, hasNext: hasNext}

    function hasNext(index) {
        return index < ORDER_STATE_NB;
    }

    function next() {
        if (formState.state < ORDER_STATE_NB) {
            setFormState({...formState, state: formState.state + 1})
        }
    }

    function previous() {
        if (formState.state > 0) {
            setFormState({...formState, state: formState.state - 1})
        }
    }

    return (
        <div className="main-container">
            <form name="order-form">
                <TicketTypeSelection formState={formState} setFormState={setFormState}/>
                <OrderFormSection id="ticket-booking" index={1} fct={fcts} formState={formState} setFormState={setFormState} title="Tickets information" content={<TicketBooking/>}/>
                <OrderFormSection id="hotel-reservation" index={2} fct={fcts} formState={formState} setFormState={setFormState} title="Book your stay" content={<HotelReservation/>}/>
                <OrderFormSection id="restaurant-reservation" index={3} fct={fcts} formState={formState} setFormState={setFormState} title="Restaurants" content={<RestaurantReservation/>}/>
                {(formState.state !== 0) ? <input type="submit"/> : <></>}
            </form>
        </div>
    );
}

export default Order;