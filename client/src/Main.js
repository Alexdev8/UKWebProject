import {useEffect} from "react";
import {Link} from "react-router-dom";

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
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                    aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="attractions.html">
                                    <img
                                        src="https://focus.courrierinternational.com/2022/02/04/0/0/5568/3712/1280/0/60/0/a82f9b4_1644008435467-000-9ba2ne.jpg"
                                        className="carousel-img"/>
                                        <div className="carousel-caption">
                                            <h5>Attraction 1</h5>
                                            <p>A nice one</p>
                                        </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="attractions.html">
                                    <img
                                        src="https://www.parcbagatelle.com/fileadmin/user_upload/bagatelle/Baggy_Pass/Banniere-BaggyPass-Bagatelle.jpg"
                                        className="carousel-img"/>
                                        <div className="carousel-caption">
                                            <h5>Attraction 2</h5>
                                            <p>A cool one</p>
                                        </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="attractions.html">
                                    <img
                                        src="https://www.lepal.com/assets/images/background/pages/attractions.jpg?v=1680775020"
                                        className="carousel-img"/>
                                        <div className="carousel-caption">
                                            <h5>Attraction 3</h5>
                                            <p>A funny one</p>
                                        </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="attractions.html">
                                    <img
                                        src="https://www.evenement.com/wp-content/uploads/2020/01/an-amusement-park-at-night-2884693.jpg"
                                        className="carousel-img"/>
                                        <div className="carousel-caption">
                                            <h5>Attraction 4</h5>
                                            <p>An exiting one</p>
                                        </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="attractions.html">
                                    <img
                                        src="https://www.technord.com/wp-content/uploads/2020/03/Parc-attractions.jpg"
                                        className="carousel-img"/>
                                        <div className="carousel-caption">
                                            <h5>Attraction 5</h5>
                                            <p>A breathtaking one</p>
                                        </div>
                                </a>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Main;