import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
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

function Button(){
    const buttons = [
        {key: 0, name: "dark_mode", id: "dark_mode-btn", action: "alert('Dark mode on')"},
        {key: 1, name: "settings", id: "settings-btn", action: "window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'"},
        {key: 2, name: "person", id: "account-btn", action: "alert('account')"}
    ]

    return(
        <div className="header-side" id="right-side">
            <SearchBar />
            {buttons.map((button) => (
                <span key={button.key} className="icon-btn material-symbols-outlined" id={button.id}
                      onClick={new Function("return " + button.action)} tabIndex="0">
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
        {key: 0, name: "Shadows of Britannia", href: "http://localhost:3000/shadowsofbritannia", id: "shadowsOfBritannia"},
        {key: 1, name: "Vintage villages", href: "vintage-village", id: "vintagesVillage"},
        {key: 2, name: "Attractions", href: "http://localhost:3000/attractions", id: "attractions"},
        {key: 3, name: "Park workshop", href: "http://localhost:3000/workshop", id: "workshop"}
    ];

    const Accommodations = [
        {key: 0, name: "The Grand Crown Hotel", href: "hotel", id: "crownHotel"},
        {key: 1, name: "Cottages/Bed and breakfasts", href: "cottage", id: "cottage"}
    ];

    const Restaurants = [
        {key: 0, name: "Vintage restaurant", href: "vintage-restaurant", id: "vintageRestaurant"},
        {key: 1, name: "Hotel restaurant", href: "hotel-restaurant", id: "hotelRestaurant"},
        {key: 2, name: "Fastfood", href: "fast-food", id: "fastFood"},
        {key: 3, name: "All restaurants", href: "restaurants", id: "all"}
    ];

    const Reservation = [
        {key: 0, name: "Tickets", href:"tickets", id:"ticketsReservation"},
        {key: 1, name: "Hotel", href:"hotel", id:"hotelReservation"},
        {key: 2, name: "Restaurant", href:"restaurants", id:"restaurantsReservation"}

    ]

    const Information = [
        {key: 0, name: "Prices", href: "prices", id: "prices"},
        {key: 1, name: "Calendar", href: "calendar", id: "calendar"},
        {key: 2, name: "Interactive map", href: "map", id: "map"}
    ];

    const menuData = [
        {key: 0, id: "parkAndShows", name: "Park and shows", subMenu: ParkAndShows},
        {key: 1, id: "accommodations", name: "Accommodation", subMenu: Accommodations},
        {key: 2, id: "restaurant", name: "Restaurants", subMenu: Restaurants},
        {key: 3, id: "reservation", name: "Reservation", subMenu: Reservation },
        {key: 4, id: "information", name: "Information", subMenu: Information}
    ]

    return(
        <nav>
            <div id="nav-container">
                <ul>
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

                </ul>
            </div>
        </nav>


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
                <img src={attraction.picture} alt={attraction.alt}/>
                <div className="img-overlay">
                    {attraction.name}
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
            <hr/>
            {footerItems.map((footerItem) => (
                <Link key={footerItem.key} to={footerItem.href}>{footerItem.name}</Link>
            ))}
            <div>
                © 2023 RoseCrown • All rights reserved.
            </div>
        </footer>

    )
}

export {Header, Menu, Footer, Carousel, Attraction, AccordionBuild};