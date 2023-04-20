const React = require('react');

const Logo = function (props){
    const handleClick = () => {
        window.location.href = "index.html";
    }

    return <div id={"header-logo"}>
        <div className="header-side"></div>
        <div className="header-logo">
            <div id="logo-site" role="link" onClick={handleClick}></div>
        </div>

    </div>
};

const SearchBar = function (props){
    return <div id="search-container">
            <form action="">
                <label><input type="search" id="search-input" role="searchbox" name="search_input" placeholder={"Search"}/></label>
                <span id="search-btn" className="nested-icon-btn material-symbols-outlined" role="button"> search </span>
            </form>
    </div>
}

const DarkMode = function (props){
    return <span id="dark_mode-btn" className="icon-btn material-symbols-outlined"> dark_mode </span>
}

const Settings = function (props){
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

const Header = function (props){
    return (
        <div id="header">
            <div className="header-side"></div>
            <Logo />
            <HeaderSide />
        </div>
    )
}

