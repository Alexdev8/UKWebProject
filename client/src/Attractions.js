import {Link, Outlet} from "react-router-dom";
import {AccordionBuild, Calendar} from "./Shared_components";

const listItems = [
    {
        id: "One",
        ariaExpanded: true,
        name: "Century War",
        restriction : "Minimum size : none",
        restriction2 : "Minimum age : none",
        description: "parc d'attraction lie a l'univers disney",
        picture: "https://images.lindependant.fr/api/v1/images/view/5d54055fd286c202264fd612/large/image.jpg?v=1",
        link: "centurywar",
        alt: "Reconstitution photo"
    },
    {
        id: "Two",
        ariaExpanded: false,
        name: "Vikings Invasion",
        restriction : "Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic journey through the history of England. Set against the backdrop of the night sky, the show features stunning visual projections, choreographed performances, and a captivating narrative that brings England's storied past to life.",
        description: "Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic journey through the history of England. Set against the backdrop of the night sky, the show features stunning visual projections, choreographed performances, and a captivating narrative that brings England's storied past to life.",
        picture: "https://leisureopportunities.co.uk/images/971601_409024.jpg",
        link: "/attractions/viking",
        alt: "viking-logo"
    },
    {
        id: "Three",
        ariaExpanded: false,
        name: "Construction of Hadrian's Wall",
        restriction : "Minimum size : 1m20",
        restriction2 : "Minimum age : 12 years old",
        description: "Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic journey through the history of England. Set against the backdrop of the night sky, the show features stunning visual projections, choreographed performances, and a captivating narrative that brings England's storied past to life.",
        picture: "",
        link: "https://static.nationalgeographic.fr/files/styles/image_3200/public/gettyimages-486453968.jpg?w=1900&h=1267",
        alt: "Hadrian's Wall Logo"
    },
    {
        id: "Four",
        ariaExpanded: false,
        name: "Robinhood",
        restriction : "",
        restriction2: "To see with family",
        description: "Once upon a time, in the lush green forests of Sherwood, a charismatic and skilled archer named Robin Hood emerged. With his band of merry men, he fearlessly stole from the rich and corrupt, sharing the wealth with the impoverished villagers. Robin Hood's legendary tales of justice and compassion continue to inspire generations, reminding us of the power of standing up for the downtrodden.",
        picture: "https://images.immediate.co.uk/production/volatile/sites/22/2018/09/GettyImages-530157788-4b7d005.jpg",
        link: "robinhood",
        alt: "Robinhood-IMG"
    },
    {
        id: "Five",
        ariaExpanded: false,
        name: "Trafalgar",
        restriction : "",
        description: "Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic journey through the history of England. Set against the backdrop of the night sky, the show features stunning visual projections, choreographed performances, and a captivating narrative that brings England's storied past to life.",
        picture: "https://p0.storage.canalblog.com/00/42/498088/122328190_o.jpg",
        link: "trafalgar",
        alt: "Trafalgar-IMG"
    },
    {
        id: "Six",
        ariaExpanded: false,
        name: "Shadows of Britannia",
        restriction : "",
        description: "Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic journey through the history of England. Set against the backdrop of the night sky, the show features stunning visual projections, choreographed performances, and a captivating narrative that brings England's storied past to life.",
        picture: "https://sonovision.com/wp-content/uploads/sites/2/2017/10/photo1_OK-1024x576.jpg",
        link: "http://localhost:3000/shadowsofbritannia",
        alt: "NightShow-IMG"
    }
]



function Attractions(){
    return(
        <>
            <section className="content-section-attraction">
                <h1 className="titreattractionpage">RoseCrown</h1>
                <div className="container-texte-img-attraction">
                    <div className="textedescriptionparc">
                        Welcome to our extraordinary amusement park, where an array of attractions awaits you! Get ready to embark on an adventure through a variety of thrilling experiences that will leave you exhilarated and amazed. Hold on tight as you take a wild ride on our heart-pounding roller coasters, featuring gravity-defying loops, twists, and turns that will leave you breathless and craving more adrenaline. Challenge your friends and family to a friendly competition at our interactive arena, where strategic thinking and quick reflexes are key to coming out victorious. For the little ones, our charming kiddie rides provide a world of excitement and giggles. From gentle carousels to mini roller coasters, they'll create unforgettable memories of their own. As the sun sets, prepare to be dazzled by our spectacular fireworks display, lighting up the night sky in a kaleidoscope of colors and leaving you in awe of the magic that our park has to offer. So, come join us at our extraordinary amusement park and embark on an adventure you won't soon forget. Get ready for thrills, laughter, and unforgettable moments that will create memories to last a lifetime.
                    </div>
                    <img className="imgparcentier" src={require("./resources/parcvudehaut.jpeg")}/>               </div>
                <AccordionBuild listItems={listItems} />

            </section>
            <section className="content-section-attraction">

                <Calendar />
            </section>
        </>

    )
}



export default Attractions;