import {useEffect} from "react";

const Main = () => {
    useEffect( () => {
        //Is used to add the parallax-main class when the main-page is used and remove it when it is hidden
        document.querySelector("body").classList.add("parallax-main");
        return () => document.querySelector("body").classList.remove("parallax-main");
    });
    return (
        <p>Main</p>
    )
}
export default Main;