function Basket({items}) {
    function total() {
        let total = 0;
        for (let item of items) {
            total += item.price * item.amount;
        }
        return total;
    }

    function subTotal(item) {
        return item.price * item.amount;
    }

    return(
        <div className="basket">
            <h2>Basket</h2>
            <table className="basket-items">
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name} x{item.amount}</td>
                        <td>{subTotal(item).toFixed(2)}£</td>
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