import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Robinhood = () => {
    const navigate=useNavigate();
    return (
        <div className="robinhood-content">
            <section id="robinhood-introduction">
                <div className="robinhood-container">
                    <h1>Welcome in the Sherwood's forest</h1>
                    <p>Lorem ipsum dolor sit amet. Sit cumque molestiae et earum illum sed deserunt porro et voluptas aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quasLorem ipsum dolor sit amet. Sit cumque molestiae et earum illum sed deserunt porro et voluptas aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quas</p>
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
                    <p>Step into Sherwood Forest and join the legendary outlaw, Robin Hood, on an exhilarating journey of justice, courage, and camaraderie. Our immersive attraction brings to life the timeless tale of Robin Hood and his band of Merry Men, offering an unforgettable experience for adventurers of all ages.</p>
                    <p>As you enter, you'll find yourself transported to medieval England, where the noble and the oppressed clashed in a battle against injustice. The attraction is meticulously crafted to recreate the lush greenery, winding paths, and hidden hideouts of Sherwood Forest, providing an immersive and authentic setting.</p>
                    <p>Prepare to embark on a series of thrilling adventures as you follow in the footsteps of Robin Hood. Test your skills in our archery range, where you'll receive expert guidance on how to hit the bullseye just like the legendary archer himself. Feel the rush of adrenaline as you aim, release, and watch your arrow soar through the air.</p>
                </div>
            </section>

            <section id="robinhood-histoire">
                <div className="robinhood-container">
                    <h2>History</h2>
                    <p>Join Robin Hood's band of Merry Men in their daring escapades against the tyrannical Sheriff of Nottingham. Traverse through the forest, navigating secret passages and hidden trails, as you engage in exciting challenges and encounters with characters from the legendary tale. Will you help rescue Maid Marian or outsmart the sheriff's guards? The choice is yours.

                        Immerse yourself in the folklore and history surrounding Robin Hood through interactive exhibits that showcase the era's costumes, weaponry, and historical context. Learn about the societal issues that plagued medieval England and the significance of Robin Hood's fight for justice and equality.

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
export default Robinhood;