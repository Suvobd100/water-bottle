import PropTypes from "prop-types"

Cart.propTypes={
  cart: PropTypes.array
}

export const Cart = ({cart}) => {
  return (
    <div> 
        <h4>
            My Shopping Cart: {cart.length}
         </h4> 
         {console.log('from cart component:',cart)}
         <div className="flex gap-3">
            {
                cart.map(b=> <img key={b.id} className="w-20 rounded-md mt-2" src={b.img}></img>)
            }
         </div>
</div>
  )

}
