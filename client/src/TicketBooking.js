import {cloneElement, useEffect, useRef, useState} from "react";
import {Card} from "./Shared_components";
import {useOutletContext} from "react-router-dom";

const shopData = {
    tickets: {
        "undated-ticket": {
            price: 60,
            child_price: 45,
            name: "1 day undated pass",
            description: "1 day park access whenever you want"
        },
        "dated-ticket": {
            price: 40,
            child_price: 32,
            name: "1-7 days dated pass",
            description: "1-7 days park access on a scheduled date"
        },
        "special-ticket": {
            price: -1,
            child_price: -1,
            name: "special pass",
            description: "customised park access for special events or occasions",
        }
    },
    hotels: {
        "grand-crown": {
            price: 249
        }
    }
}

const cardData = [
    {
        key: 0,
        id: "undated-ticket",
        title: shopData.tickets["undated-ticket"].name,
        caption: shopData.tickets["undated-ticket"].description,
        image: "https://www.lepal.com/assets/images/background/pages/attractions.jpg?v=1680775020",
    },
    {
        key: 1,
        id: "dated-ticket",
        title: shopData.tickets["dated-ticket"].name,
        caption: shopData.tickets["dated-ticket"].description,
        image: "https://www.evenement.com/wp-content/uploads/2020/01/an-amusement-park-at-night-2884693.jpg",
    },
    {
        key: 2,
        id: "special-ticket",
        title: shopData.tickets["special-ticket"].name,
        caption: shopData.tickets["special-ticket"].description,
        image: "https://handheldcatering.com/wp-content/uploads/2019/10/corporate-event-catering-for-holidays.jpg",
    }
]

function FormStep(props) {
    const formStep = useRef(null);

    useEffect(
        () => {
            (props.state !== 0) && formStep.current.scrollIntoView({behavior: "smooth"});
        }, [props.state]
    )

    return(
        <div id={props.id} ref={formStep} className={((props.state < props.index) ? "hidden" : "") + (props.className) + " form-step"} hidden={props.state < props.index}>
            <h3>{(props.index + 1) + ". " + props.title}</h3>
            {cloneElement(props.content, props)}
        </div>
    )
}

function DateInput() {
    return(
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

function TicketTypeSelection(props) {
    const [selected, setSelected] = useState(null);

    let style = {};

    let styleHide = {
        height: "0",
        opacity: "0",
        transform: "translateY(-200%)"
    };

    function select_ticket_type(key, type) {
        // style = styleHide;
        // ticket_booking.style.display = "block";
        // setTimeout(function () {
        //     style.display = "none";
        //     // ticket_booking.classList.toggle("hidden", false);
        // }, 400);
        if (selected !== key) {
            setSelected(key);
            props.setFormInput("ticketType", type);
            props.setState(1);
        }
        // setVisible(false);
    }

    return (
        <FormStep {...props} title={"Choose your ticket type"} content={
            <div className="ticket-type-selection">
                {
                    cardData.map((card) => (
                        <Card key={card.key} card={card} selected={selected === card.key} onClick={select_ticket_type}/>
                    ))
                }
            </div>
        }/>
    )
}

function TicketAmountInput(props) {
    const MAX = 10;

    useEffect(() => {
        if (props.state >= props.index) {
            if (props.formState.ticketNb + props.formState.ticketChildNb !== 0) {
                props.setState(props.index + 1);
            }
            else {
                props.setState(props.index);
            }
        }
    }, [props.formState.ticketNb, props.formState.ticketChildNb, props.formState.ticketType])

    return (
        <FormStep {...props} title={"Select your number of adventurers (" + MAX + " max.)"} content={
            <>
                <label>{shopData.tickets[props.formState.ticketType]?.name} ({shopData.tickets[props.formState.ticketType]?.price + "£"})
                    <input type="number" defaultValue={props.formState.ticketNb} min="0" max={MAX - props.formState.ticketChildNb} onChange={(e) => props.setFormInput("ticketNb", e.target.valueAsNumber)}/>
                </label>
                <div>
                    <label>Child tickets ({shopData.tickets[props.formState.ticketType]?.child_price + "£"})
                        <input type="number" defaultValue={props.formState.ticketChildNb} min="0" max={MAX - props.formState.ticketNb} onChange={(e) => props.setFormInput("ticketChildNb", e.target.valueAsNumber)}/>
                    </label>
                </div>
            </>
        }/>
    )
}

function TicketDateInput(props) {
    return(
        <FormStep {...props} title="Select the date of your adventure" content={
            <DateInput/>
        }/>
    )
}

function TicketBooking() {
    const orderProps = useOutletContext();
    const [state, setState] = useState(0);
    const props = {...orderProps, state, setState};

    function ticketCases(ticketID) {
        switch (ticketID) {
            case "special-ticket":
                //TODO 2 cards pour école ou évenement special qui renvoie vers un form pour envoyer un mail
                return;
            case "undated-ticket":
                return <TicketAmountInput {...props} index={1}/>
            default:
                //default including dated tickets
                return (
                    <>
                        <TicketDateInput {...props} index={1}/>
                        <TicketAmountInput {...props} index={2}/>
                    </>
                )
        }
    }

    console.log(props); //used for debug

    //TODO when sending form if ticketNb = ticketChildNb show a message to say that a children can't enter the park alone

    return (
        <section className="content-section">
            <h1>Ticket booking</h1>
            <div>
                <TicketTypeSelection {...props} index={0}/>
                {props.state > 0 && ticketCases(props.formState.ticketType)}
            </div>
        </section>
    )
}

export default TicketBooking;