function calculateCartTotal(items, taxRate) {
    let subtotal = 0;
    for(let item of items){
        const itemPrice = item?.price * item?.quantity * (1 - (item.discount / 100))
        subtotal+=itemPrice;
    }
    const finalTotal = subtotal * (1 + (taxRate / 100));
    return Number(finalTotal.toFixed(2));
}


console.log(calculateCartTotal([
     { price: 19.99, quantity: 3, discount: 15 }
], 8));