import {Link} from "react-router-dom";

function Offers() {
    //TODO voir texte écrit sur cette page

    return (
        <div className="main-container">
            <div className="content-section">
                <Link to="../order/tickets">Buy a ticket</Link>
                <Link to="../order/hotel">Book a night</Link>
                <Link to="../order/restaurant">Book a table</Link>
                <br/>
                Ajouter ici des informations sur nos tickets et leurs avantages, les hotels et leurs avantages (en bref avec lien vers page dédiée) et les restau avec à chaque fois un bouton pour acheter
            </div>
        </div>
    )
}

export default Offers;