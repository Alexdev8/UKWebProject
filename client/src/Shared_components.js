import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
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

function AccountBtn({user, setUser, setCookie}) {
    const [hidden, setHidden] = useState(true);
    const popup = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

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
                {
                    (user === null) ?
                    <div>
                        <button className="popup-button" onClick={() => {
                            navigate("./account/login");
                            setHidden(true);
                        }}>Log in</button>
                        <button className="popup-button" onClick={() => {
                            navigate("./account/signin");
                            setHidden(true);
                        }}>Create an account</button>
                    </div>
                    :
                    <div>
                        <button className="popup-button" onClick={() => {
                            navigate("./account");
                            setHidden(true);
                        }}>Profile</button>
                        <button className="logout-btn popup-button" onClick={() => {
                            setUser(null);
                            setCookie("user", "", -1);
                            setHidden(true);
                            console.log(location.pathname);
                            if (location.pathname === "/account" || location.pathname === "/account/") {
                                navigate("/");
                            }
                        }}>Log out</button>
                    </div>
                }
            </div>
        </div>
    )
}

function Button({user, setUser, setCookie, getCookie}){
    const navigate = useNavigate();
    const buttons = [
        {key: 0, name: "settings", id: "settings-btn", action: "window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'"},
    ]

    return(
        <div className="header-side" id="right-side">
            <SearchBar/>
            {(getCookie("basket") !== "") ?
                <span className="icon-btn material-symbols-outlined" id="cart-btn"
                      onClick={() => navigate("./order/summary")} tabIndex="0">shopping_cart</span>
                :
                <></>
            }
            {buttons.map((button) => (
                <span key={button.key} className="icon-btn material-symbols-outlined" id={button.id}
                      onClick={new Function("return " + button.action)} tabIndex="0">
                    {button.name}
                </span>
            ))}
            <AccountBtn user={user} setUser={setUser} setCookie={setCookie}/>
        </div>
    )
}

function Header({user, setUser, setPrevLocation, setCookie, getCookie}){
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/account/signin" && location.pathname !== "/account/login") {
            setPrevLocation(location);
        }
    }, [location])


    return(
        <header>
            <div className="header-side"></div>
            <div className="header-logo">
                <Link to="/">
                    <div id="logo-site" role="link"></div>
                </Link>
            </div>
            <Button user={user} setUser={setUser} setCookie={setCookie} getCookie={getCookie}/>
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
        {key: 1, name: "Cottages/Bed and breakfasts", href: "cottage", id: "cottage"}
    ];

    const Restaurants = [
        {key: 0, name: "Vintage restaurant", href: "vintage-restaurants", id: "vintageRestaurant"},
        {key: 1, name: "All restaurants", href: "restaurants", id: "all"}
    ];


    const Information = [
        {key: 0, name: "Offers", href: "offers", id: "offers"},
        {key: 1, name: "Events", href: "events", id: "events"},
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
        <Link to={attraction.link} id={attraction.name}>
            <div className="attraction-list">
                <img className="attraction-img" src={attraction.picture} alt={attraction.alt}/>
                <div className="attraction-container-text">
                    <h3 className="attraction-title">
                            {attraction.name}
                    </h3>
                    <div className="attraction-description">
                        {attraction.description}
                    </div>
                </div>
            </div>
            <div className="attraction-restriction">
                {attraction.restriction}
            </div>
        </Link>
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
function PrivacyPolicy({ privacy }) {
    return (
        <div className="PrivaPolicyList">
            {privacy.privacypolicytexte !== "" && (
                <div className="PrivacyPolicyRule">
                    {privacy.privacypolicytexte}
                </div>
            )}

            {privacy.privacypolicytexte2 !== "" && (
                <div className="PrivacyPolicyRule1">
                    {privacy.privacypolicytexte2}
                </div>
            )}

            {privacy.privacypolicytexte3 !== "" && (
                <div className="PrivacyPolicyRule2">
                    {privacy.privacypolicytexte3}
                </div>
            )}

            {privacy.privacypolicytexte4 !== "" && (
                <div className="PrivacyPolicyRule3">
                    {privacy.privacypolicytexte4}
                </div>
            )}

            {privacy.privacypolicytexte5 !== "" && (
                <div className="PrivacyPolicyRule4">
                    {privacy.privacypolicytexte5}
                </div>
            )}

            {privacy.privacypolicytexte6 !== "" && (
                <div className="PrivacyPolicyRule5">
                    {privacy.privacypolicytexte6}
                </div>
            )}

            {privacy.privacypolicytexte7 !== "" && (
                <div className="PrivacyPolicyRule6">
                    {privacy.privacypolicytexte7}
                </div>
            )}

            {privacy.privacypolicytexte8 !== "" && (
                <div className="PrivacyPolicyRule7">
                    {privacy.privacypolicytexte8}
                </div>
            )}

            {privacy.privacypolicytexte9 !== "" && (
                <div className="PrivacyPolicyRule8">
                    {privacy.privacypolicytexte9}
                </div>
            )}

            {privacy.privacypolicytexte10 !== "" && (
                <div className="PrivacyPolicyRule9">
                    {privacy.privacypolicytexte10}
                </div>
            )}

            {privacy.privacypolicytexte11 !== "" && (
                <div className="PrivacyPolicyRule10">
                    {privacy.privacypolicytexte11}
                </div>
            )}
        </div>
    );
}

/*-------------------------------- CALENDAR -------------------------------------*/

function Calendar({events}){


    const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const  tableRows = [];

    for(let i = 0; i < 12; i++){
        const hour = i + 9;
        const hourString = hour.toString().padStart(2, '0') + ':00';
        tableRows.push({hour: hourString, events: []});
    }

    events.forEach((event) => {
        event.date.forEach((time) => {
            const dayIndex = WEEK_DAYS.findIndex((day) => day === time.day);
            const startHour = time.start - 9;
            const endHour = time.hasOwnProperty('end') ? time.end - 9 : startHour + 1;
            for(let i = startHour; i < endHour; i++){
                if (!tableRows[i].events.some(e => e.id === event.id)) {
                    tableRows[i].events.push(event);
                }
            }
        });
    });

    return (
        <table className="calendar">
            <thead>
            <tr>
                <th></th>
                {WEEK_DAYS.map((day) => (
                    <th key={day} id={day}>{day}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {tableRows.slice(0, 15).map((row) => (
                <tr key={row.hour} id={row.hour}>
                    <td>{row.hour}</td>
                    {WEEK_DAYS.map((day) => (
                        <td key={day}>
                            {row.events.filter((event) => (
                                event.date.some((time) => time.day === day && time.start <= parseInt(row.hour.substr(0, 2)) && (time.hasOwnProperty('end') ? time.end > parseInt(row.hour.substr(0, 2)) : time.start + 1 > parseInt(row.hour.substr(0, 2))))
                            )).map((event) => (
                                <div key={event.id} className={event.id}>{event.name}</div>
                            ))}

                        </td>
                    ))}
                </tr>
            ))}
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