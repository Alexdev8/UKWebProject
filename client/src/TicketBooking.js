import {cloneElement, useEffect, useRef, useState} from "react";
import {Card} from "./Shared_components";
import {useOutletContext} from "react-router-dom";
import shopData from "./shop-data.json";

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
    const [prevHidden, setPrevHidden] = useState(props.index !== 0);

    useEffect(
        () => {
            if (props.state === props.index) {
                (props.index !== 0) && formStep.current.scrollIntoView( {block: "start", inline: "nearest", behavior: "smooth"});
            }
        }, [props.state]
    )

    return(
        <div id={props.id} ref={formStep} className={((props.state < props.index) ? "hidden " : "") + ((props.className) ? props.className + " " : "") + "form-step"}>
            {props.title !== undefined && <h3>{(props.index + 1) + ". " + props.title}</h3>}
            {cloneElement(props.content, props)}
        </div>
    )
}

function DateInput(props) {
    const [endDateDisabled, setEndDateDisabled] = useState(props.formState.ticketStartDate === null);
    const startDateInput = useRef(null);
    const endDateInput = useRef(null);
    const today = new Date();
    const max_reservation_date = addYears(new Date(), 2);

    function display(date) {
        return date?.toLocaleDateString('fr-ca');
    }

    function addYears(date, years) {
        date.setFullYear(date.getFullYear() + years);
        return date;
    }

    function verifyInput(e, input) {
        if (e.target.valueAsDate !== null && e.target.value < e.target.min) {
            e.target.value = e.target.min;
            props.setFormInput(props.for + input, new Date(e.target.min));
        }
        else if (e.target.valueAsDate !== null && e.target.value > e.target.max) {
            e.target.value = e.target.max;
            props.setFormInput(props.for + input, new Date(e.target.max));
        }
        if (props.formState.ticketEndDate === null) {
            props.setState(props.index);
        }
        else {
            props.setState(props.index + 1);
        }
    }

    function focusEndInput(e) {
        verifyInput(e, "StartDate");
        if (!endDateDisabled && !endDateInput.current?.value && endDateInput.current !== document.activeElement) {
            endDateInput.current.focus();
            endDateInput.current.showPicker();
        }
    }

    useEffect(() => {
        if (props.state >= props.index) {
            if (props.formState.ticketStartDate !== null) {
                setEndDateDisabled(false);
            }
            else {
                props.setState(props.index);
                setEndDateDisabled(true);
                endDateInput.current.value = null;
                props.setFormInput(props.for + "EndDate", null);
            }
        }
    }, [props.formState.ticketStartDate, props.formState.ticketEndDate])

    return(
        <div className="date-input-div">
            <div className="date-input-sub-div" onClick={() => startDateInput.current.focus()}>
                <label htmlFor="date-start-input">Arrival date</label>
                <input ref={startDateInput} name={props.for + "-start-date"} type="date" defaultValue={display(props.formState.ticketStartDate)} min={display(today)} max={display(max_reservation_date)}
                       onChange={(e) => props.setFormInput(props.for + "StartDate", e.target.valueAsDate)}
                       onBlur={(e) => focusEndInput(e)}
                       required/>
            </div>
            <span className="vertical-separator" style={(endDateDisabled) ? {opacity: 0} : {}}></span>
            <div className="date-input-sub-div" onClick={() => endDateInput.current.focus()}>
                <label htmlFor="date-end-input">Departure date</label>
                <input ref={endDateInput} name={props.for + "-end-date"} type="date" defaultValue={display(props.formState.ticketEndDate)} min={startDateInput.current?.value} max={display(max_reservation_date)}
                       onChange={(e) => props.setFormInput(props.for + "EndDate", e.target.valueAsDate)}
                       onBlur={(e) => verifyInput(e, "EndDate")}
                       disabled={endDateDisabled}/>
            </div>
        </div>
    )
}

function TicketTypeSelection(props) {
    const [selected, setSelected] = useState(null);

    function select_ticket_type(key, type) {
        if (selected !== key) {
            props.initForm();
            props.setState(0);
            setSelected(key);
            props.setFormInput("ticketType", type);
        }
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
        if (props.formState.ticketNb + props.formState.ticketChildNb !== 0) {
            if (props.state === props.index) {
                console.log("skip");
                props.skip();
            }
        } else {
            if (props.state > props.index) {
                props.setState(props.index);
            }
        }
    }, [props.formState.ticketNb, props.formState.ticketChildNb, props.formState.state])

    useEffect(() => {
        if (props.state === props.index) {
            console.log("skip");
            props.skip();
        }
    }, [props.formState.state])

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
    return (
        <FormStep {...props} title="Select the date of your adventure" content={
            <DateInput {...props} for="ticket"/>
        }/>
    )
}

function TicketOptions(props) {
    function changeOption(option, add) {
        const optionSet = {...props.formState.ticketOptions, [option]: add};
        props.setFormInput("ticketOptions", optionSet);
    }

    return (
        <label>Fast-track tickets (+{shopData.tickets.options["fast-track"].price_percentage + "%"})
            <input type="checkbox" onChange={(e) => changeOption("fastTrack", e.target.checked)}/>
        </label>
    )
}

function TicketEndStep(props) {
    return (
        <FormStep {...props} title="Look our available options and packages" content={
            <div>
                <TicketOptions {...props}/>
                <input onSubmit={() => props.sendForm()} type={"submit"} value="Add to cart"/>
            </div>
        }/>
    )
}

function TicketBooking() {
    const orderProps = useOutletContext();
    const [state, setState] = useState(0);
    const props = {...orderProps, state, setState, skip};

    function skip() {
        setState(state + 1);
    }

    function ticketCases(ticketID) {
        switch (ticketID) {
            case "special-ticket":
                //TODO 2 cards pour école ou évenement special qui renvoie vers un form pour envoyer un mail
                return;
            case "undated-ticket":
                return (
                    <>
                        <TicketAmountInput {...props} index={1}/>
                        <TicketEndStep  {...props} index={2}/>
                    </>
                )
            default:
                //default including dated tickets
                return (
                    <>
                        <TicketDateInput {...props} index={1}/>
                        <TicketAmountInput {...props} index={2}/>
                        <TicketEndStep  {...props} index={3}/>
                    </>
                )
        }
    }

    useEffect(() => {
        if (props.formState.ticketType !== "") {
            setState(1);
        }
    }, [props.formState.ticketType])

    //TODO when sending form if ticketNb = ticketChildNb show a message to say that a children can't enter the park alone

    return (
        <section className="content-section">
            <h1>Ticket booking</h1>
            <TicketTypeSelection {...props} index={0}/>
            {ticketCases(props.formState.ticketType)}
        </section>
    )
}

export default TicketBooking;