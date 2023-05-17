import React from "react";
import {Link, useNavigate} from "react-router-dom";

const CenturyWar = () => {
    const navigate=useNavigate();
    return (
        <div className="centurywar-content">
            <section id="centurywar-introduction">
                <div className="centurywar-container">
                    <h1>A Journey through the Hundred Years War</h1>
                    <p>A Journey through the Hundred Years War offers a captivating blend of education and entertainment, making it an ideal attraction for school groups, families, and history buffs. Experience the thrill of the battlefield, the intrigue of political alliances, and the resilience of those who fought for their beliefs in this pivotal period of European history.

                        Step into the past and let "The War of the Roses: A Journey through the Hundred Years War" transport you to a time of knights, kings, and everlasting conflict. Brace yourself for an adventure that will leave you inspired and enlightened about one of history's most enduring and influential wars.</p>
                    <button className={"button-centurywar"} onClick={() => navigate("/order/tickets")}>GET A TICKET NOW</button>
                </div>
            </section>

            <section id="centurywar-perso">
                <div className="perso-centurywar">
                    <img src={require("./resources/perso-centurywar.png")} alt="persocenturywar"></img>
                    <p>Catherine (Henry IV Daughter) </p>
                </div>
            </section>

            <section id="centurywar-description">
                <div className="centurywar-container">
                    <h2>Description</h2>
                    <p>Step back in time and immerse yourself in the epic conflict that shaped medieval Europe - the Hundred Years War. Our immersive attraction takes you on a thrilling and educational adventure through this historic era, bringing to life the fierce battles, political intrigue, and heroic tales of valor.</p>
                    <p>As you enter, you'll be transported to the 14th and 15th centuries, a time when England and France clashed in a bitter struggle for supremacy. The attraction is meticulously designed to recreate the sights, sounds, and atmosphere of the era, ensuring an unforgettable experience for history enthusiasts of all ages.</p>
                    <p>Prepare to witness iconic battles such as Crécy, Poitiers, and Agincourt, where armies clashed in thunderous combat. Through state-of-the-art audiovisual presentations, you'll stand on the front lines, hearing the war cries, the clash of swords, and the thunderous hooves of charging knights.</p>
                    <p>Explore interactive exhibits that offer insights into the strategies and weaponry employed by both sides. Get a firsthand look at the armor and weapons used by knights and archers, and learn about the advancements in military technology that shaped the outcome of the war.</p>
                </div>
            </section>

            <section id="centurywar-histoire">
                <div className="centurywar-container">
                    <h2>History</h2>
                    <p>"The War of the Roses: A Journey through the Hundred Years War" offers a captivating blend of education and entertainment, making it an ideal attraction for school groups, families, and history buffs. Experience the thrill of the battlefield, the intrigue of political alliances, and the resilience of those who fought for their beliefs in this pivotal period of European history.

                        Step into the past and let "The War of the Roses: A Journey through the Hundred Years War" transport you to a time of knights, kings, and everlasting conflict. Brace yourself for an adventure that will leave you inspired and enlightened about one of history's most enduring and influential wars.</p>
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
export default CenturyWar;