import shopData from "./shop-data.json";

function Basket({items}) {
    function total() {
        let total = 0;
        for (let item of items.tickets) {
            total += shopData.tickets[item.ticketType].price * item.ticketNb;
            total += shopData.tickets[item.ticketType]["child_price"] * item.ticketChildNb;
        }
        return total;
    }

    function subTotal(item, child) {
        if (child) {
            return shopData.tickets[item.ticketType]["child_price"] * item.ticketChildNb;
        }
        return shopData.tickets[item.ticketType].price * item.ticketNb;
    }

    return(
        <div className="basket">
            <h2>Basket</h2>
            <table className="basket-items">
                {items.tickets.map((item) => (
                    <tr key={item.id}>
                        <td>{item.ticketType} x{item.ticketNb}</td>
                        <td>{subTotal(item, false).toFixed(2)}£</td>
                    </tr>
                ))}
                {items.tickets.map((item) => (
                    <tr key={item.id}>
                        <td>{item.ticketType + " child"} x{item.ticketChildNb}</td>
                        <td>{subTotal(item, true).toFixed(2)}£</td>
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