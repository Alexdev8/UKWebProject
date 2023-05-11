import './styles/style.css';
import {Link} from "react-router-dom";
import {useState} from "react";

const emailData = [
    {
        id: "email",
        title: "Email Address",
        type: "email",
        example: "baker.justin@gmail.com"
    },
    {
        id: "email2",
        type: "email",
        title: "Email Address Confirmation",
        example: "baker.justin@gmail.com"
    },
    {
        id: "phone-number",
        type: "phone",
        title: "Phone number",
        example: "+33 6 34 17 39 43"
    }
]

const birthdateMonth = [

    {
        id: 0,
        month: "January"
    },
    {
        id: 1,
        month: "February"
    },
    {
        id: 2,
        month: "March"
    },
    {
        id: 3,
        month: "April"
    },
    {
        id: 4,
        month: "May"
    },
    {
        id: 5,
        month: "June"
    },
    {
        id: 6,
        month: "July"
    },
    {
        id: 7,
        month: "August"
    },
    {
        id: 8,
        month: "September"
    },
    {
        id: 9,
        month: "October"
    },
    {
        id: 10,
        month: "November"
    },
    {
        id: 11,
        month: "December"
    }
]

const nameData = [
    {
        id: "firstname",
        type: "text",
        title: "First Name",
        example: "Justin"
    },
    {
        id: "lastname",
        type: "text",
        title: "Last Name",
        example: "Baker"
    }
]

const password = [

    {
        id: "password",
        type: "password",
        title: "Password"
    },
    {
        id: "password2",
        type: "password",
        title: "Password Confirmation"
    }
]


function AccountInformation({months, name, email}){

    const checkData = () => {
        const email = document.getElementById("email").value;
        const emailConfirmation = document.getElementById("email2").value;

        const password = document.getElementById("password").value;
        const passwordConfirmation = document.getElementById("password2").value;


        if (email != emailConfirmation){
            const emailError = document.getElementsByClassName("email-error");
            emailError.innerText = "The email addresses do not match. Please check and try again.";
        }
        if (password != passwordConfirmation){
            const passwordError = document.getElementsByClassName("password-error");
            passwordError.innerText = "The passwords do not match. Please check and try again.";
        }
    }

    return(
        <form className="content-section create-account-container">
            <h1 className="create-account">Create Account</h1>
            <h4 className="title-section">Birthdate</h4>
            <div className="container-birthdate">
                <div className="day-container">
                    <label id="birthdate-title" htmlFor="birthdate-day">Day</label>
                    <br/>
                    <select name="birthdate-day" className="data-selector">
                        <option value="day">Select a day</option>
                        {Array.from({length: 31}, (_,index) =>index + 1).map(day =>(
                            <option className="birthdate-option" key={day} value={day}>{day}</option>
                        )) }
                    </select>
                </div>
                <div className="month-container">
                    <label id="birthdate-title" htmlFor="birthdate-month">Month</label>
                    <br/>
                    <select name="birthdate-month" className="data-selector">
                        <option value="month">Select a month</option>
                        {months.map((month) => (
                            <option key={month.id} value={month.month}>{month.month}</option>
                        ))}
                    </select>
                </div>
                <div className="year-container">
                    <label id="birthdate-title" htmlFor="birthdate-year">Year</label>
                    <br/>
                    <select name="birthdate-year" className="data-selector">
                        <option value="year">Select a year</option>
                        {Array.from({length: new Date().getFullYear() - 1949}, (_,i) => i + 1950).map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr/>
            <h4 className="title-section">Your details</h4>

            <div className="container-personnel-data">
                <div className="basic-personnel-data">
                    <label htmlFor="title">Title</label>
                    <br/>
                    <select name="title" className="data-selector">
                        <option value="title">Title</option>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="ms">Ms</option>
                    </select>
                    <div className="name-container">
                        {name.map((name) => (
                            <div key={name.id} className="name-container-input">
                                <label htmlFor={name.id}>{name.title}</label>
                                <br/>
                                <input name={name.id} type="text" className="data-selector name-input" placeholder={"eg: " + name.example}/>
                            </div>
                            ))}
                    </div>
                    <div className="email-container">
                        {email.map((email) => (
                            <div key={email.id} className="email-container-input">
                                <label htmlFor={email.id}>{email.title}</label>
                                <br/>
                                <input type={email.type} id={email.id} className="data-selector email-input" placeholder={email.example} name={email.id} />
                            </div>
                        ))}
                        <div className="email-error"></div>
                    </div>
                </div>
                <div className="password-data-container">
                        {password.map((password) => (
                            <div className="password-container-input">
                                <label htmlFor={password.id}>{password.title}</label>
                                <br/>
                                <input type="password" id={password.id} className="data-selector password-input" placeholder={password.example} name={password.id}/>

                            </div>
                        ))}
                    <div className="password-error"></div>
                </div>
            </div>
            <div className="newsletter-container">
                <input type="checkbox" name="checkbox-input" className="checkbox-input"/>
                <label htmlFor="checkbox-input">Subscribe to our newsletter</label>
            </div>
            <hr/>
            <button className="button create-account">Create account</button>
        </form>
    )
}

function LogIn(){
    return(
        <div className="content-section log-in">
            <h1 className="log-in-account">Log In</h1>
            <div className="log-in-container">
                <div className="log-in-item">
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="email"  id="email" placeholder="Enter your email..." className="data-selector log-in-selector"/>
                </div>
                <div className="log-in-item">
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password" id="password" placeholder="Enter your password..." className="data-selector log-in-selector"/>
                </div>
            </div>
            <div className="log-in-button-container">
                <button className="button log-in-button">Log In</button>
                <br/>
                <Link to="/account/sign-in">I forgot my password</Link>
            </div>
            <button className="button create-account-login-button">Create Account</button>
        </div>
    )
}


function SignIn(){
    return(
        <section>
            <AccountInformation months={birthdateMonth} name={nameData} email={emailData}/>
        </section>
    )
}



export {SignIn, LogIn};

