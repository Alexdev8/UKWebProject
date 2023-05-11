import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './styles/bootstrap.css';


/*--------------------------------- HEADER ------------------------------------*/

function SearchBar() {
    const [visible, setVisible] = useState(false);

    function showSearchbar() {
        setVisible(true);
    }

    function hideSearchbar() {
        const search_box = document.querySelector("#search-container input");
        if (search_box !== document.activeElement && search_box.value === "") {
            setVisible(false);
        }
    }

    return (
        <div id="search-container">
            <form className={visible ? "searchform-displayed" : ""} onMouseEnter={showSearchbar} onMouseLeave={hideSearchbar}>
                <label><input type="search" id="search-input" role="searchbox" name="search_input" placeholder={"Search"} autoComplete="false" onBlur={hideSearchbar}/></label>
                <span id="search-btn" className="nested-icon-btn material-symbols-outlined" role="button"> search </span>
            </form>
        </div>
    )
}

function SignIn(){
    return(
        <div>
            <h1>Sign in</h1>
            <div className="userData">
                <div className="accountEmail">
                    <span className="material-symbols-outlined"> person </span>
                    <input type="email" id="username" placeholder="Username or Email"/>
                </div>
                <div className="accountPassword">
                    <span className="material-symbols-outlined"> lock </span>
                    <input type="password" id="password" placeholder="Password"/>
                </div>
            </div>
            <button>Connexion</button>
            <div className="linkaccount">
                <a>Forgot Password?</a>
                <a>Create an account</a>
            </div>

        </div>
    )
}

function AccountBtn() {
    const [hidden, setHidden] = useState(true);
    const popup = useRef(null);
    const navigate = useNavigate();

    function handleClickOutside(event) {
        if (popup.current && !popup.current.contains(event.target)) {
            setHidden(true);
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="account-btn" ref={popup}>
            <span className="icon-btn material-symbols-outlined" onClick={() => (hidden) ? setHidden(false) : setHidden(true)} tabIndex="0">
            person
            </span>
            <div className={(hidden) ? "hidden" : ""} id="account-btn-popup">
                <div>
                    <button className="popup-button" onClick={() => navigate("account/login")}>Log in</button>
                    <button className="popup-button" onClick={() => navigate("account/register")}>Create an account</button>
                </div>
                {/*<div>*/}
                {/*    <button className="popup-button">Profile</button>*/}
                {/*    <button className="popup-button">Log out</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

function Button(){
    const buttons = [
        {key: 0, name: "dark_mode", id: "dark_mode-btn", action: "alert('Dark mode on')"},
        {key: 1, name: "settings", id: "settings-btn", action: "window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'"},
    ]

    return(
        <div className="header-side" id="right-side">
            <SearchBar/>
            {buttons.map((button) => (
                <span key={button.key} className="icon-btn material-symbols-outlined" id={button.id}
                      onClick={new Function("return " + button.action)} tabIndex="0">
                    {button.name}
                </span>
            ))}
            <AccountBtn/>
        </div>
    )
}

function Header(){
    return(
        <header>
            <div className="header-side"></div>
            <div className="header-logo">
                <Link to="/">
                    <div id="logo-site" role="link"></div>
                </Link>
            </div>
            <Button />
        </header>
    )
}

/* --------------------------------- MENU ----------------------------------- */

function Menu(){
    const ParkAndShows = [
        {key: 0, name: "Shadows of Britannia", href: "shadows-of-britannia", id: "shadowsOfBritannia"},
        {key: 1, name: "Vintage villages", href: "vintage-village", id: "vintagesVillage"},
        {key: 2, name: "Attractions", href: "attractions", id: "attractions"},
        {key: 3, name: "Park workshop", href: "workshop", id: "workshop"}
    ];

    const Accommodations = [
        {key: 0, name: "The Grand Crown Hotel", href: "the-grand-crown-hotel", id: "crownHotel"},
        {key: 1, name: "Hotel restaurant", href: "hotel-restaurant", id: "hotelRestaurant"},
        {key: 2, name: "Cottages/Bed and breakfasts", href: "cottage", id: "cottage"}
    ];

    const Restaurants = [
        {key: 0, name: "Vintage restaurant", href: "vintage-restaurants", id: "vintageRestaurant"},
        {key: 1, name: "All restaurants", href: "restaurants", id: "all"}
    ];


    const Information = [
        {key: 0, name: "Prices", href: "prices", id: "prices"},
        {key: 1, name: "Calendar", href: "calendar", id: "calendar"},
        {key: 2, name: "Reservation", href:"reservation", id:"reservation"},

    ];

    const menuData = [
        {key: 0, id: "parkAndShows", name: "Park and shows", subMenu: ParkAndShows},
        {key: 1, id: "accommodations", name: "Accommodation", subMenu: Accommodations},
        {key: 2, id: "restaurant", name: "Restaurants", subMenu: Restaurants},
        {key: 4, id: "information", name: "Information", subMenu: Information}
    ]

    return(
        <nav>
            <div id="nav-container">
                <ul>
                    {menuData.map((menuData) => (
                        <li key={menuData.key}>
                            <h1 className="hover-underline-animation">{menuData.name}</h1>
                            <ul className={menuData.id}>
                                {menuData.subMenu.map((subMenu) => (
                                    <li key={subMenu.key} className={subMenu.id}>
                                        <Link to={subMenu.href}>{subMenu.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

/*------------------------------------ CARD -----------------------------------*/
function Card({card, onClick, selected}) {
    return (
        <div id={card.id} className={(selected) ? "selected card" : "card"} onClick={() => onClick(card.key, card.id)}>
            <img src={card.image} className="card-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.caption}</p>
            </div>
        </div>
    )
}

function Pictogram({pictograms}){
    return(
        <div className="pictogram">

            {pictograms.map((pictogram) => (
                <div className="pictogram-container">
                    <span className={pictogram.class}>{pictogram.name}</span>
                    <p>{pictogram.text}</p>
                </div>
            ))}
        </div>
    )
}

function Functionalities({items}){
    return(
        <div className="hotel-pictogram">
            {items.map((item) => (
                <div className="hotel-pictogram-container">
                    <span className="material-symbols-outlined">{item.id}</span>
                    <br/>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

/*---------------------------------- CAROUSEL ---------------------------------*/
function Carousel({images}) {
    useEffect(() => {
            const carousel = bootstrap.Carousel.getOrCreateInstance(document.querySelector("#carouselIndicators"));
            carousel?.cycle();
        }, []
    )

    return (
        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((image) => (
                    <button key={image.key} type="button" data-bs-target="#carouselIndicators" data-bs-slide-to={image.key}
                        className={(image.key === 0) ? "active" : ""} aria-current={(image.key === 0) ? "true" : "false"} aria-label={"Slide " + image.key} />
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image) => (
                    <div key={image.key} className={"carousel-item " + ((image.active) ? 'active' : '')}>
                        <a href={image.href}>
                            <img
                                src={image.src}
                                className="carousel-img"
                                alt={image.title + " image"}/>
                            <div className="carousel-caption">
                                <h5>{image.title}</h5>
                                <p>{image.caption}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

/*--------------------------------- ACCORDION------------------------------------*/

function Attraction({attraction}) {
    return (
        <div className="attractionList">
            <Link to={attraction.link} id={attraction.name}>
                <img className="attractionIMG" src={attraction.picture} alt={attraction.alt}/>
                <div className="attractionRestriction">
                    {attraction.restriction}
                    <br/>
                    {attraction.restriction2}
                </div>
                <div className="attractionDescription">
                    {attraction.description}
                </div>
            </Link>
        </div>
    )
}

function AccordionBuild({listItems}){
    const [isExtended, setIsExtended] = useState(false);

    return (
        <div className="accordion" id="accordionExample">
            {listItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${!item.ariaExpanded ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            aria-expanded={item.ariaExpanded}
                            data-bs-target={`#collapse${item.id}`}
                            aria-controls={`collapse${item.id}`}
                        >
                            {item.name}
                        </button>
                    </h2>
                    <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${item.ariaExpanded ? 'show' : ''}`}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Attraction attraction={item} />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

function AccordionBuildPrivacyPolicy({listItems}){

    const [isExtended, setIsExtended] = useState(false);

    return (
        <div className="accordion" id="accordionExample">
            {listItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${!item.ariaExpanded ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            aria-expanded={item.ariaExpanded}
                            data-bs-target={`#collapse${item.id}`}
                            aria-controls={`collapse${item.id}`}
                        >
                            {item.name}
                        </button>
                    </h2>
                    <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${item.ariaExpanded ? 'show' : ''}`}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <PrivacyPolicy privacy={item} />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}
function PrivacyPolicy({privacy}) {

    return (
        <div className="PrivaPolicyList">

                <div className="PrivacyPolicyRule">
                    {privacy.privacypolicytexte}
                </div>
        </div>
    )
}
/*-------------------------------- CALENDAR -------------------------------------*/

const events = [
    {
        id: 0,
        type: "attraction",
        name: "100 Years War",
        date: [
            {day: "Monday", start: "11h", end: "13h"},
            {day: "Friday", start: "14h", end: "16h"}
        ]
    },
    {
        id: 1,
        type: "workshop",
        name: "Bakery",
        date: [
            {day: "Tuesday", start: "11h", end: "12h"},
            {date: "Friday", start: "15h", end: "16h"}
        ]
    }
]

function Calendar(){

    const events = [
        {
            id: 0,
            type: "attraction",
            name: "100 Years War",
            date: [
                {day: "Monday", start: 11, end: 13},
                {day: "Friday", start: 14, end: 16}
            ]
        },
        {
            id: 1,
            type: "workshop",
            name: "Bakery",
            date: [
                {day: "Tuesday", start: 11, end: 12},
                {day: "Friday", start: 15, end: 16}
            ]
        },
        {
            id: 2,
            type: "nightShow",
            name: "Shadows of Britannia",
            date: [
                {day: "Tuesday", start: 19, end: 23},

            ]
        },
        {
            id: 3,
            type: "nightShow",
            name: "Shadows of Britannia",
            date: [
                {day: "Thursday", start: 19, end: 23},


            ]
        },
        {
            id: 4,
            type: "nightShow",
            name: "Shadows of Britannia",
            date: [
                {day: "Saturday", start: 19, end: 23},

            ]
        }
        ,
        {
            id: 5,
            type: "nightShow",
            name: "Shadows of Britannia",
            date: [
                {day: "Sunday", start: 19, end: 23},

            ]
        }
    ]

    const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const  tableRows = [];

    for(let i = 0; i < 15; i++){
        const hour = i + 9;
        const hourString = hour.toString().padStart(2, '0') + ':00';
        tableRows.push({hour: hourString, events: []});
    }

    events.forEach((event) => {
        event.date.forEach((time) => {
            const dayIndex = WEEK_DAYS.findIndex((day) => day === time.day);
            const startHour = time.start - 9;
            const endHour = time.end - 9;
            for(let i = startHour; i < endHour; i++){
                tableRows[i].events.push(event);
            }
        });
    });

    return (
        <table className="calendrier">
            <thead>
            <tr>
                <th></th>
                {WEEK_DAYS.map((day) => (
                    <th key={day} id={day}>{day}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {tableRows.map((row) => (
                <tr key={row.hour} id={row.hour}>
                    <td>{row.hour}</td>
                    {WEEK_DAYS.map((day) => (
                        <td key={day}>
                            {row.events.filter((event) => (
                                event.date.some((time) => time.day === day && time.start <= parseInt(row.hour.substr(0, 2)) && time.end > parseInt(row.hour.substr(0, 2)))
                            )).map((event) => (
                                <div key={event.id}>{event.name}</div>
                            ))}
                        </td>
                    ))}
                </tr>
            ))}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
    );
}

/*----------------------------------- FOOTER ----------------------------------*/

function Footer() {
    const footerItems = [
        {key: 0, name: "Contact us", href: "contact-us"},
        {key: 1, name: "Private policy", href: "privacy-policy"},
        {key: 2, name: "About", href: "about"},
        {key: 3, name: "Job offers", href: "careers/jobs"}
    ]

    return(
        <footer>
            {footerItems.map((footerItem) => (
                <Link key={footerItem.key} to={footerItem.href}>{footerItem.name}</Link>
            ))}
            <div>
                © 2023 RoseCrown • All rights reserved.
            </div>
        </footer>

    )
}

export {Header, Menu, Footer, Carousel, AccordionBuild,AccordionBuildPrivacyPolicy, Card, SignIn, Calendar, Pictogram, Functionalities};