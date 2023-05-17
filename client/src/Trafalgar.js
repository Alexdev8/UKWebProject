import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Trafalgar = () => {
    const navigate=useNavigate();
    return (
        <div className="trafalgar-content">
            <section id="trafalgar-introduction">
                <div className="trafalgar-container">
                    <h1>Victory at Trafalgar: A Naval Odyssey</h1>
                    <p>Découvrez une aventure passionnante dans l'univers des Vikings. Embarquez dans notre navire à la découverte de paysages époustouflants et de créatures légendaires.</p>
                    <button className={"button-trafalgar"} onClick={() => navigate("/order/tickets")}>GET A TICKET NOW</button>
                </div>
            </section>

            <section id="trafalgar-perso">
                <div className="trafalgar-viking">
                    <img src={require("./resources/perso-trafalgar.png")} alt="persotrafalgar"></img>
                    <p>Horatio Nelson</p>
                </div>
            </section>

            <section id="trafalgar-description">
                <div className="trafalgar-container">
                    <h2>Description</h2>
                    <p>Prepare to set sail on an immersive adventure that will take you back to one of the most pivotal moments in naval history - the Battle of Trafalgar. Our captivating attraction allows you to relive the epic clash of mighty warships, the strategic brilliance of Admiral Lord Nelson, and the heroic sacrifice of those who fought for their nations.</p>
                    <p>Step into our meticulously recreated naval dockyard, where you'll be transported to the early 19th century. Immerse yourself in the sights, sounds, and atmosphere of the era as you embark on a journey through the lead-up to the battle and its gripping aftermath.</p>
                    <p>Experience the thrill of standing on the deck of a majestic warship as you navigate through interactive exhibits. Learn about the different types of vessels that participated in the battle, from the massive ships of the line to the nimble frigates. Discover the intricacies of naval warfare as you explore the ship's cannons, the intricately rigged sails, and the commanding officer's quarters.</p>
                </div>
            </section>

            <section id="trafalgar-histoire">
                <div className="trafalgar-container">
                    <h2>History</h2>
                    <p>Through state-of-the-art audiovisual presentations, witness the intensity and chaos of the Battle of Trafalgar unfold before your eyes. Feel the rumble of cannons as the mighty fleets clash, and marvel at the skill and bravery of the sailors who fought with unwavering resolve. Gain a deeper understanding of the battle's significance and its impact on the course of history.

                        Engage in interactive activities that highlight the tactics employed by both the British and French fleets. Test your skills in ship-to-ship combat simulations, strategize to outmaneuver your opponents, and experience the challenges faced by sailors in a battle of such magnitude.

                    </p>
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
export default Trafalgar;