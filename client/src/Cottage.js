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
                </div>
                <div className="cottage-container2">
                    <CottageIMG img={cottageList2} />
                </div>
            </div>
        </div>
    )
}

export default Cottage;