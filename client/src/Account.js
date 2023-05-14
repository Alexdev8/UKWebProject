import React, { useState } from 'react';

function EditableField({ fieldName, fieldValue, onSave}) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(fieldValue);

    const handleSave = () => {
        setIsEditing(false);
        onSave(value);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        className="data-selector edit-data-button"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="button" onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div onClick={() => setIsEditing(true)}>{value}</div>
            )}
        </div>
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

function AccountBuild({rows}){

    const [name, setName] = useState('Justin Baker');
    const [email, setEmail] = useState('justin.baker@gmail.com');
    const [birthdate, setBirthdate] = useState('11/02/2002');
    const [number, setNumber] = useState('07 38 29 47 57');
    const handleEmailSave = (newEmail) => setEmail(newEmail);
    const handleNameSave = (newName) => setName(newName);
    const handleBirthdateSave = (newBirthdate) => setBirthdate(newBirthdate);
    const handleNumberSave = (newNumber) => setNumber(newNumber);


    const [data, setData] = useState(rows);

    const addRow = () => {
        const newRow = { id: data.length + 1, name: "New Row" };
        setData([...data, newRow]);
    };

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
                            <EditableField fieldName="Name" fieldValue={name} onSave={handleNameSave} />
                        </td>
                    </tr>
                    <tr className="account-data">
                        <td className="personnel-data-title">
                            Email:
                        </td>
                        <td className="personnel-data-information">
                            <EditableField fieldName="Email" fieldValue={email} onSave={handleEmailSave} />
                        </td>
                    </tr>
                    <tr className="account-data">
                        <td className="personnel-data-title">
                            Birthdate:
                        </td>
                        <td className="personnel-data-information">
                            <EditableField fieldName="Birthdate" fieldValue={birthdate} onSave={handleBirthdateSave} />
                        </td>
                    </tr>
                    <tr className="account-data">
                        <td className="personnel-data-title">
                            Phone Number:
                        </td>
                        <td className="personnel-data-information">
                            <EditableField fieldName="Phone Number" fieldValue={number} onSave={handleNumberSave} />
                        </td>
                    </tr>
                </table>
                <hr/>
            </div>
            <hr/>
            <div className="reservation-in-coming">
                <h3>Purchase Order</h3>
                <table className="order-form">
                    <thead>
                        <tr>
                            <td className="account-reservation">
                                <h4>Number Reservation</h4>
                            </td>
                            <td className="account-reservation">
                                <h4>Reservation Information</h4>
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
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.number}</td>
                            <td>{row.description}</td>
                            <td>{row.date}</td>
                            <td>{row.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="unsubscription-newsletter">
                <label>
                    Unsubscribe from the newsletter
                    <input
                        type="checkbox"
                    />
                </label>
            </div>
        </section>
    )
}

function Account(){
    return(
        <>
        <AccountBuild rows={rows} />
        </>
    )
}

export default Account;