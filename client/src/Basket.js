import shopData from "./shop-data.json";
export function subTotal(item, count, child) {
    if (child) {
        return shopData.tickets[item.ticketType]["child_price"] * count;
    }
    return shopData.tickets[item.ticketType].price * count;
}

function Basket({items}) {
    function total() {
        let total = 0;
        for (let item of items.tickets.adult) {
            total += shopData.tickets[item.ticketType].price * item.count;
        }
        for (let item of items.tickets.child) {
            total += shopData.tickets[item.ticketType]["child_price"] * item.count;
        }
        return total;
    }

    return(
        <div className="basket">
            <h2>Basket</h2>
            <table className="basket-items">
                {items.tickets.adult.map((item) => (
                    <tr>
                        <td>{item.ticketType} x{item.count}</td>
                        <td>{subTotal(item, item.count, false).toFixed(2)}£</td>
                    </tr>
                ))}
                {items.tickets.child.map((item) => (
                    <tr>
                        <td>{item.ticketType + " child"} x{item.count}</td>
                        <td>{subTotal(item, item.count,true).toFixed(2)}£</td>
                    </tr>
                ))}
                <tr id="basket-total-row">
                    <td>Total amount</td>
                    <td>{total().toFixed(2)}£</td>
                </tr>
            </table>
        </div>
    )
}

export default Basket;