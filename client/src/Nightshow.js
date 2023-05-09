import {Carousel, Pictogram} from "./Shared_components";
import {Link, useNavigate} from "react-router-dom";

const NightShowImage = [
    {
        key: 0,
        active: true,
        src: "https://sonovision.com/wp-content/uploads/sites/2/2017/10/photo1_OK-1024x576.jpg",
    },
    {
        key: 1,
        active: false,
        src: "https://www.vendeebocage.fr/app/uploads/iris-images/14168/la-cinei-scei-nie-1-puy-du-fou-1920x1080-c.jpg",
    },
    {
        key: 2,
        active: false,
        src: "https://www.lechotouristique.com/wp-content/uploads/2021/10/feux-follets-puy-du-fou.png",
    }

];

const NightShowImage2 = [
    {
        key: 0,
        active: true,
        src: "https://p0.storage.canalblog.com/00/42/498088/122328190_o.jpg",
    },
    {
        key: 1,
        active: false,
        src: "https://media.ouest-france.fr/v1/pictures/MjAxNjA2MzdjNzBmYmRkZWVlZGJiZWJmMTMwMTAyZTA0M2RmYWE?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=f2e097823941662413e6f7b27f6118f2b316f816ebc261abeff9c4603579f14b",
    },
    {
        key: 2,
        active: false,
        src: "https://p4.storage.canalblog.com/49/20/498088/102371843_o.jpg",
    },
    {
        key: 3,
        active: false,
        src: "https://static.actu.fr/uploads/2018/09/25261-180928115712882-001.jpg",
    }

];

const imgPictogram = [
    {
        id: 0,
        name: "nights_stay",
        class: "material-symbols-outlined",
        text: "Night Show"
    },
    {
        id: 1,
        name: "surround_sound",
        class: "material-symbols-outlined",
        text: "Surrounded sound"
    },
    {
        id: 2,
        name: "family_restroom",
        class: "material-symbols-outlined",
        text: "Family Show"
    }
]

function CarouselNightShow(){
    return(
        <section className="content-section nightshow">
            <h1 id="shadows-of-britannia">Shadows of Britannia: A nocturnal ode to England's storied past</h1>
            <div className="presentation-nightshow">
                <div className="nightshow-description-container">
                    <p className="nightshow-description">
                        Shadows of Britannia is a one-of-a-kind nocturnal spectacle that immerses audiences in the rich history and culture of England. Set against the backdrop of the night sky, the show uses stunning visual projections and choreographed performances to transport viewers through the ages.
                        Through the use of dynamic lighting, intricate choreography, and evocative music, Shadows of Britannia brings to life some of England's most iconic historical moments. From the Roman invasion to the Norman Conquest, from the Tudor era to the Industrial Revolution, the show paints a vivid portrait of the country's rich cultural heritage.
                        The performers are a talented and diverse group of actors, dancers, and acrobats who use their skills to create a stunning visual spectacle. They are expertly choreographed to move in harmony with the projections and music, creating a seamless and immersive experience for the audience.
                    </p>
                    <Pictogram pictograms={imgPictogram} />
                </div>

                <Carousel images={NightShowImage} />
            </div>
        </section>
    )
}

function MenuNightShow(){
    return(
        <div className="nav-nightshow">
            <nav className="navbar-nightshow">
                <li className="hover-underline-animation" onClick={(e) => document.querySelector(".nightshow-summary1").scrollIntoView()}>Presentation</li>
                <li className="hover-underline-animation"><Link to="#comment-section">Your opinion</Link></li>
                <li className="hover-underline-animation"><Link to="#nightshow-ticket">Our prices</Link></li>
            </nav>
        </div>
    )
}

function CarouselNightShow2(){
    return(
        <section className="content-section nightshow">
            <h1 id="shadows-of-britannia"> A Historic journey brought to Life by passionate Performers</h1>
            <Carousel images={NightShowImage2} />
            <div className="text-nightshow-summary1">
                <p className="nightshow-description presentation">
                    The storyteller began to speak in a voice that was both powerful and soothing, inviting the audience
                    to join her on a journey through time. With each word, the projections on the screen began to shift
                    and change, revealing new scenes of England's rich and complex history.

                    The audience watched in awe as they were transported to ancient Britannia, where they witnessed the
                    arrival of the Roman legions and the epic battles that followed. They saw the rise of powerful
                    empires and the struggles of legendary heroes like King Arthur and his knights of the round table.

                    As the show continued, the audience was taken on a journey through the centuries, from the time of
                    the Viking invasions to the Norman Conquest, and from the Tudor dynasty to the Industrial
                    Revolution.
                </p>
                <p className="nightshow-description appreciation">

                    Behind the mesmerizing performance of Shadows of Britannia are the passionate and dedicated volunteers who work tirelessly to make the show a reality. These volunteers are individuals who are driven by their love of history, culture, and the arts, and are willing to give their time and energy to create a truly magical experience for the audience.

                    Their work is essential to the success of the show, with volunteers working in various capacities such as set design, lighting and sound, costuming, and stage management. They come from all walks of life, but share a common bond in their commitment to bringing the story of England to life.
                </p>
            </div>
        </section>
    )
}

const comments = [
    {
        id: 0,
        comment: "Shadows of Britannia was a truly unforgettable experience.",
        author: "@HistoryLover22"
    },
    {
        id: 1,
        comment: "The combination of visuals, storytelling, and music was incredible.",
        author: "@CultureFanatic87"
    },
    {
        id: 2,
        comment: "I learned so much about England's rich history in just one show.",
        author: "@LearnSomethingNew33"
    },
    {
        id: 3,
        comment: "The performers were so talented and brought each scene to life with precision and grace.",
        author: "@DancingQueen99"
    },
    {
        id: 4,
        comment: "The use of shadows and light was a stroke of genius.",
        author: "@ShadowEnthusiast55"
    },
    {
        id: 5,
        comment: "Shadows of Britannia was a celebration of England's diverse culture and heritage.",
        author: "@BritanniaCelebration"
    },
    {
        id: 6,
        comment: "The storyteller's voice was so powerful and emotive that it left me in awe.",
        author: "@PowerfulStoryteller",
    },
    {
        id: 7,
        comment: "If you love history, art, and poetry, Shadows of Britannia is a must-see.",
        author: "@ArtsAndPoetryFever",
    }
]

function Comments({comments}){
    return(
        <>
            <div className="comment-section" id="comment-section">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p className="comment-text">
                            {comment.comment}
                        </p>
                        {comment.author}
                    </div>
                ))}
            </div>
            <div className="comment-input">
                <form action="submit">
                    <input className="form-comments" type="text" placeholder="Your feedback"/>
                    <button className="button-nightShow">Submit</button>
                </form>
            </div>
        </>

    )
}

const ticketNightShow = [
    {
        key: 0,
        id: "undated-ticket-div",
        img: "https://www.lechotouristique.com/wp-content/uploads/2021/10/feux-follets-puy-du-fou.png",
        title: "Shadows of Britannia",
        text: "Attend the biggest show in England and live an unforgettable experience"
    },
    {
        key: 1,
        id: "dated-ticket-div",
        img: "https://storage.lebonguide.com/crop-1600x700/40/15/4123F95F-337A-472D-8255-60BCA42EA6BD.png",
        title: "Shadows of Britannia + Rose Crown",
        text: "Come visit Rose Crown park and enjoy the great night show Shadows of Britannia"
    }
]

function TicketNightShow({tickets}){
    const navigate = useNavigate();
    //TODO renommer la classe du div de ce composant "ticket-type-selection"
    return(
        <div className="ticket-type-selection" id="nightshow-ticket">
            {tickets.map((ticket) => (
                <div id={ticket.id} className="card card-tickets" onClick={() => navigate("../order")}>
                    <img src={ticket.img} className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {ticket.title}
                        </h5>
                        <p className="card-text">
                            {ticket.text}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    )
}

function Shadows(){
    return(
        <div>
            <CarouselNightShow/>
            <MenuNightShow />
            <CarouselNightShow2/>
            <Comments comments={comments}/>
            <section className="content-section ticket-nightShow">
                <h1 className="ticket-nightShow-choice">Shadows of Britannia tickets</h1>
                <TicketNightShow tickets={ticketNightShow} />
            </section>
        </div>

    )
}

export default Shadows;