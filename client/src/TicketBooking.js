import {cloneElement, useEffect, useState} from "react";
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
        setSelected(key);
        props.setFormInput("ticketType", type);
        props.setState(1);
        // setVisible(false);
    }

    return (
        <div className="ticket-type-selection" style={style} hidden={props.state < 0}>
            {cardData.map((card) => (
                <Card key={card.key} card={card} selected={selected === card.key} onClick={select_ticket_type}/>
            ))}
        </div>
    )
}

function TicketAmountInput(props) {
    useEffect(() => {
        if (props.formState.ticketChildNb > props.formState.ticketNb) {
            props.setFormInput("ticketChildNb", props.formState.ticketNb);
        }
    }, [props.formState.ticketNb])

    return (
        <>
            <label>{shopData.tickets[props.formState.ticketType]?.name} ({shopData.tickets[props.formState.ticketType]?.price + "£"})
                <input type="number" defaultValue={props.formState.ticketNb} min="1" max="10" onChange={(e) => props.setFormInput("ticketNb", e.target.valueAsNumber)}/>
            </label>
            <div>
                <label>Child tickets ({shopData.tickets[props.formState.ticketType]?.child_price + "£"})
                    <input type="range" value={props.formState.ticketChildNb} min="0" max={props.formState.ticketNb} onChange={(e) => props.setFormInput("ticketChildNb", e.target.valueAsNumber)}/>
                    {props.formState.ticketChildNb}
                </label>
            </div>
        </>
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
            // return;

            default:
                //default including dated tickets
                return <TicketAmountInput {...props}/>
        }
    }

    console.log(props);
    //TODO when sending form if ticketNb = ticketChildNb show a message to say that a children can't enter the park alone

    return (
        <section className="content-section">
            <h3>Ticket booking</h3>
            <div>
                <TicketTypeSelection {...props}/>
                {props.state > 0 && ticketCases(props.formState.ticketType)}
            </div>
        </section>
    )
}

export default TicketBooking;