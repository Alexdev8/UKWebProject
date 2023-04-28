import React from "react";

const Robinhood = () => {
    return (

        <div className="robinhood-content">
            <section id="robinhood-introduction">
                <div className="robinhood-container">
                    <h1>Bienvenue à l'Attraction Romaine !</h1>
                    <p>Découvrez une aventure passionnante dans l'univers des Romains. Longez le mur d'Hadrien à la découverte de paysages époustouflants et de créations étonnantes.</p>
                    <button>Réserver maintenant</button>
                </div>
            </section>

            <section id="robinhood-perso">
                <div className="robinhood-viking">
                    <img src="./resources/persoviking.PNG" alt="persorobinhood"></img>
                </div>
            </section>

            <section id="robinhood-description">
                <div className="robinhood-container">
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet. Sit cumque molestiae et earum illum sed deserunt porro et voluptas aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quas debitis aut voluptatem aperiam sit dicta neque sit quod distinctio ut dolore iusto.</p>
                </div>
            </section>

            <section id="robinhood-histoire">
                <div className="robinhood-container">
                    <h2>Histoire</h2>
                    <p>Lorem ipsum dolor sit amet. Sit cumque aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quas debitis aut voluptatem aperiam sit dicta neque sit quod distinctio ut dolore iusto.</p>
                </div>
            </section>
        </div>
    )
}
export default Robinhood;