import Basket from "./Basket";
import {useOutletContext} from "react-router-dom";

function Package(props) {
    return (
        <div>
            Big package so good omg
        </div>
    )
}

function PackagesList(props) {
    return (
        <div>
            <Package/>
            <Package/>
        </div>
    )
}

function OrderSummary() {
    const props = useOutletContext();
    // const props = {...orderProps};

    return (
        <section className="content-section">
            <h1>Order summary</h1>
            <div className="summary-panel">
                <PackagesList {...props}/>
                <Basket items={props.basket.items}/>
            </div>
        </section>
    )
}

export default OrderSummary;