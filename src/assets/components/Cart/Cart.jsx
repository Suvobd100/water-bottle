
export const Cart = ({cart}) => {
  return (
    <div> 
        <h4>
            Shopping Cart: {cart.length}
         </h4> 
         {console.log('from cart cmpo:',cart)}
         <div className="flex gap-3">
            {
                cart.map(b=> <img key={b.id} className="w-28" src={b.img}></img>)
            }
         </div>
</div>
  )
}
