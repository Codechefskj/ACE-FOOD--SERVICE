import { useSelector } from "react-redux";
// import useResturats from "../Utils/useResturants";
import {Resturantimageinfo} from "./config"

const Cart = () =>{
  let cartiteam = useSelector((store)=>store.cart.iteam);
  console.log(cartiteam);
  // let cartresturants = useResturats(cartiteam.id);
  return (
    // <div>
    // <h1>{cartiteam.name}</h1>
    //   <img
    //       src={Resturantimageinfo + cartiteam.cloudinaryImageId}></img>
    // </div>
    <div>cart</div>
  );
  
}
export default Cart ; 