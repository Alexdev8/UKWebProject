import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Carousel} from "./Shared_components";

const attractionsData = [
    {
        key: 0,
        active: true,
        src: "https://focus.courrierinternational.com/2022/02/04/0/0/5568/3712/1280/0/60/0/a82f9b4_1644008435467-000-9ba2ne.jpg",
        href: "attractions/viking",
        title: "The viking's attack",
        caption: "Dive into the epic story of the ruthless vikings"
    },
    {
        key: 1,
        active: false,
        src: "https://www.parcbagatelle.com/fileadmin/user_upload/bagatelle/Baggy_Pass/Banniere-BaggyPass-Bagatelle.jpg",
        href: "attractions/roman",
        title: "The roman empire",
        caption: "Get back to the roman period and discover the england of that time"
    },
    {
        key: 2,
        active: false,
        src: "https://www.lepal.com/assets/images/background/pages/attractions.jpg?v=1680775020",
        href: "attractions",
        title: "Attraction 3",
        caption: "A funny one"
    },
    {
        key: 3,
        active: false,
        src: "https://www.evenement.com/wp-content/uploads/2020/01/an-amusement-park-at-night-2884693.jpg",
        href: "attractions",
        title: "Attraction 4",
        caption: "An exiting one"
    },
    {
        key: 4,
        active: false,
        src: "https://www.technord.com/wp-content/uploads/2020/03/Parc-attractions.jpg",
        href: "attractions",
        title: "Attraction 5",
        caption: "A breathtaking one"
    }
]

function Main() {
    const navigate = useNavigate();

    useEffect( () => {
        //Is used to add the parallax-main class when the main-page is used and remove it when it is hidden
        // document.querySelector("#root").classList.add("parallax-main");
        // return () => document.querySelector("#root").classList.remove("parallax-main");
    });
    return (
        <>
            {/*<img id="rosecrown-mascot-img" className="parallax-layer2" src="resources/robin_hood.png" alt="rosecrown mascot"/>*/}
            {/*<img id="forest-img" className="parallax-layer3" src="resources/forest.png" alt="forest"/>*/}
            <div className="main-container parallax-layer1">
                <section className="content-section">
                    <h1><Link to="/offers">Our plans</Link></h1>
                    <button onClick={() => navigate("/order/tickets")}>Get a ticket now</button>
                </section>
                <section className="content-section">
                    <h1><Link to="/attractions">Our great attractions</Link></h1>
                    <Carousel images={attractionsData}/>
                </section>
            </div>
        </>
    );
}

export default Main;