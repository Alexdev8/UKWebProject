import '../styles/style.css';
import {Link} from "react-router-dom";
import {useState} from "react";

const CreateAccountInformation = [
    {
        id: "firstname",
        type: "text",
        placeholder: "First Name"
    },
    {
        id: "lastname",
        type: "text",
        placeholder: "Last Name"
    },
    {
        id: "email",
        type: "email",
        placeholder: "Email Address"
    },
    {
        id: "email2",
        type: "email",
        placeholder: "Verify Email Address"
    },
    {
        id: "birthdate",
        type: "date",
        placeholder: "Birthdate",
    }
]


function AccountInformation({infos}){

    const checkEmail = () => {
        const email = document.getElementById("email").value;
        const emailConfirmation = document.getElementById("email2").value;

        if (email != emailConfirmation){
            alert("The email addresses do not match. Please check and try again.")
        }
    }

    return(
        <div className="accountInformation">
            <h1 className="createAccount">Create Account</h1>
            {infos.map((info) => (
                <div>
                    {info.placeholder}
                    <br/>
                    <label htmlFor={info.id} key={info.id}>
                        <input
                            type={info.type}
                            id={info.id}
                            placeholder={info.placeholder}
                        />
                    </label>
                </div>
            ))}
            <button onClick={checkEmail}>Submit</button>
        </div>
    )
}

function CreateAccount(){
    return(
        <section>
            <AccountInformation infos={CreateAccountInformation} />
        </section>
    )
}

export default CreateAccount;

