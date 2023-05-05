import {Carousel} from "./Shared_components";

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



function WorkShopCarousel(){
    return(
        <div className="main-container mt-main parallax-layer1">
            <h1>Park Workshop </h1>
            <h2>When visiting a historical park, there are a variety of workshops and demonstrations that offer visitors a hands-on experience with history. From pottery and weaving to baking and printing, these workshops provide a fascinating look into the skills and techniques of the past. Visitors can learn about the history and cultural significance of these crafts, as well as see the process in action and even try their hand at creating their own work of art. These workshops are a great way to learn about history and gain a deeper appreciation for the craftsmanship of the time.</h2>
            <Carousel images={imgWorkshop} />
        </div>

    )
}

export default WorkShopCarousel;