import { Link } from "react-router-dom";

function Offers() {
    //TODO voir texte écrit sur cette page

    return (
        <div className="main-container">
            <div className="content-section">
                <button className={"button-offers"}>
                    <Link to="../order/tickets">Buy a ticket</Link>
                </button>
                <p>
                    You can find here our three different types of tickets. Firstly, the
                    1-day undated pass is a ticket to access the park whenever you want
                    for one day. Secondly, there is a 1-7 days dated pass which allows
                    you to access the park for a duration that you choose. There is also a
                    special pass that allows you to cut the queue.
                </p>
                <button className={"button-offers"}>
                    <Link to="../order/hotel">Book a night</Link>
                </button>
                <p>
                    You can find here our three different types of tickets. Firstly, the
                    1-day undated pass is a ticket to access the park whenever you want
                    for one day. Secondly, there is a 1-7 days dated pass which allows
                    you to access the park for a duration that you choose. There is also a
                    special pass that allows you to cut the queue.
                </p>
                <button className={"button-offers"}>
                    <Link to="../order/restaurant">Book a table</Link>
                </button>
                <p>
                    You can find here our three different types of tickets. Firstly, the
                    1-day undated pass is a ticket to access the park whenever you want
                    for one day. Secondly, there is a 1-7 days dated pass which allows
                    you to access the park for a duration that you choose. There is also a
                    special pass that allows you to cut the queue.
                </p>
                <br />
                <p>
                    Ajouter ici des informations sur nos tickets et leurs avantages, les
                    hotels et leurs avantages (en bref avec lien vers page dédiée) et les
                    restau avec à chaque fois un bouton pour acheter.
                </p>
            </div>
        </div>
    );
}

export default Offers;