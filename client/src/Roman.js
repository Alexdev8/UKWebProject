import React from "react";
import {useNavigate} from "react-router-dom";

const Roman = () => {
    const navigate=useNavigate();
    return (

        <div className="roman-content">
            <section id="roman-introduction">
                <div className="roman-container">
                    <h1>Hadrian's wall Roman adventure</h1>
                    <p>Hadrian's wall Lorem ipsum dolor sit amet. Sit cumque molestiae et earum illum sed deserunt porro et voluptas aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quas</p>
                    <button className={"button-roman"} onClick={() => navigate("/order/tickets")}>GET A TICKET NOW</button>
                </div>
            </section>

            <section id="roman-perso">
                <div className="perso-roman">
                    <img src={require("./resources/perso-roman.png")} alt="persoroman"></img>
                    <p>Antinous </p>
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
                    <h2>History</h2>
                    <p>Lorem ipsum dolor sit amet. Sit cumque aliquid ut nemo doloremque. Ex voluptatem illum sit earum ipsum ut nihil enim hic ipsum reprehenderit. Et tenetur ullam eum dolorem corrupti aut nisi aperiam. Nam quas debitis aut voluptatem aperiam sit dicta neque sit quod distinctio ut dolore iusto.</p>
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
export default Roman;