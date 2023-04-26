import React from "react";
import './styles/bootstrap.css';
import './styles/style.css';
// import './scripts/animation';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

/*--------------------------------- HEADER ------------------------------------*/

function SearchBar(){
    return(
        <div id="search-container">
            <form action="">
                <label><input type="search" id="search-input" role="searchbox" name="search_input" placeholder={"Search"}/></label>
                <span id="search-btn" className="nested-icon-btn material-symbols-outlined" role="button"> search </span>
            </form>
        </div>
    )
}


function Button(){

    const button = [
        {name: "dark_mode", id: "dark_mode-btn"},
        {name: "settings", id: "settings-btn"},
        {name: "person", id: "account-btn"}
    ]

    const RikRoll = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    const DarkMode = () => {
        alert('Dark mode on')
    }

    return(
        <div className="header-side" id="right-side">
            <SearchBar />
            {button.map((button) => (
                <span className="icon-btn material-symbols-outlined" id={button.id}
                      onClick={button.id === 'dark_mode-btn' ? DarkMode: null}

                >
                            {button.name}
                          </span>
            ))}
        </div>
    )
}

function Header(){
    return(
        <header>
            <div className="header-side"></div>
            <div className="header-logo">
                <div id="logo-site" role="link"></div>
            </div>
            <Button />
        </header>

    )
}





/* --------------------------------- MENU ----------------------------------- */

function Menu(){

    const ParkAndShows = [
        {name: "Shadows of Britannia", href: "nightime-show.html", id: "shadowsOfBritannia"},
        {name: "Vintage villages", href: "", id: "vintagesVillage"},
        {name: "Attractions", href: "attractions.html", id: "attractions"},
        {name: "Park workshop", href: "", id: "workshop"}
    ];

    const Accommodations = [
        {name: "The Grand Crown Hotel", href: "", id: "crownHotel"},
        {name: "Cottages/Bed and breakfasts", href: "", id: "cottage"}
    ];

    const Restaurants = [
        {name: "Vintage restaurant", href: "nightime-show.html", id: "vintageRestaurant"},
        {name: "Hotel restaurant", href: "", id: "hotelRestaurant"},
        {name: "Fastfood", href: "", id: "fastFood"},
        {name: "All restaurants", href: "attractions.html", id: "all"}
    ];

    const Informations = [
        {name: "Prices", href: "nightime-show.html", id: "prices"},
        {name: "Calendar", href: "", id: "calendar"},
        {name: "Interractive map", href: "", id: "map"}
    ];

    const menuData = [
        {id: "parkAndShows", name: "Park and shows", subMenu: ParkAndShows},
        {id: "accommodations", name: "Accomodation", subMenu: Accommodations},
        {id: "restaurant", name: "Restaurants", subMenu: Restaurants},
        {id: "information", name: "Informations", subMenu: Informations}
    ]

    return(
        <nav>
            <div id="nav-container">
                <ul id="menu">
                    {menuData.map((menuData) => (
                        <li>
                            <h1 className="hover-underline-animation">{menuData.name}</h1>
                            <ul>
                                {menuData.subMenu.map((subMenu) => (
                                    <li>
                                        <a href={subMenu.href}>{subMenu.name}</a>
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





/*---------------------------------- CAROUSEL ---------------------------------*/



/*----------------------------------- FOOTER ----------------------------------*/

function Footer(){

    const footerItems = [
        {name: "Contact us", href: "contact-us.html"},
        {name: "Private policy", href: "privacy-policy.html"},
        {name: "About", href: "about.html"},
        {name: "Job offers", href: "careers/jobs.html"}
    ]

    return(
        <footer>
            <hr/>
            {footerItems.map((footerItem) => (
                <a href={footerItem.href}>{footerItem.name}</a>

            ))}
            <div>
                © 2023 RoseCrown • All rights reserved.
            </div>
        </footer>

    )
}

function Attraction(){
    const listAttractions = [
        {name: "", description: "", picture: "", link: "", alt: ""}
    ]

    return(
        <div className="attractionList">
            {listAttractions.map((attraction) => (
                <a href={attraction.link} id={attraction.name}>
                    <img src={attraction.picture} alt={attraction.alt}/>
                    <div className="img-overlay">
                        {attraction.name}
                    </div>
                    <div className="attractionDescription">
                        {attraction.description}
                    </div>

                </a>
            ))}
        </div>
    )
}

export {Header, Menu, Footer, Attraction};