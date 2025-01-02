// import { prototype } from "postcss/lib/input"
import PropTypes from "prop-types"


export const Cart = ({cart,handelRemoveFromCart}) => {
  return (
    <div> 
        <h4>
            My Shopping Cart: {cart.length}
         </h4> 
         {console.log('from cart component:',cart)}
         <div className="flex gap-3">
            {
                cart.map(b=> 
                <div key={b.id}>
                  <img className="w-20 rounded-md mt-2" src={b.img}></img>
                  <button onClick={()=> handelRemoveFromCart(b.id)} className="btn">Remove</button>
                </div>)
               
            }
            
         </div>
</div>
  )

 

};
 
Cart.propTypes={
  cart: PropTypes.array,
  handelRemoveFromCart: PropTypes.func
}
