function Attractions() {
    const listAttractions = [
        {name: "azerty", description: "a", picture: "b", link: "d", alt: "s"}
    ]

    return (
        <div className="attractionList">
            {listAttractions.map((attraction) => (
                <a href={attraction.link} id={attraction.name}>
                    <img src={attraction.picture} alt={attraction.alt}/>
                    <div className="img-overlay">
                        {attraction.name}
                    </div>
                    <div className="attractionDescription">
                        {attraction.description}
                    </div>

                </a>
            ))}
        </div>
    )

}
export default Attractions;