import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Viking = () => {
    const navigate=useNavigate();
    return (
            <div className="viking-content">
                <section id="viking-introduction">
                    <div className="viking-container">
                        <h1>The Vikings !</h1>
                        <p>Découvrez une aventure passionnante dans l'univers des Vikings. Embarquez dans notre navire à la découverte de paysages époustouflants et de créatures légendaires.</p>
                        <button className={"button-viking"} onClick={() => navigate("/order/tickets")}>GET A TICKET NOW</button>
                    </div>
                </section>

                <section id="viking-perso">
                    <div className="perso-viking">
                        <img src={require("./resources/persoviking.png")} alt="persoviking"></img>
                        <p>Halfdan Ragnarsson </p>
                    </div>
                </section>

                <section id="viking-description">
                    <div className="viking-container">
                        <h2>Description</h2>
                        <p>The Viking Attraction is an immersive experience in Nordic culture. The journey begins in the Bergen Fjord, where visitors board an authentic Viking ship. During the journey, passengers will be able to enjoy views of mountains and fjords, as well as local flora and fauna.</p>
                        <p>After a few minutes of navigation, the ship arrives on a mysterious island where visitors can explore a reconstructed Viking village. They will be able to discover how the Vikings lived, worked and fought. Visitors will also be able to meet artisans who recreate everyday objects, jewelry and weapons.</p>
                        <p>After visiting the village, visitors will return to the ship for a return trip to Bergen Fjord. During the return trip, passengers can enjoy Viking gladiator combat shows, traditional songs and dances.</p>
                    </div>
                </section>

                <section id="viking-histoire">
                    <div className="viking-container">
                        <h2>History</h2>
                        <p>Our knowledgeable guides, dressed in period attire, will share fascinating tales and insights about the Vikings. From the brilliant naval strategies employed to the personal stories of heroism and tragedy, their captivating narratives will transport you back in time and immerse you in the triumphs and tribulations of this historic event.</p>
                    </div>
                </section>
                <section>
                    <div className="comment-section" id="comment-section">
                        <div className="comment">
                            <p className="comment-text">
                                "If you love history, art, and poetry, Shadows of Britannia is a must-see.";
                            </p>
                            "@ArtsAndPoetryFever";
                        </div>
                        <div className="comment">
                            <p className="comment-text">
                                "If you love history, art, and poetry, Shadows of Britannia is a must-see.";
                            </p>
                            "@ArtsAndPoetryFever";
                        </div>
                        <div className="comment">
                            <p className="comment-text">
                                "If you love history, art, and poetry, Shadows of Britannia is a must-see.";
                            </p>
                            "@ArtsAndPoetryFever";
                        </div>
                        <div className="comment">
                            <p className="comment-text">
                                "If you love history, art, and poetry, Shadows of Britannia is a must-see.";
                            </p>
                            "@ArtsAndPoetryFever";
                        </div>
                        <div className="comment">
                            <p className="comment-text">
                                "If you love history, art, and poetry, Shadows of Britannia is a must-see.";
                            </p>
                            "@ArtsAndPoetryFever";
                        </div>
                        <div className="comment">
                            <p className="comment-text">
                                "If you love history, art, and poetry, Shadows of Britannia is a must-see.";
                            </p>
                            "@ArtsAndPoetryFever";
                        </div>
                    </div>
                    <div className="comment-input">
                        <form action="submit">
                            <input className="form-comments" type="text" placeholder="Your feedback"/>
                            <button className="button-attraction">Submit</button>
                        </form>
                    </div>
                </section>
            </div>

            )
    }
export default Viking;