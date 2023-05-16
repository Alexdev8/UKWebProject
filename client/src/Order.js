import {useEffect, useState} from "react";
import {Navigate, Outlet, useNavigate, useOutlet} from "react-router-dom";

function Order({basket, setBasket, user, getCookie, setCookie}) {
    const outlet = useOutlet();
    const navigate = useNavigate();
    const emptyForm = {
        ticketType: "",
        ticketNb: 0,
        ticketChildNb: 0,
        ticketStartDate: null,
        ticketEndDate: null,
        ticketOptions: {
            fastTrack: false
        }
    }
    const [formState, setFormState] = useState(emptyForm);

    function initForm() {
        setFormState(emptyForm);
    }

    const sendForm = async (e) => {
        e.preventDefault();
        const newBasket = basket;
        newBasket.items.tickets.adult = [...basket.items.tickets.adult, {
            ticketType: formState.ticketType,
            count: formState.ticketNb,
            ticketStartDate: formState.ticketStartDate,
            ticketEndDate: formState.ticketEndDate,
            ticketOptions: formState.ticketOptions
        }]
        newBasket.items.tickets.child = [...basket.items.tickets.child, {
            ticketType: formState.ticketType,
            count: formState.ticketChildNb,
            ticketStartDate: formState.ticketStartDate,
            ticketEndDate: formState.ticketEndDate,
            ticketOptions: formState.ticketOptions
        }]
        setBasket(newBasket);
        setCookie("basket", JSON.stringify(basket), 7);
        navigate("/order/summary", {state: basket});
    }

    useEffect(() => {
        function onBeforeUnload(e) {
            if (formState.ticketNb !== 0) {
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

    return (
        <div className="main-container">
            <form name="order-form" onSubmit={(e) => sendForm(e)}>
                {
                    (outlet !== null) ?
                        <Outlet context={{formState, basket, setFormInput, setBasket, initForm, user, getCookie, setCookie}}/>
                        : <Navigate to={"./tickets"}/>
                }
            </form>
        </div>
    );
}

export default Order;