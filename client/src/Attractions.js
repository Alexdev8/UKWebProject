import {Link, Outlet} from "react-router-dom";
import {AccordionBuild, Calendar} from "./Shared_components";

const listItems = [
    {
        id: "One",
        ariaExpanded: true,
        name: "100 years war",
        restriction : "",
        description: "parc d'attraction lie a l'univers disney",
        picture: "https://images.lindependant.fr/api/v1/images/view/5d54055fd286c202264fd612/large/image.jpg?v=1",
        link: "",
        alt: "Reconstitution photo"
    },
    {
        id: "Two",
        ariaExpanded: false,
        name: "Vikings Invasion",
        restriction : "",
        description: "",
        picture: "https://leisureopportunities.co.uk/images/971601_409024.jpg",
        link: "http://localhost:3000/attractions/viking",
        alt: "asterix-logo"
    },
    {
        id: "Three",
        ariaExpanded: false,
        name: "Construction of Hadrian's Wall",
        restriction : "",
        description: "",
        picture: "",
        link: "https://static.nationalgeographic.fr/files/styles/image_3200/public/gettyimages-486453968.jpg?w=1900&h=1267",
        alt: "puy-du-fou-logo"
    },
    {
        id: "Four",
        ariaExpanded: false,
        name: "Nightime Show",
        restriction : "",
        description: "Shadows of Britannia is a mesmerizing nocturnal spectacle that takes audiences on a poetic journey through the history of England. Set against the backdrop of the night sky, the show features stunning visual projections, choreographed performances, and a captivating narrative that brings England's storied past to life.",
        picture: "https://sonovision.com/wp-content/uploads/sites/2/2017/10/photo1_OK-1024x576.jpg",
        link: "http://localhost:3000/shadowsofbritannia",
        alt: "NightShow-IMG"
    }
]



function Attractions(){
    return(
        <section className="content-section">
            <AccordionBuild listItems={listItems} />
            <Calendar />
        </section>
    )
}



export default Attractions;