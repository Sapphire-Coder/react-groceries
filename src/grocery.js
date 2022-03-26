const Grocery = props => {
    let { g } = props
    return (
        <div>
            <h2>Item: {g.item}</h2>
            <h3>Brand: {g.brand}</h3>
            <h3>Units: {g.units}</h3>
            <h3>Quantity: {g.quantity}</h3>
        </div>
    )
}

export default Grocery