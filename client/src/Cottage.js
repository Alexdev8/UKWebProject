
const cottageList = [
    {
        id: 0,
        name: "",

    }
]

function Cottage ({item}){
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
            <div className="accordion-cottage">
            </div>
        </div>
    )
}