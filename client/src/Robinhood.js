import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Robinhood = () => {
    const navigate=useNavigate();
    return (
        <div className="robinhood-content">
            <section id="robinhood-introduction">
                <div className="robinhood-container">
                    <h1>Bienvenue à l'Attraction Robinhood!</h1>
                    <p>Découvrez une aventure passionnante dans l'univers des Vikings. Embarquez dans notre navire à la découverte de paysages époustouflants et de créatures légendaires.</p>
                    <button className={"button-robinhood"} onClick={() => navigate("/order/tickets")}>Get A Ticket Now</button>
                </div>
            </section>

            <section id="robinhood-perso">
                <div className="perso-robinhood">
                    <img src={require("./resources/robin_hood.png")} alt="persorobinhood"></img>
                    <p>Robinhood</p>
                </div>
            </section>

            <section id="robinhood-description">
                <div className="robinhood-container">
                    <h2>Description</h2>
                    <p>L'Attraction Viking est une expérience immersive dans la culture nordique. Le voyage commence dans le fjord de Bergen, où les visiteurs embarquent sur un navire viking authentique. Pendant le trajet, les passagers pourront profiter de la vue sur les montagnes et les fjords, ainsi que sur la faune et la flore locale.</p>
                    <p>Après quelques minutes de navigation, le navire arrive sur une ile mystérieuse où les visiteurs peuvent explorer un village viking reconstitué. Ils pourront découvrir comment les Vikings vivaient, travaillaient et se battaient. Les visiteurs pourront également rencontrer des artisans qui recréent des objets du quotidien, des bijoux et des armes.</p>
                    <p>Après avoir visité le village, les visiteurs retourneront sur le navire pour un retour au fjord de Bergen. Pendant le trajet de retour, les passagers pourront profiter de spectacles de combat de gladiateurs vikings, de chants traditionnels et de danses.</p>
                </div>
            </section>

            <section id="robinhood-histoire">
                <div className="robinhood-container">
                    <h2>Histoire</h2>
                    <p>L'Attraction Viking a été créée pour permettre aux visiteurs de découvrir la culture nordique de manière immersive et interactive. Le parc a travaillé avec des historiens pour recréer les navires, les bâtiments et les objets du quotidien avec</p>
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
export default Robinhood;