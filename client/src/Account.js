import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import shopData from "./shop-data.json";

function normalizeInput(input) {
    return input.trim()
}

function EditableField({ fieldName, fieldValue, onSave}) {
    const [isEditing, setIsEditing] = useState(false);
    const field = useRef(null);

    const handleSave = () => {
        let invalid = false;
        switch (fieldName) {
            case "name": {
                if (!/^([A-Za-z]+(\s+[A-Za-z]+)+)$/.test(normalizeInput(field.current.value))) {
                    console.log("error: invalid name");
                    alert("Invalid name");
                    invalid = true;
                    return;
                }
                break;
            }
            case "birthDate": {
                if (!/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/.test(normalizeInput(field.current.value))) {
                    console.log("error: invalid date");
                    alert("Invalid date");
                    invalid = true;
                    return;
                }
                break;
            }
            case "phoneNumber": {
                if (normalizeInput(field.current.value) !== "" && !/^((\+\d{2,3}\s?\d)|(0\d))(\s?\d{2}){4}$/.test(normalizeInput(field.current.value))) {
                    console.log("error: invalid phone number");
                    alert("Invalid phone number");
                    invalid = true;
                    return;
                }
                break;
            }
            default:
                if (normalizeInput(field.current.value) === "") {
                    console.log("error: invalid field");
                    alert("Invalid field");
                    invalid = true;
                    return;
                }
        }
        if (!invalid && field.current.value !== fieldValue) {
            console.log(invalid);
            onSave(normalizeInput(field.current.value));
        }
        setIsEditing(false);
    };

    useEffect(() => {
        if (isEditing) {
            field.current.value=fieldValue;
        }
    }, [isEditing]);

    return (
        <>
            {isEditing ? (
                <div>
                    <button className="button" onClick={() => {
                        field.current.value = fieldValue;
                        setIsEditing(false);
                    }}>Cancel</button>
                    <button className="button" onClick={handleSave}>Save</button>
                    <input
                        className="data-selector edit-data-button"
                        type="text"
                        ref={field}
                    />
                </div>
            ) : (
                <div onClick={() => setIsEditing(true)}>{fieldValue}</div>
            )}
        </>
    );
}

const rows = [
    {
        id:0,
        number: "AX23YG2",
        description: "2 rooms The Windsor Rose, 2 adults and 1 child",
        date: "17/05/2023 - 19/05/2023",
        price: "£395.00"
    },
    {
        id:1,
        number: "AX98YG3",
        description: "1 rooms The Windsor Rose, 2 adults",
        date: "13/05/2023 - 14/05/2023",
        price: "£170.00"
    }
]

function AccountBuild({user}){
    const navigate = useNavigate();
    const [accountData, setAccountData] = useState({});
    const [ticketsData, setTicketsData] = useState([]);
    const [hotelData, setHotelData] = useState([]);

    function getAccountData() {
        axios({
            method: 'get',
            url: '/api/account',
            params: {email: user.email},
            timeout: 4000 // 4 seconds timeout
        })
            .then(response => {
                if (response.status === 200 && response.statusText === "OK") {
                    setAccountData(response.data);
                    getAccountTickets(response.data.accountID);
                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    navigate("login");
                }
                else {
                    console.error('error: ', error);
                }
            });
    }

    function getAccountTickets(accountID) {
        axios({
            method: 'get',
            url: '/api/tickets',
            params: {accountID: accountID},
            timeout: 4000 // 4 seconds timeout
        })
            .then(response => {
                if (response.status === 200 && response.statusText === "OK") {
                    setTicketsData(response.data);
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 404) {
                }
                else {
                    console.error('error: ', error);
                }
            });
    }

    function patchAccountData(key, value) {
        axios({
            method: 'patch',
            url: '/api/account/update',
            params: {email: user.email},
            data: {
                key: key,
                value: normalizeInput(value)
            },
            timeout: 4000 // 4 seconds timeout
        })
            .then(response => {
                if (response.status === 200 && response.statusText === "OK") {
                    location.reload();
                }
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 404) {
                    console.error(error.response.data);
                    alert("The update has failed");
                }
                else {
                    alert("The update has failed");
                    console.error('error: ', error);
                }
            });
    }

    useEffect(() => {
        if (user !== null) {
            getAccountData();
        }
        else {
            navigate("login");
        }
    }, []);

    return(
        <section className="content-section data-account">
            <h1 className="title-data-account">My Account</h1>
            <hr/>
            <div className="data-account-container">
                <hr/>
                <table className="account-data-container">
                    <tr className="account-data">
                        <td className="personnel-data-title">
                            Name:
                        </td>
                        <td className="personnel-data-information">
                            <EditableField fieldName="name" fieldValue={accountData.firstName + " " + accountData.lastName} onSave={(name) => {
                                let split = name.split(" ");
                                let firstName = split[0];
                                let lastName = split[split.length - 1];
                                patchAccountData("firstName", firstName);
                                patchAccountData("lastName", lastName);
                            }} />
                        </td>
                    </tr>
                    <tr className="account-data">
                        <td className="personnel-data-title">
                            Email:
                        </td>
                        <td className="personnel-data-information">
                            <div>{accountData.email}</div>
                        </td>
                    </tr>
                    <tr className="account-data">
                        <td className="personnel-data-title">
                            Birthdate:
                        </td>
                        <td className="personnel-data-information">
                            <EditableField fieldName="birthDate" fieldValue={accountData.birthDate} onSave={(birthdate) => patchAccountData("birthDate", birthdate)} />
                        </td>
                    </tr>
                    <tr className="account-data">
                        <td className="personnel-data-title">
                            Phone Number:
                        </td>
                        <td className="personnel-data-information">
                            <EditableField fieldName="phoneNumber" fieldValue={accountData.phoneNumber} onSave={(phoneNumber) => patchAccountData("phoneNumber", phoneNumber)} />
                        </td>
                    </tr>
                </table>
                <hr/>
            </div>
            <div className="reservation-in-coming reservation-container">
                <h2>Your tickets</h2>
                <hr/>
                {(ticketsData.length !== 0) ?
                    <table className="reservation-table">
                        <thead>
                        <tr>
                            <td className="account-reservation">
                                <h4>Ticket reference</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Ticket detail</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Name</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Date</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Total</h4>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {ticketsData.map((ticket) => (
                            <tr key={ticket.ticketID}>
                                <td>{ticket.ticketRef}</td>
                                <td>{shopData.tickets[ticket.ticketType]?.description}</td>
                                <td>{ticket.visitorFirstName + " " + ticket.visitorLastName}</td>
                                <td>{ticket.ticketValidityStartDate + " - " + ticket.ticketValidityEndDate}</td>
                                <td>{ticket.price + '£'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    :
                    <p>You have no tickets linked to this account</p>
                }
            </div>
            <div className="reservation-in-coming reservation-container">
                <h2>Hotel reservation</h2>
                <hr/>
                {(hotelData.length !== 0) ?
                    <table className="reservation-table">
                        <thead>
                        <tr>
                            <td className="account-reservation">
                                <h4>Reservation reference</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Reservation detail</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Name</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Date</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Price</h4>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {accountData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.number}</td>
                                <td>{row.description}</td>
                                <td>Yes</td>
                                <td>{row.date}</td>
                                <td>{row.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    :
                    <p>You have no hotel reservation</p>
                }
            </div>
            {(accountData.newsLetterSubscription === 1) ?
                <div className="unsubscription-newsletter">
                    <button className="button" onClick={() => patchAccountData("newsLetterSubscription", "0")}>Unsubscribe from the newsletter</button>
                </div>
                : <></>
            }
        </section>
    )
}

function Account({user}){
    return(
        <>
        <AccountBuild rows={rows} user={user}/>
        </>
    )
}

export default Account;