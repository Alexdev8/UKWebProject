import {Carousel} from "./Shared_components";

const EventsIMG = [
    {
        key: 0,
        active: true,
        src: "https://success-stories.fr/wp-content/uploads/Home_presentation_2018_macaron-reduce_5.jpg",
    },
    {
        key: 1,
        active: false,
        src: "https://www.promoparcs.com/img/cms/noel%20puy%20du%20fou.jpg",
    },
    {
        key: 2,
        active: false,
        src: "https://www.vendee-en-vacances.com/wp-content/uploads/2021/12/visiter-puy-du-fou.jpg",
    }

];
function Events(){
    return(
        <>
            <section className="content-section-privacy-policy">
                <h1 className="title-events">Attraction Park Event Calendar</h1>
                <br/>
                <div className="presentation-events">
                    <div className="calendar">
                        <h2>Summer Events</h2>
                            <ul>
                                <li><strong>Summer Splash Party</strong> - Date: June 15th, 2023</li>
                                <li><strong>Outdoor Movie Night</strong> - Date: July 7th, 2023</li>
                                <li><strong>Adventure Camp</strong> - Dates: July 21st - August 2nd, 2023</li>
                            </ul>
                            <h2>Winter Events</h2>
                            <ul>
                                <li><strong>Winter Wonderland Opening</strong> - Date: December 1st, 2023</li>
                                <li><strong>Santa's Workshop</strong> - Dates: December 8th - 24th, 2023</li>
                                <li><strong>New Year's Eve Party</strong> - Date: December 31st, 2023</li>
                            </ul>
                            <h2>Halloween Events</h2>
                            <ul>
                                <li><strong>Haunted House Tour</strong> - Dates: October 20th - 31st, 2023</li>
                                <li><strong>Pumpkin Carving Contest</strong> - Date: October 28th, 2023</li>
                                <li><strong>Trick-or-Treat Trail</strong> - Date: October 31st, 2023</li>
                            </ul>
                    </div>
                    <Carousel images={EventsIMG}/>
                </div>
            </section>
        </>)
}
export default Events




