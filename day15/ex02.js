function addToCart(cart, product) {
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
            cart[i].quantity += 1;
            found = true;
            break;
        }
    }
    if (!found) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
}

function removeFromCart(cart, id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity -= 1;
            } else {
                cart.splice(i, 1);
            }
            break;
        }
    }
}

function getTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

let cart = [];

console.log("Initial cart:", cart);

addToCart(cart, { id: 1, name: "Apple", price: 1.5 });
console.log("After adding Apple:", cart);

addToCart(cart, { id: 1, name: "Apple", price: 1.5 });
console.log("After adding another Apple:", cart);

addToCart(cart, { id: 2, name: "Banana", price: 2.0 });
console.log("After adding Banana:", cart);

removeFromCart(cart, 1);
console.log("After removing one Apple:", cart);

removeFromCart(cart, 1);
console.log("After removing the last Apple:", cart);

console.log("Total price:", getTotal(cart));
