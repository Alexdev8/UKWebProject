import {Link, Outlet} from "react-router-dom";
import {AccordionBuild, Calendar} from "./Shared_components";
import vintageVillage from "./VintageVillage";

const listItems = [
    {
        id: "One",
        ariaExpanded: true,
        name: "Century War",
        restriction : "Minimum size : none",
        description: "",
        picture: "https://images.lindependant.fr/api/v1/images/view/5d54055fd286c202264fd612/large/image.jpg?v=1",
        link: "centurywar",
        alt: "..."
    },
    {
        id: "Two",
        ariaExpanded: false,
        name: "Vikings Invasion",
        restriction : "",
        description: "Join the fearless Vikings on a thrilling journey through history as they battle fierce enemies, brave treacherous waters, and explore new lands. Experience the excitement of a Viking raid and witness the strength and skill of these legendary warriors as they conquer all who stand in their way",
        picture: "https://leisureopportunities.co.uk/images/971601_409024.jpg",
        link: "/attractions/viking",
        alt: "..."
    },
    {
        id: "Three",
        ariaExpanded: false,
        name: "Construction of Hadrian's Wall",
        restriction : "Minimum size : 1m20",
        restriction2 : "Minimum age : 12 years old",
        description: "",
        picture: "https://p0.storage.canalblog.com/00/42/498088/122328190_o.jpg",
        link: "https://static.nationalgeographic.fr/files/styles/image_3200/public/gettyimages-486453968.jpg?w=1900&h=1267",
        alt: "..."
    },
    {
        id: "Four",
        ariaExpanded: false,
        name: "Robinhood",
        restriction : "",
        description: "Once upon a time, in the lush green forests of Sherwood, a charismatic and skilled archer named Robin Hood emerged. With his band of merry men, he fearlessly stole from the rich and corrupt, sharing the wealth with the impoverished villagers. Robin Hood's legendary tales of justice and compassion continue to inspire generations, reminding us of the power of standing up for the downtrodden.",
        picture: "https://images.immediate.co.uk/production/volatile/sites/22/2018/09/GettyImages-530157788-4b7d005.jpg",
        link: "robinhood",
        alt: "..."
    },
    {
        id: "Five",
        ariaExpanded: false,
        name: "Trafalgar",
        restriction : "",
        description: ".",
        picture: "",
        link: "trafalgar",
        alt: "..."
    },
    {
        id: "Six",
        ariaExpanded: false,
        name: "Shadows of Britannia",
        restriction : "",
        description: "Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic journey through the history of England. Set against the backdrop of the night sky, the show features stunning visual projections, choreographed performances, and a captivating narrative that brings England's storied past to life.",
        picture: "https://sonovision.com/wp-content/uploads/sites/2/2017/10/photo1_OK-1024x576.jpg",
        link: "shadows-of-britannia",
        alt: "..."
    }
]

const eventsShow = [
    {
        id: "years-war",
        type: "attraction",
        name: "100 Years War",
        date: [
            {day: "Monday", start: 11},
            {day: "Monday", start: 15},
            {day: "Tuesday", start: 13},
            {day: "Tuesday", start: 17},
            {day: "Wednesday", start: 11},
            {day: "Thursday", start: 13},
            {day: "Friday", start: 10},
            {day: "Friday", start: 14},
            {day: "Saturday", start: 11},
            {day: "Saturday", start: 16},
            {day: "Sunday", start: 10},
            {day: "Sunday", start: 15}
        ]
    },
    {
        id: "viking-war",
        type: "attraction",
        name: "Viking Invasion",
        date: [
            {day: "Monday", start: 11},
            {day: "Monday", start: 12},
            {day: "Tuesday", start: 14},
            {day: "Tuesday", start: 15},
            {day: "Wednesday", start: 11},
            {day: "Wednesday", start: 12},
            {day: "Friday", start: 16},
            {day: "Friday", start: 17},
            {day: "Saturday", start: 13},
            {day: "Saturday", start: 14},
            {day: "Sunday", start: 11},
            {day: "Sunday", start: 12}
        ]
    },
    {
        id: "roman-war",
        type: "attraction",
        name: "Hadrian's Wall",
        date: [
            {day: "Monday", start: 13},
            {day: "Monday", start: 16},
            {day: "Tuesday", start: 10},
            {day: "Tuesday", start: 18},
            {day: "Wednesday", start: 13},
            {day: "Wednesday", start: 17},
            {day: "Thursday", start: 11},
            {day: "Thursday", start: 16},
            {day: "Friday", start: 12},
            {day: "Saturday", start: 15},
            {day: "Saturday", start: 19},
            {day: "Sunday", start: 13},
            {day: "Sunday", start: 18}
        ]
    },
    {
        id: "robinhood-war",
        type: "attraction",
        name: "RobinHood Adventure",
        date: [
            {day: "Monday", start: 14},
            {day: "Tuesday", start: 16},
            {day: "Wednesday", start: 18},
            {day: "Thursday", start: 15},
            {day: "Thursday", start: 16},
            {day: "Friday", start: 18},
            {day: "Saturday", start: 10},
            {day: "Sunday", start: 13},
            {day: "Sunday", start: 16}
        ]
    },
    {
        id: "trafalgar-war",
        type: "attraction",
        name: "Trafalagar Law",
        date: [
            {day: "Monday", start: 17},
            {day: "Monday", start: 18},
            {day: "Tuesday", start: 13},
            {day: "Wednesday", start: 14},
            {day: "Wednesday", start: 15},
            {day: "Thursday", start: 18},
            {day: "Saturday", start: 17},
            {day: "Saturday", start: 18},
            {day: "Sunday", start: 16},
            {day: "Sunday", start: 17}
        ]
    }
]


function Attractions(){
    const handleClick = () => {
        window.scrollTo(0, 1100);
    };

    return(
        <>
            <section className="content-section attraction-presentation-container">
                <h1 className="titre-attraction-page">The Rose Crown : the Garden of English Heritage</h1>
                <div className="container-text-img-attraction">
                    <div className="text-description-park">
                        <b>Ladies and Gentleman, ...</b> <br/> Welcome to our extraordinary amusement park, where an array of attractions awaits you! Get ready to embark on an adventure through a variety of thrilling experiences that will leave you exhilarated and amazed.
                    </div>
                    <img className="img-park" src={require("./resources/parcvudehaut.jpeg")}/>

                </div>
                <p className="presentation-attraction">
                    Step back in time and immerse yourself in the thrilling history of England at our one-of-a-kind attraction! Whether you're a fan of the Roman era, the Vikings, the Hundred Years War, or the legend of Robin Hood, we have something for everyone.

                    For a taste of Viking culture, visit our longhouse and learn about their fearsome weapons and seafaring adventures. Take part in a mock battle, or try your hand at Viking crafts such as weaving and blacksmithing.

                    Experience the excitement of the Hundred Years War, as you join the English or French army and fight for victory on our interactive battlefield. See our knights in shining armor jousting for the honor of their kingdoms, or learn about the life of a medieval archer.

                    And of course, no trip to our attraction would be complete without a visit to Sherwood Forest and the legend of Robin Hood. Join Robin and his band of merry men on a daring adventure through the forest, complete with archery contests, sword fighting, and a chance to meet the legendary hero himself.

                    At our attraction, history comes alive in thrilling and interactive ways, making it a must-visit for history lovers of all ages. So don't miss out on this exciting opportunity to step back in time and experience the wonders of England's past!
                </p>
                <h2 className="accordion-attraction-title">Discover our amazing attractions and shows</h2>
                <AccordionBuild listItems={listItems} />

            </section>
            <section className="content-section">
                <h1 className="calendar-presentation">Planing of the shows</h1>
                <Calendar events={eventsShow} />
                <div className="lehends">
                    <div className="indicator-container">
                        <div className="color-lehend year-war-lehend"></div>
                        <p className="text-lehends">100 years war</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend viking-lehend"></div>
                        <p className="text-lehends">Viking Invasion</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend roman-lehend"></div>
                        <p className="text-lehends">Hadrian's Wall</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend robinhood-lehend"></div>
                        <p className="text-lehends">RobinHoods Adventure</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend trafalgar-lehend"></div>
                        <p className="text-lehends">Triffouilli</p>
                    </div>
                </div>
                <p className="workshop-link">
                    If you need to know the planning for the workshop, <Link to={"../workshop"} onClick={handleClick}> click here </Link>
                </p>

            </section>
        </>

    )
}



export default Attractions;