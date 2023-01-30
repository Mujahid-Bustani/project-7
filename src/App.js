
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import SingleProduct from"./pages/singleProduct/SingleProduct";
import Dropdown from "./components/navbar/Dropdown";
import { useState } from 'react';


function App() {
  const [selectedItem, setSelectedItem] = useState("All")
  return (
    <div className="App">
      <Navbar selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      <Routes>
        <Route path="/" element={<Homepage filterdItems={selectedItem}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path=":id" element={<SingleProduct />} />
        <Route path="/category:jewelery" element={<Dropdown />} />
      </Routes>
    </div>
  );
}

export default App;
