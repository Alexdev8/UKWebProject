import {Card} from "./Shared_components";
import {useState} from "react";

const cottageList = [
    {
        key: 0,
        id: "cottage1",
        image: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/07/00liehgton-920x614.jpg",
        title: "",
    },
    {
        key: 1,
        id: "cottage2",
        image: "https://www.touristbee.com/photos/England/Houghton-05_2011/images/2011-05-08_IMG_5925.jpg",
        title: "",
    },
    {
        key: 2,
        id: "cottage3",
        image: "https://hips.hearstapps.com/hmg-prod/images/doolittle-cottage-down-end-hook-norton-banbury-main-ext-1599227721.jpg",
        title: "",
    },
    {
        key: 3,
        id: "cottage4",
        image: "https://www.lovetoescape.com/images/SPHeaders/l2e44545_hg-luxury-cottages-scotland.jpg",
        title: "",
    },
    ,
    {
        key: 4,
        id: "cottage5",
        image: "https://www.wintoncastle.co.uk/wp-content/uploads/2020/09/Winton-Cottage-Exterior-Front-01.jpg",
        title: "",
    }
]

const cottageList2 = [
    {
        key: 5,
        id: "cottage6",
        image: "https://www.dunalastair.com/pubd/images/upd/16c1a220140-Rose-10-.crop1900x1000.jpg",
        title: "",
    },
    {
        key: 6,
        id: "cottage7",
        image: "https://www.gaelholidayhomes.co.uk/wp-content/uploads/2022/04/White-cottage-2.jpg",
        title: "",
    },
    {
        key: 7,
        id: "cottage8",
        image: "https://www.lovefromscotland.co.uk/wp-content/uploads/2018/06/Lazy-Duck-Woodsmans-Hut-4-1080x720.jpg.webp",
        title: "",
    },
    {
        key: 8,
        id: "cottage9",
        image: "https://www.walkhighlands.co.uk/adpics/AD_8887l.JPG",
        title: "",
    },
    {
        key: 9,
        id: "cottage10",
        image: "https://i.pinimg.com/736x/e7/0b/b2/e70bb267205cee96a39e863f7e5d463c--english-country-cottages-english-countryside-cottage.jpg",
        title: "",
    }

]

function CottageIMG ({img}){

    const [selectedCard, setSelectedCard] = useState("romanVillage");


    return(
        <div className="card-container-cottage">
            {img.map((card) => (
                <div className="cottage-img">
                    <Card key={card.key} selected={selectedCard === card.id} card={card} onClick={(k,i) => setSelectedCard(i)}/>
                </div>
            ))}
        </div>
    )
}

function Cottage(){

    const [selectedCard, setSelectedCard] = useState("romanVillage");


    return(
        <div className="content-section cottage">
            <div className="cottage-header">
                <h1 className="content-section-title">Cottage/Bed & Breakfast</h1>
                <p className="cottage-description">
                    Located near an amusement park, visitors have the opportunity to stay in charming cottages that are steeped in English history. Each cottage is unique, with its own character and story to tell.

                    The cottages have been designed with attention to detail, and feature historical artifacts and decor that give guests a true sense of the rich English heritage. Some of the cottages are modeled after famous historical figures, such as King Henry VIII, while others pay homage to more obscure yet fascinating parts of English history.

                    Visitors can choose from a variety of cottages, each with their own individual charm and amenities. Some cottages feature cozy fireplaces, while others have private gardens or scenic views of the surrounding countryside.

                    The amusement park nearby provides endless entertainment for guests, but for those who want to relax and unwind, the cottages provide a peaceful escape from the hustle and bustle of daily life. Guests can take leisurely walks through the English countryside, explore nearby historical landmarks, or simply curl up with a good book in front of the fire.
                </p>
            </div>
            <div className="cottage-container">
                <div className="cottage-container1">
                    <CottageIMG img={cottageList} />
                    <div className="cottage1-text">
                        {selectedCard === "cottage1" && <p className="card-vintage-village">

                            <h1> The Roman village </h1> Deep within the heart of the Rose Garden lies a miniature world that takes visitors back in time to ancient Rome. Here, nestled amongst the rides and attractions, lies a charming Roman village that has been recreated in all its glory.

                            As visitors wander through the cobbled streets of the village, they will be transported to a time when the Romans ruled over much of the known world. The smell of bread baking in the oven drifts through the air, while children play games with wooden toys on the dusty streets.

                            The village is filled with life-size models of Roman citizens going about their daily business. Some are selling their wares in the market, while others are working hard in the fields or crafting goods in their workshops. Visitors can even step inside a Roman villa and see how the wealthy lived during this time.

                            As they explore the village, visitors will learn about the Roman way of life and the customs and traditions that made this period of history so fascinating. Whether they are young or old, there is something for everyone in this delightful Roman village, and visitors will leave with a newfound appreciation for the world of ancient Rome.
                        </p>
                        }
                        {selectedCard === "cottage2" && <p className="card-vintage-village">

                            <h1> The Viking village </h1> Nestled within the Rose Garden, visitors can travel back in time to a bygone era of fierce warriors and seafaring adventurers - the world of the Vikings. The recreated Viking village is a living, breathing world that transports visitors to a time when Scandinavians ruled the seas and terrorized the coasts of Europe.

                            As visitors wander through the winding, narrow streets of the village, they'll find themselves surrounded by authentic-looking thatched-roof huts, with smoke rising from the chimneys. The sound of blacksmiths hammering on iron and the clatter of wooden wheels on cobblestones fills the air.

                            Throughout the village, visitors can watch as costumed reenactors bring the Viking era to life. Some may be chopping wood, spinning wool, or preparing a feast in a great hall, while others practice sword fighting or demonstrate the art of archery. Visitors can also explore a replica Viking longship, a fearsome vessel that carried Vikings on their journeys of exploration and conquest.

                            The Viking village is a fascinating glimpse into a way of life that was both brutal and beautiful. Visitors will learn about the Vikings' customs and traditions, their mythology, and their daily lives. They may even catch a glimpse of a Viking warrior in full battle dress, ready to do battle against their enemies.

                            With its attention to detail and authentic atmosphere, the Viking village is a must-see for anyone interested in history and culture. It's a thrilling and educational experience that will leave visitors with a new appreciation for the fierce warriors and seafaring adventurers of the Viking age.
                        </p>
                        }
                        {selectedCard === "cottage3" && <p className="card-vintage-village">

                            <h1> The Medieval village </h1> Nestled within the Rose Garden is a charming medieval village that takes visitors back in time to a world of knights, castles, and chivalry. The village has been carefully recreated to transport visitors to a time when lords and ladies ruled the land and skilled craftsmen plied their trades.

                            As visitors wander through the village's winding streets, they'll find themselves surrounded by a mix of half-timbered houses, stone cottages, and imposing castle walls. The air is filled with the sound of clanging metal as blacksmiths hammer away at their forges and the chatter of merchants selling their wares.

                            Throughout the village, visitors can watch as costumed reenactors bring the medieval era to life. Some may be practicing archery or sword fighting, while others demonstrate medieval cooking techniques or show off their handcrafted goods. Visitors can even step inside a medieval castle and imagine what it must have been like to live in such a grand structure.

                            The medieval village is a fascinating glimpse into a world that was both romantic and harsh. Visitors will learn about the medieval way of life, the customs and traditions of the era, and the importance of chivalry and honor. They may even catch a glimpse of a noble knight in shining armor, ready to defend their honor and protect the realm.

                            With its authentic atmosphere and attention to detail, the medieval village is a must-see for anyone interested in history and culture. It's a thrilling and educational experience that will leave visitors with a new appreciation for the beauty and complexity of the medieval era.
                        </p>
                        }
                        {selectedCard === "cottage4" && <p className="card-vintage-village">

                            <h1> The XIXe century village </h1> Nestled within the Rose Garden is a charming village that takes visitors back in time to the 19th century. The village has been recreated to transport visitors to a time when the Industrial Revolution was in full swing, and the world was rapidly changing.

                            As visitors wander through the village's streets, they'll find themselves surrounded by a mix of Georgian and Victorian architecture, with quaint shops and workshops lining the roads. The air is filled with the sound of clattering horse-drawn carriages, and the aroma of freshly baked goods wafts from the bakery.

                            Throughout the village, visitors can watch as costumed reenactors bring the 19th century to life. Some may be working in the textile mills, while others are demonstrating crafts such as pottery or carpentry. Visitors can even step inside a typical 19th-century house and see how people lived during this time.

                            The 19th-century village is a fascinating glimpse into a world that was marked by change and innovation. Visitors will learn about the Industrial Revolution, the importance of social class, and the daily life of people during this time. They may even catch a glimpse of a wealthy Victorian gentleman strolling down the street or a group of working-class men discussing the latest political developments.

                            With its authentic atmosphere and attention to detail, the 19th-century village is a must-see for anyone interested in history and culture. It's a thrilling and educational experience that will leave visitors with a new appreciation for the world of the 19th century.
                        </p>
                        }
                    </div>
                </div>
                <div className="cottage-container2">
                    <CottageIMG img={cottageList2} />
                </div>
            </div>
        </div>
    )
}

export default Cottage;