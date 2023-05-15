import {cloneElement, useEffect, useRef, useState} from "react";
import {Card} from "./Shared_components";
import {useOutletContext} from "react-router-dom";
import shopData from "./shop-data.json";

const cardHotelRoom = [
    {
        key: 0,
        id: "The Tudor Suite",
        title: shopData.hotel["the-tudor-suit"].name,
        caption: shopData.hotel["the-tudor-suit"].description,
        image: "https://www.lepal.com/assets/images/background/pages/attractions.jpg?v=1680775020",
    },
    {
        key: 1,
        id: "The Crown Jewel",
        title: shopData.hotel["the-crown-jewel"].name,
        caption: shopData.hotel["the-crown-jewel"].description,
        image: "https://www.evenement.com/wp-content/uploads/2020/01/an-amusement-park-at-night-2884693.jpg",
    },
    {
        key: 2,
        id: "The Windsor Room",
        title: shopData.hotel["the-windsor-room"].name,
        caption: shopData.hotel["the-windsor-room"].description,
        image: "https://handheldcatering.com/wp-content/uploads/2019/10/corporate-event-catering-for-holidays.jpg",
    },
    {
        key: 3,
        id: "The Rose Garden View",
        title: shopData.hotel["the-rose-garden-view"].name,
        caption: shopData.hotel["the-rose-garden-view"].description,
        image: "https://handheldcatering.com/wp-content/uploads/2019/10/corporate-event-catering-for-holidays.jpg",
    }
]

function FormStepHotel(props) {
    const formStepHotel = useRef(null);
    const [prevHidden, setPrevHidden] = useState(props.index !== 0);

    useEffect(
        () => {
            if (props.state === props.index) {
                (props.index !== 0) && formStepHotel.current.scrollIntoView( {block: "start", inline: "nearest", behavior: "smooth"});
            }
        }, [props.state]
    )

    return(
        <div id={props.id} ref={formStepHotel} className={((props.state < props.index) ? "hidden " : "") + ((props.className) ? props.className + " " : "") + "form-step"}>
            {props.title !== undefined && <h3>{(props.index + 1) + ". " + props.title}</h3>}
            {cloneElement(props.content, props)}
        </div>
    )
}

function DateInput2(props) {
    const [endDateDisabled, setEndDateDisabled] = useState(props.formState.hotelStartDate);
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
        if (props.formState.hotelEndDate === null) {
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
            if (props.formState.hotelStartDate !== null) {
                setEndDateDisabled(false);
            }
            else {
                props.setState(props.index);
                setEndDateDisabled(true);
                endDateInput.current.value = null;
                props.setFormInput(props.for + "EndDate", null);
            }
        }
    }, [props.formState.hotelStartDate, props.formState.hotelEndDate])

    return(
        <div className="date-input-div">
            <div className="date-input-sub-div" onClick={() => startDateInput.current.focus()}>
                <label htmlFor="date-start-input">Arrival date</label>
                <input ref={startDateInput} name={props.for + "-start-date"} type="date" defaultValue={display(props.formState.hotelStartDate)} min={display(today)} max={display(max_reservation_date)}
                       onChange={(e) => props.setFormInput(props.for + "StartDate", e.target.valueAsDate)}
                       onBlur={(e) => focusEndInput(e)}
                       required/>
            </div>
            <span className="vertical-separator" style={(endDateDisabled) ? {opacity: 0} : {}}></span>
            <div className="date-input-sub-div" onClick={() => endDateInput.current.focus()}>
                <label htmlFor="date-end-input">Departure date</label>
                <input ref={endDateInput} name={props.for + "-end-date"} type="date" defaultValue={display(props.formState.hotelEndDate)} min={startDateInput.current?.value} max={display(max_reservation_date)}
                       onChange={(e) => props.setFormInput(props.for + "EndDate", e.target.valueAsDate)}
                       onBlur={(e) => verifyInput(e, "EndDate")}
                       disabled={endDateDisabled}/>
            </div>
        </div>
    )
}

function HotelRoomSelection(props) {
    const [selected, setSelected] = useState(null);

    function select_hotel_room_type(key, type) {
        if (selected !== key) {
            props.initForm();
            props.setState(0);
            setSelected(key);
            props.setFormInput("hotelRoom", type);
        }
    }

    return (
        <FormStepHotel {...props} title={"Choose the Hotel room you want"} content={
            <div className="ticket-type-selection">
                {
                    cardHotelRoom.map((card) => (
                        <Card key={card.key} card={card} selected={selected === card.key} onClick={select_hotel_room_type}/>
                    ))
                }
            </div>
        }/>
    )
}


function HotelRoomAmountInput(props) {
    const MAX = 3;

    useEffect(() => {
        if (props.formState.roomNb + props.formState.roomChildNb !== 0) {
            if (props.state === props.index) {
                console.log("skip");
                props.skip();
            }
        } else {
            if (props.state > props.index) {
                props.setState(props.index);
            }
        }
    }, [props.formState.roomNb, props.formState.roomChildNb, props.formState.state])

    useEffect(() => {
        if (props.state === props.index) {
            console.log("skip");
            props.skip();
        }
    }, [props.formState.state])

    return (
        <FormStepHotel {...props} title={"Select your number of adventurers (" + MAX + " max.)"} content={
            <>
                <label>{shopData.hotels[props.formState.hotelRoom]?.name} ({shopData.hotels[props.formState.hotelRoom]?.price + "£"})
                    <input type="number" defaultValue={props.formState.roomNb} min="0" max={MAX - props.formState.roomChildNb} onChange={(e) => props.setFormInput("roomNb", e.target.valueAsNumber)}/>
                </label>
                <div>
                    <label>Child tickets ({shopData.hotels[props.formState.hotelRoom]?.child_price + "£"})
                        <input type="number" defaultValue={props.formState.roomChildNb} min="0" max={MAX - props.formState.roomNb} onChange={(e) => props.setFormInput("roomChildNb", e.target.valueAsNumber)}/>
                    </label>
                </div>
            </>
        }/>
    )
}

function HotelDateInput(props) {
    return (
        <FormStepHotel {...props} title="Select the date of your stay" content={
            <DateInput2 {...props} for="hotel"/>
        }/>
    )
}

function HotelOptions(props) {
    function changeOptionHotel(option, add) {
        const optionSet = {...props.formState.ticketOptions, [option]: add};
        props.setFormInput("ticketOptions", optionSet);
    }

    return (
        <>
            <label>Fast-track tickets (£{shopData.tickets.options["fast-track"].price})
                <input type="checkbox" onChange={(e) => changeOptionHotel("fastTrack", e.target.checked)}/>
            </label>
            <br/>
            <label>Shadows Of Britannia (£{shopData.tickets.options["nightshow"].price})
                <input type="checkbox" onChange={(e) => changeOptionHotel("fastTrack", e.target.checked)}/>
            </label>
            <br/>
            <label>VIP pass (£{shopData.tickets.options["VIP-access"].price})
                <input type="checkbox" onChange={(e) => changeOptionHotel("fastTrack", e.target.checked)}/>
            </label>
        </>

    )
}

function HotelEndStep(props) {
    return (
        <FormStepHotel {...props} title="Look our available options and packages" content={
            <div>
                <HotelOptions {...props}/>
                <br/>
                <br/>
                <input className="button" onSubmit={() => props.sendForm()} type={"submit"} value="Add to cart"/>
            </div>
        }/>
    )
}

function HotelBooking() {
    const orderProps = useOutletContext();
    const [state, setState] = useState(0);
    const props = {...orderProps, state, setState, skip};

    function skip() {
        setState(state + 1);
    }

    function hotelCases(hotelID) {
        switch (hotelID) {
            case "the-tudor-suite":
                return(
                    <>
                        <HotelDateInput {...props} index={1}/>
                        <HotelRoomAmountInput {...props} index={2}/>
                        <HotelEndStep  {...props} index={3}/>
                    </>
                )
            case "the-crown-jewel":
                return (
                    <>
                        <HotelDateInput {...props} index={1}/>
                        <HotelRoomAmountInput {...props} index={2}/>
                        <HotelEndStep  {...props} index={3}/>
                    </>
                )
            case "the-windsor-room":
                return (
                    <>
                        <HotelDateInput {...props} index={1}/>
                        <HotelRoomAmountInput {...props} index={2}/>
                        <HotelEndStep  {...props} index={3}/>
                    </>
                )
            case "the-rose-garden-view":
                return(
                    <>
                        <HotelDateInput {...props} index={1}/>
                        <HotelRoomAmountInput {...props} index={2}/>
                        <HotelEndStep  {...props} index={3}/>
                    </>
                )
        }
    }

    useEffect(() => {
        if (props.formState.hotelRoom !== "") {
            setState(1);
        }
    }, [props.formState.hotelRoom])

    //TODO when sending form if ticketNb = ticketChildNb show a message to say that a children can't enter the park alone

    return (
        <section className="content-section">
            <h1>Hotel room booking</h1>
            <HotelRoomSelection {...props} index={0}/>
            {hotelCases(props.formState.hotelRoom)}
        </section>
    )
}
export default HotelBooking;