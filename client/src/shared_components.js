import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const Logo = function() {
    return (
        <div id={"header-logo"}>
            <div className="header-side"></div>
            <div className="header-logo">
                <Link to={"/"}>
                    <div id="logo-site" role="link"></div>
                </Link>
            </div>
        </div>
    );
};

const SearchBar = function (props) {
    return <div id="search-container">
            <form action="src">
                <label><input type="search" id="search-input" role="searchbox" name="search_input" placeholder={"Search"}/></label>
                <span id="search-btn" className="nested-icon-btn material-symbols-outlined" role="button"> search </span>
            </form>
    </div>
}

const DarkMode = function (props){
    return <span id="dark_mode-btn" className="icon-btn material-symbols-outlined"> dark_mode </span>
}

const Settings = function (props) {
    const handleClick = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    return <span id="settings-btn" className="icon-btn material-symbols-outlined" onClick={handleClick}> settings </span>

}

const Account = function (props){
    return <span id="account-btn" className="icon-btn material-symbols-outlined"> person </span>
}

const HeaderSide = function (props){
    return(
        <div className="header-side" id="right-side">
            <SearchBar />
            <DarkMode />
            <Settings />
            <Account />
        </div>

    )
}

const Header = function (){
    return (
        <div id="header">
            <div className="header-side"></div>
            <Logo />
            <HeaderSide />
        </div>
    )
};

/* CAROUSEL */

const TitleCarousel = function (){
    return(
        <a href="attractions.html"><h1>Our great attractions</h1></a>
    )
};

function CarouselIndicators({ buttonCount }){
    const buttons = [];

    for (let i = 0; i < buttonCount; i++){
        const isActive = i === 0 ? 'active' : '';
        buttons.push(
            <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                aria-label={`Slide ${index + 1}`}
            ></button>
        );
    }
    return(
        <div className="carousel-indicators">
            {buttons}
        </div>
    );
}

<ButtonCarousel buttonCount={5} />
/* It will create 5 buttons */

function PictureCarousel({ numberOfPictures,URLAttraction, URLPicture, name, Description}){
    const pictures = [];

    for (let i = 0; i < numberOfPictures; i++){
        pictures.push(
            <div className="carousel-item">
                <a href={URLPicture}>
                    <img src={URLAttraction} className="carousel-img"/>
                    <div className="carousel-caption">
                        <h5>{name}</h5>
                        <p>{Description}</p>
                    </div>
                </a>
            </div>
        );
    }
    return(
        <div className="carousel-inner">
            {pictures}
        </div>
        )
}

<PictureCarousel
    numberOfPictures={3},
    URLAttraction={"attractions.html"},
    URLPicture={"https://focus.courrierinternational.com/2022/02/04/0/0/5568/3712/1280/0/60/0/a82f9b4_1644008435467-000-9ba2ne.jpg"},
    name={"Attraction 1"},
    Description={"A nice one"}
/>
















/* FOOTER */

const Footer = function (props){
    return (
        <div> <hr/>
            <a href="contact-us.html">Contact us</a>
            <a href="privacy-policy.html">Privacy policy</a>
            <a href="about.html">About</a>
            <a href="careers/jobs.html">Job offers</a>
            <div>
                © 2023 RoseCrown • All rights reserved.
            </div>
        </div>
    )
}

export default {Header};