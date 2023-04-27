import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Carousel} from "./shared_components";

const attractionsData = [
    {
        key: 0,
        active: true,
        src: "https://focus.courrierinternational.com/2022/02/04/0/0/5568/3712/1280/0/60/0/a82f9b4_1644008435467-000-9ba2ne.jpg",
        href: "attractions",
        title: "Attraction 1",
        caption: "A nice one"
    },
    {
        key: 1,
        active: false,
        src: "https://www.parcbagatelle.com/fileadmin/user_upload/bagatelle/Baggy_Pass/Banniere-BaggyPass-Bagatelle.jpg",
        href: "attractions",
        title: "Attraction 2",
        caption: "A cool one"
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

const Main = () => {
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
                    <h1><Link to="/order">Buy tickets</Link></h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci. Nec nam aliquam sem et
                    tortor. Aliquam ut porttitor leo a diam sollicitudin tempor. Quam adipiscing vitae proin
                    sagittis nisl. Enim ut tellus elementum sagittis vitae et. Ac felis donec et odio pellentesque
                    diam. Tortor at risus viverra adipiscing at in tellus integer feugiat. Praesent elementum
                    facilisis leo vel fringilla est ullamcorper. Vulputate eu scelerisque felis imperdiet proin
                    fermentum leo vel orci. A scelerisque purus semper eget duis at tellus. Dui sapien eget mi
                    proin. Diam sit amet nisl suscipit adipiscing. Tincidunt arcu non sodales neque sodales ut etiam
                    sit.
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