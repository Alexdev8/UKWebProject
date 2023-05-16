import {useEffect, useState} from "react";
import {Navigate, Outlet, useNavigate, useOutlet} from "react-router-dom";

function Order({basket, setBasket, user}) {
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
        for (let i = 0; i < formState.ticketNb; i++) {
            const newBasket = basket;
            newBasket.items.tickets = [...basket.items.tickets, {
                ticketType: formState.ticketType,
                visitor: "adult",
                ticketStartDate: formState.ticketStartDate,
                ticketEndDate: formState.ticketEndDate,
                ticketOptions: formState.ticketOptions
            }]
            setBasket(newBasket);
        }
        for (let i = 0; i < formState.ticketChildNb; i++) {
            const newBasket = basket;
            newBasket.items.tickets = [...basket.items.tickets, {
                ticketType: formState.ticketType,
                visitor: "child",
                ticketStartDate: formState.ticketStartDate,
                ticketEndDate: formState.ticketEndDate,
                ticketOptions: formState.ticketOptions
            }]
            setBasket(newBasket);
        }
        console.log(basket);
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
                        <Outlet context={{formState, basket, setFormInput, setBasket, initForm, user}}/>
                        : <Navigate to={"./tickets"}/>
                }
            </form>
        </div>
    );
}

export default Order;