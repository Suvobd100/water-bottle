// ------------------------js script file for local storage 


const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart'); // Use getItem to retrieve data
    if (storedCartString) {
        return JSON.parse(storedCartString); // Parse JSON string if it exists
    }
    return []; // Return an empty array if no data exists
};

// local storage save data

const saveCartToLs = (cart) => {
    const cartStringified = JSON.stringify(cart); // Convert the cart to a JSON string
    localStorage.setItem('cart', cartStringified); // Save to local storage
};

const addToLs = (id) => {
    const cart = getStoredCart(); // Retrieve the existing cart
    cart.push(id); // Add the new item to the cart
    saveCartToLs(cart); // Save the updated cart back to local storage
};

const removeCartToLs = (id) =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(cId => cId !== id);
    saveCartToLs(remaining);
}


export { addToLs,getStoredCart,removeCartToLs };
