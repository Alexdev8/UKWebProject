import {Carousel} from "./Shared_components";
import {useNavigate} from "react-router-dom";

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

function CarouselNightShow(){
    return(
        <div>
            <h1 id="shadowsofbritannia">Shadows of Britannia: A nocturnal ode to England's storied past</h1>
            <div id="presentation-nighshow">
                <h2>Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic
                    journey through the history of England. Set against the backdrop of the night sky, the show
                    features stunning visual projections, choreographed performances, and a captivating narrative
                    that brings England's storied past to life.</h2>
                <Carousel images={NightShowImage} />
            </div>
        </div>
    )
}

function MenuNightShow(){
    return(
        <div className="nav-nightshow">
            <nav className="navbar-nightshow">
                <li className="hover-underline-animation" onClick={(e) => document.querySelector(".nightshow-summary1").scrollIntoView()}>Presentation</li>
                <li className="hover-underline-animation">Your opinion</li>
                <li className="hover-underline-animation">Our prices</li>
            </nav>
        </div>
    )
}

function CarouselNightShow2(){
    return(
        <div className="nightshow-summary1" id="nightshow-summary1">
            <Carousel images={NightShowImage2}/>
            <div className="text-nightshow-summary1">
                <h2>The storyteller began to speak in a voice that was both powerful and soothing, inviting the audience
                    to join her on a journey through time. With each word, the projections on the screen began to shift
                    and change, revealing new scenes of England's rich and complex history.

                    The audience watched in awe as they were transported to ancient Britannia, where they witnessed the
                    arrival of the Roman legions and the epic battles that followed. They saw the rise of powerful
                    empires and the struggles of legendary heroes like King Arthur and his knights of the round table.

                    As the show continued, the audience was taken on a journey through the centuries, from the time of
                    the Viking invasions to the Norman Conquest, and from the Tudor dynasty to the Industrial
                    Revolution.
                </h2>
            </div>
        </div>
    )
}

function Comments(){
    return(
        <div className="comments" id="comments">
            <button className="comments">
                Shadows of Britannia was a truly unforgettable experience. <br/> @HistoryLover22
            </button>
            <button className="comments">
                The combination of visuals, storytelling, and music was
                incredible. <br/> @CultureFanatic87</button>
            <button className="comments">
                I learned so much about England's rich history in just one show. <br/> @LearnSomethingNew33</button>
            <button className="comments">
                The performers were so talented and brought each scene to life with precision and grace. <br/> @DancingQueen99</button>
            <button className="comments">
                The use of shadows and light was a stroke of genius. <br/> @ShadowEnthusiast55
            </button>
            <button className="comments">
                Shadows of Britannia was a celebration of England's diverse culture and heritage.<br/> @BritanniaCelebration</button>
            <button className="comments">
                The storyteller's voice was so powerful and emotive that it left me in awe.<br/> @PowerfulStoryteller
            </button>
            <button className="comments">
                If you love history, art, and poetry, Shadows of Britannia is a must-see. <br/> @ArtsAndPoetryFever
            </button>
        </div>
    )
}

function TicketNightShow(){
    const navigate = useNavigate();
    //TODO renommer la classe du div de ce composant "ticket-type-selection"
    return(
        <div className="ticket-type-selection" id="nightshow-ticket">
            <div id="undated-ticket-div" className="card" onClick={() => navigate("../order")}>
                <img src="https://www.lechotouristique.com/wp-content/uploads/2021/10/feux-follets-puy-du-fou.png"
                     className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Shadows of Britannia</h5>
                        <p className="card-text">Attend the biggest show in England and live an unforgettable
                            experience</p>
                    </div>
            </div>
            <div id="dated-ticket-div" className="card" onClick={() => navigate("../order")}>
                <img src="https://storage.lebonguide.com/crop-1600x700/40/15/4123F95F-337A-472D-8255-60BCA42EA6BD.png"
                     className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Shadows of Britannia + Rose Crown</h5>
                        <p className="card-text">Come visit Rose Crown park and enjoy the great night show Shadows of
                            Britannia</p>
                    </div>
            </div>
        </div>
    )
}

function Shadows(){
    return(
        <div>
            <CarouselNightShow/>
            <MenuNightShow />
            <CarouselNightShow2/>
            <Comments />
            <TicketNightShow />
        </div>

    )
}

export default Shadows;