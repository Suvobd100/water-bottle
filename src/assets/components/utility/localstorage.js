const getStoredCart = () =>{
    const storedCartString = localStorage.setItem('cart');
    if (storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];

}