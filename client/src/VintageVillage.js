import {Card} from "./Shared_components"
import {useState} from "react";
import {Link} from "react-router-dom";
const vintageVillageIMG = [
    {
        key: 0,
        id: "romanVillage",
        image: "https://congres.puydufou.com/sites/default/files/styles/max_width_1200/public/2020-09/carrousel_3_recadre_5.jpg?itok=kesu_QIK",
        title: "The Roman Village",
        caption: ""
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

function VintageVillageImg({img}){

    const [selectedCard, setSelectedCard] = useState("romanVillage");

    return(
        <section className="content-section vintage-section">
            <h1>The Villages of the Rose </h1>
            <p>Welcome to our historical park where you can experience life in different eras of history. Explore our Roman village, where you can wander through streets lined with ancient buildings and witness daily life in a bustling Roman town. Take a stroll through our Viking village, where you can see skilled craftsmen at work and witness battles between fierce warriors. Step back in time to the Hundred Years War and experience life in a medieval village, where you can see knights in shining armor and watch as archers defend their castle walls. Finally, visit our village from the XIXe centuries and witness the daily life of sailors and the intense naval battles that shaped the course of history. With so much to discover and explore, our historical park is a must-visit for anyone interested in history and the fascinating cultures and events that have shaped our world.</p>
            <div id="village">
                <div className="vintage-village-img">
                    {img.map((card) => (
                        <Card key={card.key} selected={selectedCard === card.id} card={card} onClick={(k,i) => setSelectedCard(i)}/>
                    ))}
                </div>
                <div className="vintage-village-description">
                    {selectedCard === "romanVillage" && <p className="card-vintage-village">

                        <h1> The Roman village </h1> Deep within the heart of the Rose Garden lies a miniature world that takes visitors back in time to ancient Rome. Here, nestled amongst the rides and attractions, lies a charming Roman village that has been recreated in all its glory.

                        As visitors wander through the cobbled streets of the village, they will be transported to a time when the Romans ruled over much of the known world. The smell of bread baking in the oven drifts through the air, while children play games with wooden toys on the dusty streets.

                        The village is filled with life-size models of Roman citizens going about their daily business. Some are selling their wares in the market, while others are working hard in the fields or crafting goods in their workshops. Visitors can even step inside a Roman villa and see how the wealthy lived during this time.

                        As they explore the village, visitors will learn about the Roman way of life and the customs and traditions that made this period of history so fascinating. Whether they are young or old, there is something for everyone in this delightful Roman village, and visitors will leave with a newfound appreciation for the world of ancient Rome.
                    </p>
                    }
                    {selectedCard === "vikingVillage" && <p className="card-vintage-village">

                        <h1> The Viking village </h1> Nestled within the Rose Garden, visitors can travel back in time to a bygone era of fierce warriors and seafaring adventurers - the world of the Vikings. The recreated Viking village is a living, breathing world that transports visitors to a time when Scandinavians ruled the seas and terrorized the coasts of Europe.

                        As visitors wander through the winding, narrow streets of the village, they'll find themselves surrounded by authentic-looking thatched-roof huts, with smoke rising from the chimneys. The sound of blacksmiths hammering on iron and the clatter of wooden wheels on cobblestones fills the air.

                        Throughout the village, visitors can watch as costumed reenactors bring the Viking era to life. Some may be chopping wood, spinning wool, or preparing a feast in a great hall, while others practice sword fighting or demonstrate the art of archery. Visitors can also explore a replica Viking longship, a fearsome vessel that carried Vikings on their journeys of exploration and conquest.

                        The Viking village is a fascinating glimpse into a way of life that was both brutal and beautiful. Visitors will learn about the Vikings' customs and traditions, their mythology, and their daily lives. They may even catch a glimpse of a Viking warrior in full battle dress, ready to do battle against their enemies.

                        With its attention to detail and authentic atmosphere, the Viking village is a must-see for anyone interested in history and culture. It's a thrilling and educational experience that will leave visitors with a new appreciation for the fierce warriors and seafaring adventurers of the Viking age.
                    </p>
                    }
                    {selectedCard === "medievalVillage" && <p className="card-vintage-village">

                        <h1> The Medieval village </h1> Nestled within the Rose Garden is a charming medieval village that takes visitors back in time to a world of knights, castles, and chivalry. The village has been carefully recreated to transport visitors to a time when lords and ladies ruled the land and skilled craftsmen plied their trades.

                        As visitors wander through the village's winding streets, they'll find themselves surrounded by a mix of half-timbered houses, stone cottages, and imposing castle walls. The air is filled with the sound of clanging metal as blacksmiths hammer away at their forges and the chatter of merchants selling their wares.

                        Throughout the village, visitors can watch as costumed reenactors bring the medieval era to life. Some may be practicing archery or sword fighting, while others demonstrate medieval cooking techniques or show off their handcrafted goods. Visitors can even step inside a medieval castle and imagine what it must have been like to live in such a grand structure.

                        The medieval village is a fascinating glimpse into a world that was both romantic and harsh. Visitors will learn about the medieval way of life, the customs and traditions of the era, and the importance of chivalry and honor. They may even catch a glimpse of a noble knight in shining armor, ready to defend their honor and protect the realm.

                        With its authentic atmosphere and attention to detail, the medieval village is a must-see for anyone interested in history and culture. It's a thrilling and educational experience that will leave visitors with a new appreciation for the beauty and complexity of the medieval era.
                    </p>
                    }
                    {selectedCard === "XIXCenturiesVillage" && <p className="card-vintage-village">

                        <h1> The XIXe century village </h1> Nestled within the Rose Garden is a charming village that takes visitors back in time to the 19th century. The village has been recreated to transport visitors to a time when the Industrial Revolution was in full swing, and the world was rapidly changing.

                        As visitors wander through the village's streets, they'll find themselves surrounded by a mix of Georgian and Victorian architecture, with quaint shops and workshops lining the roads. The air is filled with the sound of clattering horse-drawn carriages, and the aroma of freshly baked goods wafts from the bakery.

                        Throughout the village, visitors can watch as costumed reenactors bring the 19th century to life. Some may be working in the textile mills, while others are demonstrating crafts such as pottery or carpentry. Visitors can even step inside a typical 19th-century house and see how people lived during this time.

                        The 19th-century village is a fascinating glimpse into a world that was marked by change and innovation. Visitors will learn about the Industrial Revolution, the importance of social class, and the daily life of people during this time. They may even catch a glimpse of a wealthy Victorian gentleman strolling down the street or a group of working-class men discussing the latest political developments.

                        With its authentic atmosphere and attention to detail, the 19th-century village is a must-see for anyone interested in history and culture. It's a thrilling and educational experience that will leave visitors with a new appreciation for the world of the 19th century.
                    </p>
                    }

                </div>
            </div>
        </section>
        )
}

function VintageVillage(){
    return(
        <>
            <VintageVillageImg img={vintageVillageIMG}/>
        </>
    )
}

export default VintageVillage;