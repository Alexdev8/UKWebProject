import {Card, Functionalities} from "./Shared_components";
import {Pictogram} from "./Shared_components";
import {useState} from "react";
import {Link} from "react-router-dom";

const crownHotelImg = [
    {
        key: 0,
        id: "tudor-suite",
        image: "https://i.pinimg.com/736x/56/08/18/560818059c8147d2660f6c22bc68d7e8--bedroom-vintage-tudor-homes.jpg",
        title: "The Tudor Suite"
    },
    {
        key: 1,
        id: "crown-jewel",
        image: "https://images.lanouvellerepublique.fr/image/upload/5ededfb7e51dac370d8b46d5.jpg",
        title: "The Crown Jewel"
    },
    {
        key: 2,
        id: "windsor-rose",
        image: "https://i.pinimg.com/originals/84/08/80/8408808f768d1ffb955813241c5cc31b.jpg",
        title: "The Windsor Room"
    },
    {
        key: 3,
        id: "rose-garden",
        image: "https://www.legoland.com.my/media/140b0egl/kingdom-premium-1-1800x1200.jpg?center=0.4,0.755&mode=crop&format=webp&quality=80&width=600&height=460",
        title: "The Rose Garden View"
    }
]

const tudorSuitItem = [
    {
        key: 0,
        id: "room_service",
        name: "Room service",
    },
    {
        key: 1,
        id: "wifi",
        name: "Wifi",
    },
    {
        key: 2,
        id: "directions_bus",
        name: "Free bus",
    }
]

const crownJewelItem = [
    {
        key: 0,
        id: "room_service",
        name: "Room service"
    },
    {
        key: 1,
        id: "king_bed",
        name: "King bed"
    },
    {
        key: 2,
        id: "wifi",
        name: "Free wifi"
    },
    {
        key: 3,
        id: "accessible",
        name: "Disabled guest access"
    },
    {
        key: 4,
        id: "directions_bus",
        name: "Free bus"
    }
]

const windsorRoseItems = [
    {
        key: 0,
        id: "room_service",
        name: "Room service"
    },
    {
        key: 1,
        id: "wifi",
        name: "Free wifi"
    },
    {
        key: 2,
        id: "accessible",
        name: "Disabled guest access"
    },
    {
        key: 3,
        id: "directions_bus",
        name: "Free bus"
    }
]

const roseGardenItems = [
    {
        key: 0,
        id: "room_service",
        name: "Room service"
    },
    {
        key: 1,
        id: "wifi",
        name: "Free wifi"
    },
    {
        key: 2,
        id: "accessible",
        name: "Disabled guest access"
    },
    {
        key: 3,
        id: "directions_bus",
        name: "Free bus"
    },{
        key: 4,
        id: "king_bed",
        name: "King bed"
    },
    {
        key: 5,
        id: "shopping_bag",
        name: "Gift bag"
    }
]

function CrownHotelIMG({img, pictograms}){
    const [selectedCard, setSelectedCard] = useState("tudor-suite");

    return(
        <section className="content-section crown-hotel">
            <h1> The Grand Crown Hotel </h1>
            <div className="container-crown-hotel-description">
                <img src="https://destinationangleterre.com/wp-content/uploads/2022/11/Hever-Castle-%C2%A9-Christoph-Matthias-Siebenborn-licence-CC-BY-3.0-from-Wikimedia-Commons-scaled.jpg" alt="..." className="hotel-img"/>
                <p className="container-crown-hotel-text1">
                    The Grand Crown Hotel is a luxurious retreat nestled in the heart of an English history-themed amusement park. This majestic hotel takes its inspiration from the rich and fascinating history of England, offering guests a unique opportunity to immerse themselves in the country's heritage.

                    From the moment guests step into the lobby, they are transported back in time to a bygone era of kings, queens, and knights in shining armor. The hotel's décor features rich tapestries, ornate chandeliers, and antique furnishings that create a sense of grandeur and opulence.
                </p>
            </div>
            <p className="container-crown-hotel-text2">
                The hotel's rooms are equally impressive, offering guests a choice of elegantly appointed suites and standard rooms, each one carefully designed to provide a comfortable and luxurious stay. Many of the rooms offer stunning views of the surrounding countryside, adding to the overall sense of tranquility and relaxation.

                Guests can indulge in a range of amenities, including a full-service spa, a fitness center, and a heated indoor pool. The hotel's restaurant offers a delectable array of dishes inspired by the rich culinary traditions of England, with a focus on locally sourced ingredients and seasonal produce.

                For those who want to explore the history of England further, the hotel is ideally located within the theme park, allowing guests to easily visit the various attractions and exhibits dedicated to the country's past.
            </p>

            <div id="room-container">
                <div className="room-img">
                    {img.map((card) => (
                        <Card key={card.key} selected={selectedCard === card.id} card={card} onClick={(k,i) => setSelectedCard(i)}/>
                    ))}
                </div>
                <div className="room-description">
                    {selectedCard === "tudor-suite" && <p className="card-room">

                        <h1> The Tudor Suite </h1>
                        <p className="grand-hotel-prices">
                            48£/night
                            <button className="hotel-button-reservation-button">
                                <Link to="/order/hotel">
                                    Book a night
                                </Link>
                            </button>
                        </p>
                        The Tudor Suite is a stunning accommodation option that transports guests back in time to the golden age of the Tudor dynasty. With its rich wooden furnishings, intricate tapestries, and authentic Tudor decor, the suite is a luxurious and immersive experience that offers a glimpse into England's past. Guests can enjoy modern amenities such as a plush king-size bed, a spacious en-suite bathroom, and complimentary Wi-Fi while feeling like they have stepped back in time. The Tudor Suite is the perfect choice for history lovers or anyone looking for a unique and memorable stay at The Grand Crown Hotel.

                        <div className="container-hotel-pictogram">
                            <Functionalities items={tudorSuitItem} />

                        </div>
                    </p>

                    }
                    {selectedCard === "crown-jewel" && <p className="card-room">

                        <h1> The Crown Jewel </h1>
                        <p className="grand-hotel-prices">
                            108£/night
                            <button className="hotel-button-reservation-button">
                                <Link to="/order/hotel">
                                    Book a night
                                </Link>
                            </button>
                        </p>
                        The Crown Jewel Suite is the epitome of luxury and grandeur. This opulent accommodation is the perfect choice for guests who are seeking the ultimate indulgence during their stay. The suite features lavish furnishings, including a grand four-poster king-size bed, elegant chandeliers, and a spacious seating area with comfortable armchairs. The suite's breathtaking views of the surrounding countryside and picturesque gardens make it the perfect retreat for those looking to escape the hustle and bustle of everyday life. The Crown Jewel Suite also boasts a large en-suite bathroom with a luxurious spa bath, ensuring guests can unwind and relax in complete comfort. With its lavish design and impeccable attention to detail, the Crown Jewel Suite truly lives up to its name as the jewel in the crown of The Grand Crown Hotel.

                        <div className="container-hotel-pictogram">
                            <Functionalities items={crownJewelItem} />
                        </div>

                        </p>
                    }
                    {selectedCard === "windsor-rose" && <p className="card-room">

                        <h1> The Windsor Rose </h1>
                        <p className="grand-hotel-prices">
                            78£/night
                            <button className="hotel-button-reservation-button">
                                <Link to="/order/hotel">
                                    Book a night
                                </Link>
                            </button>
                        </p>
                        The Windsor Rose Suite is a luxurious and elegant accommodation fit for royalty. This spacious suite boasts a comfortable king-size bed with plush bedding, a separate seating area with a cozy fireplace, and a private balcony that offers stunning views of the rolling hills and lush gardens. The suite is adorned with tasteful decor, including beautiful floral prints, and is equipped with modern amenities such as a flat-screen TV, Wi-Fi, and a mini-fridge. The en-suite bathroom is spacious and luxurious, featuring a deep soaking tub and a separate shower, as well as complimentary toiletries. With its impeccable design and attention to detail, the Windsor Rose Suite is the perfect choice for guests looking for a luxurious and memorable stay at The Grand Crown Hotel.

                        <div className="container-hotel-pictogram">
                            <Functionalities items={windsorRoseItems} />
                        </div>

                    </p>
                    }
                    {selectedCard === "rose-garden" && <div>
                        <p className="card-room">
                            <h1> The Rose Garden View </h1>
                            <p className="grand-hotel-prices">
                                68£/night
                                <button className="hotel-button-reservation-button">
                                    <Link to="/order/hotel">
                                        Book a night
                                    </Link>
                                </button>
                            </p>
                            The Windsor Rose suite is the perfect blend of luxury and playfulness. In partnership with Lego®, this suite features a unique Lego-themed decor that will delight children and adults alike. The suite is elegantly furnished with comfortable bedding, plush chairs, and a cozy fireplace to keep you warm on chilly nights. But the real highlight of the room is the Lego® play area, where you can build your own Lego® creations and let your imagination run wild. Whether you're visiting with family or just looking for a fun and unique experience, the Windsor Rose suite at the Grand Crown Hotel is sure to exceed your expectations.

                            <div className="container-hotel-pictogram">
                                <Functionalities items={roseGardenItems} />
                            </div>

                        </p>
                    </div>
                    }

                </div>
            </div>
        </section>
    )
}

function CrownHotel(){
    return(
        <div className="main-container mt-main parallax-layer1">
            <CrownHotelIMG img={crownHotelImg} />
        </div>
    )
}

export default CrownHotel;