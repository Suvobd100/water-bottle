import PropTypes from "prop-types"
Bottle.propTypes={
  props: PropTypes.object.isRequired,
  fAddCart: PropTypes.func.isRequired
}
export default function Bottle({props,fAddCart}) {
    // {
    //     "id": "9e7cda87-8160-458f-bd32-ecf253a2d86a",
    //     "category": "Bottle",
    //     "name": "Steel Metal Bottle 1L",
    //     "seller": "Addidas",
    //     "price": 33,
    //     "stock": 7,
    //     "ratings": 4,
    //     "ratingsCount": 62,
    //     "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
    //     "shipping": 15,
    //     "quantity": 0
    // }
    // console.log(props);
    const {name,img,price}=props
    // console.log(fAddToCart);
  return (
    <div className="mt-3 border-2 border-indigo-600 rounded-xl mb-5 lg:w-80 w-4/4 p-5 text-center gap-2">
        <h2 className="text-xl">
        Title: {name}
       </h2>
       <span className="justify-center items-center flex mt-2">
        <img className="w-36 rounded-md" src={img} alt="" />
        </span>
        <p className="text-xl">Price: {price}</p>
        <button onClick={()=>fAddCart(props)} className="btn btn-active mt-3">Purchase</button>
    </div>
  )
}
