import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import { Cartcontext } from '../../context/Context';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';



const SingleProduct = () => {
 const { id } = useParams();
 const [SingleProduct, setProduct] = useState([]);
 const [loading, setLoading] = useState(false);

 const Globalstate = useContext(Cartcontext);
 const state = Globalstate.state;
 const dispatch = Globalstate.dispatch;

 const total = state.reduce((total, item) => {
  return item.quantity;
 }, 0);

 useEffect(() => {
  const getProduct = async () => {
   setLoading(true);
   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
   const json = await response.json()
   setProduct([json]);
   setLoading(false);
  }
  getProduct();
 }, []);
 console.log(SingleProduct)

 const Loading = () => {
  return (
   <>
    loading....
   </>
  )
 }
 console.log(state)

 const ShowProduct = () => {
  return (
   <>
    <div className='col-12'>
     {SingleProduct?.map((item, index) => {
      return (
       <>
        <div className="col-md-4">
         <img src={item.image} alt={item.title} height="430px" width="350px" />

        </div>
        <div className="col-md-5">
         
         <h3 className="display-5">
         <h4>{item.category}</h4>
          {item.title}
         </h3>
         <h4 className="display-7 fw-bold my-4">price: $ {item.price}</h4>
        </div>
        <div className="col-md-2">
         <h3 className="display-1">
          <button className="btn btn-primary btn-sm" onClick={() => dispatch({ type: "ADD", payload: {...item, quantity: 1} })}>
           add to cart
          </button>
          <div className='container'>
           <div className='row'>
            <div className="col-sm">
             <AddShoppingCartOutlinedIcon fontSize="large" onClick={() => dispatch({ type: "INCREASE", payload: item })} /></div>
            <div className="col-sm"><p>{total}</p></div>
            <div className="col-sm"><RemoveShoppingCartOutlinedIcon fontSize="large"
             onClick={() => {
              if (item.quantity > 1) {
               dispatch({ type: "DECREASE", payload: item });
              }
             }}
            />
            </div>
           </div>
          </div>

         </h3>
        </div>

        <p className='lead'>{item.description}</p>

        <p className='lead fw-bolder'>
         {item.rating && item.rating.rate}
         <StarOutlinedIcon />
        </p>


       </>
      )
     })}

    </div>
   </>
  )

 }


 return (
  <div>
   <div className="d-flex p-2">
    <div className="container">
     <div className="row">
      {loading ? <Loading /> : <ShowProduct />}

     </div>
    </div>
   </div>
  </div>
 );
}
export default SingleProduct;