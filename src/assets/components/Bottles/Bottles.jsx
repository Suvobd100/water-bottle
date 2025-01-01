import { useEffect } from "react"
import { useState } from "react"
import Bottle from "../Bottle/Bottle"


export default function Bottles() {
    const [bottles,setBottles] = useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handleAddToCart = btl =>{
        // console.log('fun message handel add to cart:',btl);
        const newCart = [...cart,btl]
        setCart(newCart)

    }

  return (
    <div>
        <div className="flex justify-between">
        <h2  className="text-2xl font-semibold">
            Bottles Available Here: {bottles.length}
        </h2>
        <h4>
            Shopping Cart: {cart.length}
        </h4>
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
