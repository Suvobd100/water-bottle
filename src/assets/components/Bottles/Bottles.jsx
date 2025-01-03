import { useEffect } from "react"
import { useState } from "react"
import Bottle from "../Bottle/Bottle"
import { addToLs, getStoredCart, removeCartToLs } from "../utility/localstorage"
import { Cart } from "../Cart/Cart"


export default function Bottles() {
    const [bottles,setBottles] = useState([])
   
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // load cart from local storage
    useEffect(()=>{
        console.log('called from useEffect:---',bottles.length);
       if (bottles.length>0){
        const storedCart = getStoredCart();
        // console.log(storedCart,bottles);
        const savedCart = [];
        for(const id of storedCart){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id == id)
            if(bottle){
                savedCart.push(bottle)
            }
        }
        console.log('save caret:---',savedCart);
        setCart(savedCart);
       }
    },[bottles])

    // adding ID to local storage
    const handleAddToCart = btl =>{
        // console.log('fun message handel add to cart:',btl);
        const newCart = [...cart,btl];
        setCart(newCart);
        addToLs(btl.id);
    }

    const handelRemoveFromCart = id =>{
        // 2. remove from visual page
        const remainingCart = cart.filter(b => b.id !== id);
        setCart(remainingCart);


        // 1. remove form LS
        removeCartToLs(id)
    }

  return (
    <div>
        <div className="">
        <h2  className="text-2xl font-semibold mb-3">
            Bottles Available Here: {bottles.length}
        </h2>
        {/* <h4>
            Shopping Cart: {cart.length}
        </h4> */}
        <Cart cart={cart}  handelRemoveFromCart={handelRemoveFromCart}></Cart>
        </div>
        <div className="grid grid-cols-3 gap-2">
        {
            bottles.map(b =><Bottle
            key={b.id}
            props={b}
            fAddCart={handleAddToCart}>

            </Bottle>)
            
        }
        </div>

    </div>
  )
}
