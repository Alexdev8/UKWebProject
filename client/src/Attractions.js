import {Link, Outlet} from "react-router-dom";
import {AccordionBuild} from "./shared_components";

const listItems = [
    {
        id: "One",
        ariaExpanded: true,
        name: "disney",
        description: "parc d'attraction lie a l'univers disney",
        picture: "",
        link: "https://www.disneylandparis.com/fr-fr/attractions/",
        alt: "disney-logo"
    },
    {
        id: "Two",
        ariaExpanded: false,
        name: "Parc Asterix",
        description: "parc de gaulois",
        picture: "",
        link: "https://www.parcasterix.fr/?gclid=CjwKCAjwuqiiBhBtEiwATgvixC_Juz7DtddvhwgH0ald1r_148R6fH401kQs7AuxY28ldVlxfBZ7thoCM8IQAvD_BwE&gclsrc=aw.ds",
        alt: "asterix-logo"
    },
    {
        id: "Three",
        ariaExpanded: false,
        name: "Puy du fou",
        description: "parc historique",
        picture: "",
        link: "https://www.puydufou.com/france/fr",
        alt: "puy-du-fou-logo"
    }
]



function Accordion(){
    return(
            <AccordionBuild listItems={listItems} />
    )
}



export default Accordion;