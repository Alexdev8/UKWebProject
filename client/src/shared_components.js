import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

/*--------------------------------- HEADER ------------------------------------*/

function SearchBar(){
    return(
        <div id="search-container">
            <form action="src">
                <label><input type="search" id="search-input" role="searchbox" name="search_input" placeholder={"Search"}/></label>
                <span id="search-btn" className="nested-icon-btn material-symbols-outlined" role="button"> search </span>
            </form>
        </div>
    )
}


function Button(){

    const button = [
        {name: "dark mode", id: "dark_mode-btn"},
        {name: "settings", id: "settings-btn"},
        {name: "account", id: "account-btn"}
    ]

    const RikRoll = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    const DarkMode = () => {
        alert('Dark mode on')
    }

    return(
        <div className="header-side" id="right-side">
            {button.map((button) => (
                <div className="icon-btn material-symbols-outlined">
                    <button
                        id={button.id}
                        onClick={button.id === 'dark_mode-btn' ? DarkMode: null}

                    >
                        {button.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

function Logo(){
    return(
        <div id="button">
            <div className="header-side"></div>
            <div className="header-logo">
                {/*<Link to={"/"}>*/}
                    <div id="logo-site" role="link"></div>
                {/*</Link>*/}
                <SearchBar />
                <Button />
            </div>
        </div>
    )
}





/* --------------------------------- MENU ----------------------------------- */

function Menu(){

    const ParkAndShows = [
        {name: "Shadows of Britannia", href: "nightime-show.html", id: "shadowsOfBritannia"},
        {name: "Vintage villages", href: "", id: "vintagesVillage"},
        {name: "Attractions", href: "attractions.html", id: "attractions"},
        {name: "Park workshop", href: ""}
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
                    <li>
                        {menuData.map((menuData) => (
                            <li>
                                <h1 className="hover-underline-animation">{menuData.name}</h1>
                                <ul className={menuData.id}>
                                    {menuData.subMenu.map((subMenu) => (
                                        <li className={subMenu.id}>
                                            <a href={subMenu.href}>{subMenu.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}

                    </li>
                </ul>
            </div>
        </nav>


    )
}

function Header(){
    return(
        <header>
            <Logo />
            <Menu />
        </header>
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
        <div>
            {footerItems.map((footerItem) => (
                <div><hr/>
                    <a href={footerItem.href}>{footerItem.name}</a>

                </div>
            ))}
            <div>
                © 2023 RoseCrown • All rights reserved.
            </div>
        </div>
    )
}

export {Header, Footer};