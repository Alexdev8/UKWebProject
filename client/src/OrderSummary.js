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

function OrderSummary() {
    const props = useOutletContext();
    // const props = {...orderProps};
    const BasketComponent = () =>{

        const [showNewWindow, setShowNewWindow] = useState(false);
        const basketValidation = useRef(null);

        useEffect(() => {
            if (!showNewWindow){
                window.close();
                window.open('./summary/personnel-data', '_blank');
            }
        }, [showNewWindow])

        const handleClick = () => {
            setShowNewWindow(true);
        }

        return (
            <>
                <button className="button" ref={basketValidation} onClick={}>Validate the basket</button>
                {showNewWindow ? (
                    <div className="conten-section">
                        <h1>Please enter your personnel data</h1>
                        <div className="personnel-data-ticket">
                            <div className="ticket-email">
                                <label>
                                    Email
                                    <input type="email" placeholder="Enter your email ..." className="data-selector"/>
                                </label>
                            </div>
                            <div className="name-ticket">
                                //mettre boucle for et c'est bon
                                <div className="name-each-ticket">
                                    <label>
                                        <input type="text" placeholder={"TIcket number " + i} className="data-selector"/>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="content-section">
                        <h1>Order summary</h1>
                        <div className="summary-panel">
                            <div className="resume-without-basket">
                                <PackagesList {...props}/>
                            </div>
                            <Basket items={props.basket.items}/>
                        </div>
                    </div>
                )}

            </>
        )
    };
}



export default OrderSummary;