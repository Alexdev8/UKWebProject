import {Card} from "./Shared_components"
import {useState} from "react";
import {Link} from "react-router-dom";
const vintageRestaurantsIMG = [
    {
        key: 0,
        id: "romanRestaurant",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/4a/8d.jpg",
        title: "Veni Vidi Gustavi",
        caption: ""
    },
    {
        key: 1,
        id: "vikingRestaurant",
        image: "https://visitorsguide.is/wp-content/uploads/2017/10/The-viking-village-restaurant-Iceland-1024x683.jpg",
        title: "Valhalla's Feast",
        caption: ""
    },
    {
        key: 2,
        id: "medievalRestaurant",
        image: "https://apps.tourisme-alsace.info/photos/ribeau/photos/229001097_1.jpeg",
        title: "The King's Table",
        caption: ""
    },
    {
        key: 3,
        id: "XIXCenturiesRestaurant",
        image: "https://auberge-auris.fr/wp-content/uploads/2020/02/auberge-de-la-foret-accueil01.jpg",
        title: "Sherwood Hideaway",
        caption: ""
    }

];

function VintageRestaurantsImg({img}){

    const [selectedCard, setSelectedCard] = useState("romanRestaurant");

    return(
        <section className="content-section vintage-section">
            <h1>The Vintages Restaurants </h1>
            <p>All around our historical park you can experience life in different eras of history. Explore our Roman village, where you can find the wonderfull Veni Vidi Gustavi. Take a stroll through our Viking village, where you can see skilled craftsmen at work and have a meal at the Valhalla's Feast. Step back in time to the Hundred Years War and experience life in a medieval village, where you can eat at the king's table. Finally, you can visit our village around the Sherwood forest and have a good time at the Sherwood's Hideaway.</p>
            <div id="restaurants">
                <div className="vintage-restaurants-img">
                    {img.map((card) => (
                        <Card key={card.key} selected={selectedCard === card.id} card={card} onClick={(k,i) => setSelectedCard(i)}/>
                    ))}
                </div>
                <div className="vintage-restaurants-description">
                    {selectedCard === "romanRestaurant" && <p className="card-vintage-restaurant">

                        <h1> Veni Vidi Gustavi </h1> A unique dining experience that transports you back to the grandeur of ancient Rome. Nestled in the heart of the city, our restaurant captures the essence of Roman culture, offering a gastronomic journey through time.

                        As you step inside, you'll be greeted by opulent marble columns, intricate mosaics, and tasteful frescoes depicting scenes from Roman mythology.

                        The ambience is warm, inviting, and reminiscent of an extravagant Roman villa, immersing you in the spirit of the ancient empire.

                        Our menu is a delightful fusion of traditional Roman cuisine and modern culinary techniques. Indulge in authentic flavors and ingredients reminiscent of the ancient empire. Begin your meal with an assortment of antipasti featuring marinated olives, aged cheeses, and cured meats, all sourced locally for an authentic taste.

                        For your main course, savor our signature dishes inspired by ancient Roman recipes. Feast on succulent roasted meats, such as tender spiced lamb or juicy suckling pig, slow-cooked to perfection. Delight in fresh seafood, prepared with aromatic herbs and served with ancient Roman sauces like garum or liquamen.

                        No Roman dining experience is complete without enjoying the staple dish, pasta. Our skilled chefs handcraft a variety of pasta dishes, from delicate fettuccine alfredo to hearty bucatini carbonara. Every bite is a culinary homage to the renowned Roman cuisine that has stood the test of time.

                        To complement your meal, our extensive wine list features a selection of exquisite Italian and Roman varietals. From crisp whites to robust reds, our sommelier will guide you in choosing the perfect wine to enhance your dining experience.

                        At "Veni Vidi Gustavi," we not only aim to provide an exceptional dining experience but also to transport you to the grandeur and decadence of ancient Rome. Whether you're celebrating a special occasion or simply seeking a unique culinary adventure, our restaurant offers a timeless journey through Roman gastronomy. Join us and let your taste buds travel back in time to the glory of the Roman Empire.
                    </p>
                    }
                    {selectedCard === "vikingRestaurant" && <p className="card-vintage-restaurant">

                        <h1>Valhalla's Feast</h1> Welcome to "Valhalla's Feast," a dining experience that takes you on a thrilling journey to the heart of Viking culture. Nestled amidst rugged landscapes, our restaurant brings the essence of the ancient Norse world to life, offering a feast fit for a warrior.

                        As you step through our doors, you'll be transported to a Viking longhouse adorned with intricately carved wooden beams and shields proudly displayed on the walls. The flickering light of torches creates an atmosphere that evokes the adventurous spirit of the Viking era.

                        Prepare yourself for a culinary adventure like no other. Our menu showcases the bold flavors and hearty dishes that sustained Viking warriors during their epic voyages. Start your feast with an array of Nordic appetizers, featuring smoked salmon, pickled herring, and tangy lingonberry preserves.

                        For the main course, brace yourself for our legendary Viking feast. Indulge in roasted wild boar, tender venison, or flame-grilled salmon, infused with traditional Viking spices and herbs. Served alongside root vegetables, braised cabbage, and a selection of hearty grain dishes, each bite will transport you to the feasting halls of Norse legends.

                        To accompany your meal, we offer an impressive selection of mead and ale, brewed using age-old Viking techniques. Sip on honey-infused mead or robust craft ales, embracing the Viking tradition of raising a horn in celebration and camaraderie.

                        Complete your epic dining experience with desserts that pay homage to ancient Norse sweets. Savor the richness of spiced apple cakes, drizzled with honey, or indulge in a creamy skyr parfait infused with wild berries, echoing the flavors of the Nordic wilderness.

                        The ambiance of "Valhalla's Feast" is enhanced by live performances of Viking sagas and traditional music, captivating you with tales of heroism and adventure. Feast like a Viking as you immerse yourself in the culture and mythology of the Norse world.

                        Whether you're a history enthusiast, a lover of bold flavors, or simply seeking an unforgettable dining experience, "Valhalla's Feast" welcomes you to embark on a culinary voyage to the age of the Vikings. Join us and let the spirit of the Norse warriors guide your senses through a night of feasting, revelry, and tales of yore.
                    </p>
                    }
                    {selectedCard === "medievalRestaurant" && <p className="card-vintage-restaurant">

                        <h1> The King's Table </h1>Welcome to "The King's Table," a culinary journey that transports you to the enchanting world of medieval England. Located in the heart of the kingdom, our restaurant captures the essence of the Middle Ages, offering a regal dining experience that would befit royalty.

                        Step into our establishment and be greeted by the ambiance of a grand medieval hall. Massive stone walls adorned with tapestries and suits of armor create an atmosphere of noble splendor. The flickering light of candlelit chandeliers casts a warm glow, setting the stage for an unforgettable dining experience.

                        Our menu is a homage to the rich culinary heritage of medieval England. Begin your feast with a selection of hearty starters, featuring trenchers filled with savory meat pies, creamy artisanal cheeses, and freshly baked bread accompanied by richly spiced fruit chutneys.

                        As you move on to the main course, indulge in the royal fare that would have graced the tables of knights and nobles. Delight in roasted game, succulent roasted chicken, or tender cuts of beef, all prepared with medieval techniques and accompanied by a selection of seasonal vegetables and herbs.

                        No medieval feast would be complete without experiencing the quintessential dish of the era: the spit-roasted whole pig. Our skilled chefs masterfully prepare this centerpiece, ensuring a succulent and perfectly seasoned culinary spectacle that will transport you back in time.

                        Complete your culinary journey with decadent desserts inspired by medieval delights. Savor the richness of spiced apple tarts, honey-infused custards, or indulge in a selection of candied nuts and dried fruits, evoking the flavors of medieval sweet treats.

                        "The King's Table" also offers live entertainment, including troubadours, minstrels, and jesters who will regale you with medieval songs, tales, and merriment, creating an immersive experience that transports you to a bygone era.

                        Whether you seek a historical adventure, a romantic evening, or simply a unique dining experience, "The King's Table" welcomes you to indulge in the splendor and flavors of medieval England. Join us and dine like royalty as you relish the traditions and tastes of a bygone era.
                    </p>
                    }
                    {selectedCard === "XIXCenturiesRestaurant" && <p className="card-vintage-restaurant">

                        <h1> Sherwood's Hideaway </h1> A charming and rustic dining experience that takes you deep into the enchanting world of Robin Hood and his Merry Men. Tucked away amidst the lush greenery of Sherwood Forest, our restaurant captures the spirit of adventure, camaraderie, and noble cause.

                        Step into our establishment and feel instantly transported to the heart of Sherwood. The interior exudes the charm of an old English tavern, with rough-hewn wooden beams, flickering candlelight, and a warm hearth that crackles with a comforting fire. The walls are adorned with bows, arrows, and artifacts reminiscent of Robin Hood's legendary feats.

                        Our menu is a tribute to the bountiful flavors of the forest and the simple, hearty fare enjoyed by Robin Hood and his band. Begin your feast with a selection of foraged delights, featuring wild mushroom tarts, artisanal cheese platters, and freshly baked bread served with herb-infused butter.

                        For the main course, indulge in dishes that celebrate the spirit of the legendary outlaw. Savor the succulence of roasted venison, tender roasted pheasant, or a comforting shepherd's pie made with locally sourced ingredients. Each dish is prepared with a touch of medieval charm, using traditional herbs and spices that evoke the flavors of the woodland.

                        Quench your thirst with a variety of ales, ciders, and mead, crafted by local brewers and served in traditional tankards. Immerse yourself in the spirit of merriment and camaraderie as you raise your glass in celebration, just as Robin and his band would have done.

                        While you dine, our troubadours and minstrels will regale you with tales of Robin Hood's daring escapades, serenading you with lively tunes that echo through the tavern. Join in the revelry and let the spirit of Robin Hood and his Merry Men inspire your evening.

                        "Sherwood's Hideaway" welcomes you to embrace the spirit of Robin Hood and experience the warmth, camaraderie, and flavors of Sherwood Forest. Whether you're seeking a memorable family gathering, a romantic rendezvous, or a fun-filled evening with friends, our restaurant promises an immersive and delightful journey into the world of Robin Hood.
                    </p>
                    }

                </div>
            </div>
        </section>
    )
}

function VintageRestaurants(){
    return(
        <>
            <VintageRestaurantsImg img={vintageRestaurantsIMG}/>
        </>
    )
}

export default VintageRestaurants;