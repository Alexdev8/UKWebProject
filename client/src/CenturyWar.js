import React from "react";
import {Link, useNavigate} from "react-router-dom";

const CenturyWar = () => {
    const navigate=useNavigate();
    return (
        <div className="centurywar-content">
            <section id="centurywar-introduction">
                <div className="centurywar-container">
                    <h1>Bienvenue à l'Attraction CenturyWar !</h1>
                    <p>Découvrez une aventure passionnante dans l'univers des Vikings. Embarquez dans notre navire à la découverte de paysages époustouflants et de créatures légendaires.</p>
                    <button className={"button-centurywar"} onClick={() => navigate("/order/tickets")}>GET A TICKET NOW</button>
                </div>
            </section>

            <section id="centurywar-perso">
                <div className="centurywar-viking">
                    <img src={require("./resources/perso-centurywar.png")} alt="persocenturywar"></img>
                </div>
            </section>

            <section id="centurywar-description">
                <div className="centurywar-container">
                    <h2>Description</h2>
                    <p>L'Attraction Viking est une expérience immersive dans la culture nordique. Le voyage commence dans le fjord de Bergen, où les visiteurs embarquent sur un navire viking authentique. Pendant le trajet, les passagers pourront profiter de la vue sur les montagnes et les fjords, ainsi que sur la faune et la flore locale.</p>
                    <p>Après quelques minutes de navigation, le navire arrive sur une ile mystérieuse où les visiteurs peuvent explorer un village viking reconstitué. Ils pourront découvrir comment les Vikings vivaient, travaillaient et se battaient. Les visiteurs pourront également rencontrer des artisans qui recréent des objets du quotidien, des bijoux et des armes.</p>
                    <p>Après avoir visité le village, les visiteurs retourneront sur le navire pour un retour au fjord de Bergen. Pendant le trajet de retour, les passagers pourront profiter de spectacles de combat de gladiateurs vikings, de chants traditionnels et de danses.</p>
                </div>
            </section>

            <section id="centurywar-histoire">
                <div className="centurywar-container">
                    <h2>Histoire</h2>
                    <p>L'Attraction Viking a été créée pour permettre aux visiteurs de découvrir la culture nordique de manière immersive et interactive. Le parc a travaillé avec des historiens pour recréer les navires, les bâtiments et les objets du quotidien avec</p>
                </div>
            </section>
        </div>
    )
}
export default CenturyWar;