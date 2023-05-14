import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="content-section">
            <img src={require("./resources/not_found.png")} className="not-found-img" alt="Not found"/>
            <h2>Looks like the page you're looking for doesn't exist</h2>
            <Link to={"/"}><h3>Return to the main menu</h3></Link>
        </div>
    )
}

export default NotFound;