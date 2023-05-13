import {Calendar, Carousel} from "./Shared_components";
import {Link} from "react-router-dom";

const imgWorkshop = [
    {
        key: 0,
        active: true,
        src: "https://cdn.essentiels.bnf.fr/media/images/cache/crop/rc/4AsbYy3Q/uploads/media/image/20201205171151000000_pre_102.jpg",
        title: "The printing press workshop",
        caption: "The printing press workshop is an educational and interactive addition to any historical park or city, offering visitors the chance to learn about the history and impact of printing in the 19th century. Visitors can see the machines in action, learn about the typesetting process, and even try their hand at printing using miniature presses and pre-made designs. This workshop is a great way to experience history and gain a deeper appreciation for the skills and craftsmanship of the time."

    },
    {
        key: 1,
        active: false,
        src: "https://idata.over-blog.com/1/44/54/90/guedelon-5/-2--.jpg",
        title: "The blacksmith's workshop",
        caption: "In the Viking village, the blacksmith's workshop is a hub of activity, as the clanging of metal on metal fills the air. Here, you'll see the Vikings' legendary weapons being forged, from swords and axes to shields and helmets. You can also learn about the importance of metalworking in Viking society, and perhaps even try your hand at shaping a piece of iron yourself."
    },
    {
        key: 2,
        active: false,
        src: "https://blog.puydufou.com/wp-content/uploads/2015/05/58-Talmelier-2015.jpg",
        title: "The bakery",
        caption: "The bakery workshop is a bustling hub in any of the historical villages, where skilled bakers use traditional methods to create a variety of breads and pastries. Visitors can watch as the bakers mix, knead, and shape the dough by hand, and learn about the different types of flour and grains used throughout history. The aroma of freshly baked goods fills the air, and visitors can sample some of the delicious treats for themselves. The workshop also offers the opportunity to try your hand at baking with guidance from the expert bakers."
    },
    {
        key: 3,
        active: false,
        src: "https://chantiers.hypotheses.org/files/2014/07/%C3%A9quarrissage-2.jpg",
        title: "The carpenter's workshop",
        caption: "In the village of the 100 Years War, the carpenter's workshop is a hive of activity. Here, skilled craftsmen create everything from sturdy wooden carts and siege engines to intricate furniture and household items. You can watch as they use their tools to shape the wood, and perhaps even learn a thing or two about woodworking yourself."
    },
    {
        key: 4,
        active: false,
        src: "https://www.puisaye-tourisme.fr/wp-content/uploads/2017/03/la-poterie-de-la-batisse-daniel-salem.jpg",
        title: "The pottery workshop",
        caption: "In the Roman village, you'll find a workshop where skilled artisans craft intricate mosaics and delicate pottery. You can watch as they work, marveling at their precision and attention to detail. You may even get the chance to try your hand at pottery-making yourself, learning from the masters in a hands-on workshop."
    }
]

const workshopPlanning = [
    {
        id: "bakery",
        type: "workshop",
        name: "The Tudor Oven",
        date: [
            {day: "Monday", start: 11},
            {day: "Monday", start: 15},
            {day: "Wednesday", start: 11},
            {day: "Wednesday", start: 16},
            {day: "Friday", start: 10},
            {day: "Friday", start: 17},
            {day: "Saturday", start: 11},
            {day: "Saturday", start: 14},
            {day: "Sunday", start: 10},
            {day: "Sunday", start: 15}
        ]
    },
    {
        id: "blacksmith",
        type: "workshop",
        name: "William Forge",
        date: [
            {day: "Tuesday", start: 10},
            {day: "Tuesday", start: 17},
            {day: "Thursday", start: 11},
            {day: "Thursday", start: 15},
            {day: "Friday", start: 10},
            {day: "Friday", start: 16},
            {day: "Saturday", start: 11},
            {day: "Saturday", start: 18},
            {day: "Sunday", start: 12},
            {day: "Sunday", start: 17}
        ]
    },
    {
        id: "carpenter",
        type: "workshop",
        name: "Willow Carpenter",
        date: [
            {day: "Monday", start: 10},
            {day: "Monday", start: 13},
            {day: "Tuesday", start: 14},
            {day: "Tuesday", start: 15},
            {day: "Wednesday", start: 13},
            {day: "Wednesday", start: 17},
            {day: "Thursday", start: 13},
            {day: "Thursday", start: 17},
            {day: "Sunday", start: 11},
            {day: "Sunday", start: 18}
        ]
    },
    {
        id: "pottery",
        type: "workshop",
        name: "St. George's Pottery",
        date: [
            {day: "Monday", start: 14},
            {day: "Monday", start: 17},
            {day: "Tuesday", start: 11},
            {day: "Thursday", start: 10},
            {day: "Thursday", start: 17},
            {day: "Friday", start: 14},
            {day: "Saturday", start: 13},
            {day: "Saturday", start: 17},
            {day: "Sunday", start: 14},
            {day: "Sunday", start: 18}
        ]
    },
    {
        id: "printing",
        type: "workshop",
        name: "Canterbury Press",
        date: [
            {day: "Monday", start: 14},
            {day: "Tuesday", start: 13},
            {day: "Wednesday", start: 14},
            {day: "Thursday", start: 17},
            {day: "Friday", start: 11},
            {day: "Saturday", start: 16},
            {day: "Sunday", start: 13}
        ]
    },
]

function WorkShopCarousel(){

    return(
        <>
            <section className="content-section work-shop">
                <h1>Park Workshop </h1>
                <p className="work-shop-text">When visiting a historical park, there are a variety of workshops and demonstrations that offer visitors a hands-on experience with history. From pottery and weaving to baking and printing, these workshops provide a fascinating look into the skills and techniques of the past. Visitors can learn about the history and cultural significance of these crafts, as well as see the process in action and even try their hand at creating their own work of art. These workshops are a great way to learn about history and gain a deeper appreciation for the craftsmanship of the time.</p>
                <Carousel images={imgWorkshop}/>
            </section>
            <section className="content-section">
                <h1 className="calendar-presentation">Planing of the different workshop</h1>
                <Calendar events={workshopPlanning}/>
                <div className="lehends">
                    <div className="indicator-container">
                        <div className="color-lehend bakery-lehend"></div>
                        <p className="text-lehends">The Tudor Oven</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend blacksmith-lehend"></div>
                        <p className="text-lehends">William Forge</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend carpenter-lehend"></div>
                        <p className="text-lehends">Willow Carpenter</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend pottery-lehend"></div>
                        <p className="text-lehends">St. George's Pottery</p>
                    </div>
                    <div className="indicator-container">
                        <div className="color-lehend printing-lehend"></div>
                        <p className="text-lehends">Canterbury Press</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkShopCarousel;