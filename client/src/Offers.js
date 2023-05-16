import { Link } from "react-router-dom";

function Offers() {
    //TODO voir texte écrit sur cette page

    return (
        <div className="main-container">
            <div className="content-section">
                <div className="offer">
                    <h1>Our Offers</h1>
                    <img
                        className="offer-image"
                        src="https://sonovision.com/wp-content/uploads/sites/2/2017/10/photo1_OK-1024x576.jpg"
                        alt="Offer 1"
                    />
                    <p>
                        You can find here our three different types of tickets. Firstly, the
                        1-day undated pass is a ticket to access the park whenever you want
                        for one day. Secondly, there is a 1-7 days dated pass which allows
                        you to access the park for a duration that you choose. There is also a
                        special pass that allows you to cut the queue.
                    </p>
                    <button className="button-trafalgar">
                        <Link to="../order/tickets">Buy a ticket</Link>
                    </button>
                </div>
                <div className="offer">
                    <img
                        className="offer-image"
                        src="https://i.pinimg.com/736x/56/08/18/560818059c8147d2660f6c22bc68d7e8--bedroom-vintage-tudor-homes.jpg"
                        alt="Offer 2"
                    />
                    <p>
                        By clicking on this button, you gain access to our hotel reservation service.
                        Experience utmost comfort and convenience during your stay with our wide range of accommodation options.
                        From luxurious suites to cozy rooms, we offer the perfect choice for every traveler.
                        Book now and secure your dream hotel for a memorable experience.
                    </p>
                    <button className="button-roman">
                        <Link to="../order/hotel">Book a night</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Offers;