import React from "react";
import {useNavigate} from "react-router-dom";

const Roman = () => {
    const navigate=useNavigate();
    return (

        <div className="roman-content">
            <section id="roman-introduction">
                <div className="roman-container">
                    <h1>Bienvenue à l'Attraction Romaine !</h1>
                    <p>Découvrez une aventure passionnante dans l'univers des Romains. Longez le mur d'Hadrien à la découverte de paysages époustouflants et de créations étonnantes.</p>
                    <button className={"button-roman"} onClick={() => navigate("/order/tickets")}>GET A TICKET NOW</button>
                </div>
            </section>

            <section id="roman-perso">
                <div className="perso-roman">
                    <img src={require("./resources/perso-roman.png")} alt="persoroman"></img>
                </div>
            </section>

            <section id="roman-description">
                <div className="roman-container">
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet. Sit cumque molestiae et earum illum sed deserunt porro et voluptas aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quas debitis aut voluptatem aperiam sit dicta neque sit quod distinctio ut dolore iusto.</p>
                </div>
            </section>

            <section id="roman-histoire">
                <div className="roman-container">
                    <h2>Histoire</h2>
                    <p>Lorem ipsum dolor sit amet. Sit cumque aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quas debitis aut voluptatem aperiam sit dicta neque sit quod distinctio ut dolore iusto.</p>
                </div>
            </section>
        </div>
    )
}
export default Roman;