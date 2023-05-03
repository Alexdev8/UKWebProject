import {Link, Outlet} from "react-router-dom";
import {AccordionBuild} from "./shared_components";

const listItems = [
    {
        id: "One",
        ariaExpanded: true,
        name: "100 years war",
        description: "parc d'attraction lie a l'univers disney",
        picture: "https://images.lindependant.fr/api/v1/images/view/5d54055fd286c202264fd612/large/image.jpg?v=1",
        link: "",
        alt: "Reconstitution photo"
    },
    {
        id: "Two",
        ariaExpanded: false,
        name: "Vikings Invasion",
        description: "",
        picture: "https://leisureopportunities.co.uk/images/971601_409024.jpg",
        link: "https://www.parcasterix.fr/?gclid=CjwKCAjwuqiiBhBtEiwATgvixC_Juz7DtddvhwgH0ald1r_148R6fH401kQs7AuxY28ldVlxfBZ7thoCM8IQAvD_BwE&gclsrc=aw.ds",
        alt: "asterix-logo"
    },
    {
        id: "Three",
        ariaExpanded: false,
        name: "Construction of Hadrian's Wall",
        description: "",
        picture: "",
        link: "https://static.nationalgeographic.fr/files/styles/image_3200/public/gettyimages-486453968.jpg?w=1900&h=1267",
        alt: "puy-du-fou-logo"
    },
    {
        id: "Four",
        ariaExpanded: false,
        name: "Construction of Hadrian's Wall",
        description: "",
        picture: "",
        link: "https://static.nationalgeographic.fr/files/styles/image_3200/public/gettyimages-486453968.jpg?w=1900&h=1267",
        alt: "puy-du-fou-logo"
    }
]



function Accordion(){
    return(
            <AccordionBuild listItems={listItems} />
    )
}



export default Accordion;