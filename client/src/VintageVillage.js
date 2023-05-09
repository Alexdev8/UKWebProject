import {Card} from "./Shared_components"
import {useState} from "react";
const vintageVillageIMG = [
    {
        key: 0,
        id: "romanVillage",
        image: "https://congres.puydufou.com/sites/default/files/styles/max_width_1200/public/2020-09/carrousel_3_recadre_5.jpg?itok=kesu_QIK",
        title: "The Roman Village",
        caption: ""
        //In the Roman village, you'll see the impressive architecture and engineering feats that defined this civilization. Marvel at the grandeur of the aqueduct, imagine yourself as a gladiator in the arena, and explore the marketplace where merchants sell exotic goods from all corners of the empire.
    },
    {
        key: 1,
        id: "vikingVillage",
        image: "https://www.la-poze-travel.com/wp-content/uploads/2019/09/fort-de-lan-mil-puy-du-fou-3-min.jpg",
        title: "The Viking Village",
        caption: ""
    },
    {
        key: 2,
        id: "medievalVillage",
        image: "https://www.atlantic-loire-valley.com/sites/default/files/styles/slide_article_classique/public/mediatheque/images/Puy-du-Fou-La-Cite-Medievale.jpg?h=84071268&itok=o9PAlazb",
        title: "The Medieval Village",
        caption: ""
    },
    {
        key: 3,
        id: "XIXCenturiesVillage",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/18/7b/e7/e7/dans-le-decor-du-bourg.jpg",
        title: "The XIX centuries Village",
        caption: ""
    }

];

function VintageVillageImg(){

    const [selectedCard, setSelectedCard] = useState("romanVillage");

    return(
        <section className="content-section vintage-section">
            <h1>The Villages of the Rose </h1>
            <p>Welcome to our historical park where you can experience life in different eras of history. Explore our Roman village, where you can wander through streets lined with ancient buildings and witness daily life in a bustling Roman town. Take a stroll through our Viking village, where you can see skilled craftsmen at work and witness battles between fierce warriors. Step back in time to the Hundred Years War and experience life in a medieval village, where you can see knights in shining armor and watch as archers defend their castle walls. Finally, visit our village from the XIXe centuries and witness the daily life of sailors and the intense naval battles that shaped the course of history. With so much to discover and explore, our historical park is a must-visit for anyone interested in history and the fascinating cultures and events that have shaped our world.</p>
            <div id="village">
                <div className="form">
                    <form action="submit">
                        <input type="text" placeholder="Your feedback"/>
                            <button>Send</button>
                    </form>
                </div>
                <div className="vintage-village-img">
                    {vintageVillageIMG.map((card) => (
                        <Card key={card.key} selected={selectedCard === card.id} card={card} onClick={(k,i) => setSelectedCard(i)}/>
                    ))}
                </div>
                <div className="vintage-village-description">
                    {selectedCard === "romanVillage" && <p className="card-vintage-village">
                        Deep within the heart of the Rose Garden lies a miniature world that takes visitors back in time to ancient Rome. Here, nestled amongst the rides and attractions, lies a charming Roman village that has been recreated in all its glory.

                        As visitors wander through the cobbled streets of the village, they will be transported to a time when the Romans ruled over much of the known world. The smell of bread baking in the oven drifts through the air, while children play games with wooden toys on the dusty streets.

                        The village is filled with life-size models of Roman citizens going about their daily business. Some are selling their wares in the market, while others are working hard in the fields or crafting goods in their workshops. Visitors can even step inside a Roman villa and see how the wealthy lived during this time.

                        As they explore the village, visitors will learn about the Roman way of life and the customs and traditions that made this period of history so fascinating. Whether they are young or old, there is something for everyone in this delightful Roman village, and visitors will leave with a newfound appreciation for the world of ancient Rome.
                    </p>
                    }
                    {selectedCard === "vikingVillage" && <p className="card-vintage-village"></p> }
                    {selectedCard === "medievalVillage" && <p className="card-vintage-village"></p> }
                    {selectedCard === "XIXCenturiesVillage" && <p className="card-vintage-village"></p> }

                </div>
                </div>
        </section>
        )
}

function VintageVillage(){
    return(
        <div className="main-container mt-main parallax-layer1">
            <VintageVillageImg/>
        </div>
    )
}

export default VintageVillage;