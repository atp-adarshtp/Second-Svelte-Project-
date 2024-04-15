import { writable, derived } from "svelte/store";
// import localCart from "../localCart";
// cart

function getStorageCart() {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}
export function setStorageCart(cartValues) {
    localStorage.setItem("cart", JSON.stringify(cartValues));
}
const cart = writable(getStorageCart());

// cart total
export const cartTotal = derived(cart, ($cart) => {
    let total = $cart.reduce((acc, curr) => {
        return (acc += curr.amount * curr.price);
    }, 0);
    return total.toFixed(2);
});

// local functions
const remove = (id, items) => {
    return items.filter(items => items.id !== id);
};

const toggleAmount = (id, items, action) => {
    return items.map(item => {
        let newAmount;
        if (action === "inc") {
            newAmount = item.amount + 1;
        } else if (action === "dec") {
            newAmount = item.amount - 1;
        } else {
            newAmount = item.amount;
        }
        return item.id === id ? { ...item, amount: newAmount } : { ...item };
    });
};

// global functions
// increaseAmount amount cart items
export const removeItem = id => {
    cart.update(storeValue => {
        return remove(id, storeValue);
    });
};

export const increaseAmount = id => {
    cart.update(storeValue => {
        return toggleAmount(id, storeValue, "inc");
    });
};

// decrease Amount cart items
export const decreaseAmount = (id, amount) => {
    cart.update(storeValue => {
        let updatedCart; //^ Correct variable name from 'cart' to 'updatedCart'
        if (amount === 1) {
            updatedCart = remove(id, storeValue); //^ Corrected variable assignment
        } else {
            updatedCart = toggleAmount(id, storeValue, 'dec'); //^ Corrected variable assignment
        }
        return [...updatedCart]; //^ Corrected return statement
    });
};

export const addToCart = product => {
    cart.update(storeValue => {
        const { id, image, title, price } = product;
        let item = storeValue.find(item => item.id === id);
        let updatedCart;
        if (item) {
            updatedCart = toggleAmount(id, storeValue, 'inc');
        } else {
            let newItem = { id, image, title, price, amount: 1 };
            updatedCart = [...storeValue, newItem];
        }
        return updatedCart;
    });
};

// function getStorageCart() {
//     return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// }

// export function setStorageCart(cartValues) {
//     localStorage.setItem('cart', JSON.stringify(cartValues));
// }

export default cart;
