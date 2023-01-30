import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Cartcontext } from "../../context/Context";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const Homepage = ({filterdItems}) => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
   
  };
  useEffect(() => {
    fetchData();
  }, []);


  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  return (
    <div className="home">
      {data.map((item, index) => 
        (filterdItems.toLowerCase() == "all") ? (
          <div
            className="card"
            key={index}
            style={{
              color: "white",
            }}
          >
            <NavLink
              to={`/${item.id}`}
              className="btn btn-outline-dark"
              style={{
                opacity: "1",
              }}
            >
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <h3>$ {item.price}</h3>
              <p className="lead fw-bolder">
                {item.rating && item.rating.rate}
                <StarOutlinedIcon />
              </p>
            </NavLink>
          </div>
      ):(item.category == filterdItems.toLowerCase()) && (
        <div
          className="card"
          key={index}
          style={{
            color: "white",
          }}
        >
          <NavLink
            to={`/${item.id}`}
            className="btn btn-outline-dark"
            style={{
              opacity: "1",
            }}
          >
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$ {item.price}</h3>
            <p className="lead fw-bolder">
              {item.rating && item.rating.rate}
              <StarOutlinedIcon />
            </p>
          </NavLink>
        </div>
    ) )}
    </div>
  );
};

export default Homepage;

{
  /* <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button> */
}
