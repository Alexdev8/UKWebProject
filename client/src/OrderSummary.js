import Basket from "./Basket";
import {useOutletContext} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

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
    return (
        <div className={((!props.shown) ? "hidden " : "") + "content-section"}>
            <h1>Please give us some informations</h1>
            <div className="personnel-data-ticket">
                <div className="ticket-email">
                    <label>
                        Email
                        <input type="email" placeholder="Enter your email ..." className="data-selector" autoComplete="username"/>
                    </label>
                </div>
                <div className="name-ticket">
                    {
                        props.tickets.map((ticket) => (
                            <div className="name-each-ticket">
                                {ticket}
                                <label>
                                    <input type="text" placeholder={"Visitor first name"} className="data-selector"/>
                                </label>
                                <label>
                                    <input type="text" placeholder={"Visitor last name"} className="data-selector"/>
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

function OrderSummary() {
    const props = useOutletContext();
    // const props = {...orderProps};
    const [userDetailsInput, setUserDetailsInput] = useState(false);

    const basketValidation = useRef(null);

    // useEffect(() => {
    //     if (!showNewWindow){
    //         window.close();
    //         window.open('./summary/personnel-data', '_blank');
    //     }
    // }, [showNewWindow])

    return (
        <div className="order-summary">
            <div className="content-section">
                <h1>Order summary</h1>
                <div className="summary-panel">
                    <div className="resume-without-basket">
                        <PackagesList {...props}/>
                    </div>
                    <Basket items={props.basket.items}/>
                </div>
            </div>
            <button className="button" ref={basketValidation} onClick={() => setUserDetailsInput(true)}>Validate the basket</button>
            <UserDetails shown={userDetailsInput} basket={props.basket.items} user={props.user}/>
        </div>
    );
}



export default OrderSummary;