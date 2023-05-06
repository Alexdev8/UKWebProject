const VintageVillageIMG = [
    {
        id: "romanVillage",
        img: "https://congres.puydufou.com/sites/default/files/styles/max_width_1200/public/2020-09/carrousel_3_recadre_5.jpg?itok=kesu_QIK",
        title: "The Roman Village",
        description: "In the Roman village, you'll see the impressive architecture and engineering feats that defined this civilization. Marvel at the grandeur of the aqueduct, imagine yourself as a gladiator in the arena, and explore the marketplace where merchants sell exotic goods from all corners of the empire."
    },
    {
        id: "vikingVillage",
        img: "https://www.la-poze-travel.com/wp-content/uploads/2019/09/fort-de-lan-mil-puy-du-fou-3-min.jpg",
        title: "The Viking Village",
        description: ""
    },
    {
        id: "medievalVillage",
        img: "https://www.atlantic-loire-valley.com/sites/default/files/styles/slide_article_classique/public/mediatheque/images/Puy-du-Fou-La-Cite-Medievale.jpg?h=84071268&itok=o9PAlazb",
        title: "The Medieval Village",
        description: ""
    },
    {
        id: "XIXCenturiesVillage",
        img: "https://prod-sites-pdf-webdata.s3.eu-west-1.amazonaws.com/france/files/s3fs-public/styles/show_carrousel_image_desktop/public/shows/2016-09/bourg01.JPG?VersionId=eSJBX8G0TIWQomO6bDSPrcyFjaFRuJUe&itok=69ZZuu9L",
        title: "The XIX centuries Village",
        description: ""
    }

];

function VintageVillageImg({img}){
    return(
        <section className="content-section">
            <h1>The Villages of the Rose </h1>
            <h2>Welcome to our historical park where you can experience life in different eras of history. Explore our Roman village, where you can wander through streets lined with ancient buildings and witness daily life in a bustling Roman town. Take a stroll through our Viking village, where you can see skilled craftsmen at work and witness battles between fierce warriors. Step back in time to the Hundred Years War and experience life in a medieval village, where you can see knights in shining armor and watch as archers defend their castle walls. Finally, visit our village from the XIXe centuries and witness the daily life of sailors and the intense naval battles that shaped the course of history. With so much to discover and explore, our historical park is a must-visit for anyone interested in history and the fascinating cultures and events that have shaped our world.</h2>
            <div id="village">
                <div className="form">
                    <form action="submit">
                        <input type="text" placeholder="Your feedback"/>
                            <button>Send</button>
                    </form>
                </div>
                {img.map((img) => (
                    <div id={img.id}>
                        <img src={img.img} alt="..."/>
                        <div className="image-overlay">
                            <p>
                                {img.title}
                                <br/>
                                {img.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        )
}

function VintageVillage(){
    return(
        <div className="main-container mt-main parallax-layer1">
            <VintageVillageImg img={VintageVillageIMG}/>
        </div>
    )
}

export default VintageVillage;