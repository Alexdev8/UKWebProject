import React from "react";

const Roman = () => {
    return (

        <div className="roman-content">
            <section id="roman-introduction">
                <div className="roman-container">
                    <h1>Bienvenue à l'Attraction Romaine !</h1>
                    <p>Découvrez une aventure passionnante dans l'univers des Romains. Longez le mur d'Hadrien à la découverte de paysages époustouflants et de créations étonnantes.</p>
                    <button>Réserver maintenant</button>
                </div>
            </section>

            <section id="roman-perso">
                <div className="roman-viking">
                    <img src={require("./resources/persoviking.PNG")} alt="persoroman"></img>
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