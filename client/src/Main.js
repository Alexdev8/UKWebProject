import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Carousel} from "./Shared_components";

const attractionsData = [
    {
        key: 0,
        active: true,
        src: "https://c4.wallpaperflare.com/wallpaper/922/648/1005/ships-the-series-vikings-the-vikings-wallpaper-preview.jpg",
        href: "attractions/viking",
        title: "The viking's attack",
        caption: "Dive into the epic story of the ruthless vikings"
    },

    {
        key: 1,
        active: false,
        src: "https://p0.storage.canalblog.com/00/42/498088/122328190_o.jpg",
        href: "attractions/roman",
        title: "The roman empire",
        caption: "Get back to the roman period and discover the england of that time"
    },
    {
        key: 2,
        active: false,
        src: "https://images.lindependant.fr/api/v1/images/view/5d54055fd286c202264fd612/large/image.jpg?v=1",
        href: "attractions",
        title: "100 year war",
        caption: "immerse yourself in the dramatic tale of the Hundred Years War"
    },
    {
        key: 3,
        active: false,
        src: "https://images.immediate.co.uk/production/volatile/sites/22/2018/09/GettyImages-530157788-4b7d005.jpg",
        href: "attractions",
        title: "Robinhood",
        caption: "Meet a charismatic and skilled archer named Robin Hood"
    },
    {
        key: 4,
        active: false,
        src: "https://www.thetrafalgarway.org/mint-project/uploads/709103332.png",
        href: "attractions",
        title: "Trafalgar",
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
                    <button className="button-roman" onClick={() => navigate("/order/tickets")}>Get a ticket now</button>
                </section>
                <section className="content-section">
                    <h1><Link to="/attractions">Our great attractions</Link></h1>
                    <Carousel images={attractionsData}/>
                </section>
                <section className="content-section " >
                    <h1>How to access the park</h1>
                    <img className="map" src={require("./resources/rosecrown_map.png")} alt="rosecrown map"></img>
                </section>
            </div>
        </>
    );
}

export default Main;