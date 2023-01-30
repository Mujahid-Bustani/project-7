import "./Navbar.css";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import  {useContext} from 'react'
import { Cartcontext } from "../../context/Context";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { withTheme } from "@emotion/react";
import { light } from "@mui/material/styles/createPalette";
import { color } from "@mui/system";


const Navbar = ({selectedItem, setSelectedItem}) => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const total = state.reduce((total, item) => {
    return total + 1 * item.quantity;
  }, 0);
  return (
    <div className="nav">
      <div className="costmize" style={{
        display:"flex",
        gap:"20px",
        alignItems:"center"
      }}>
        
      <div className="site-logo">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACU0lEQVR4nGNgGAWjYBSMgkEDVq36z7Zr/+/OXft+P9u1/8//wYR37v/9dOf+3x0gN+L0AEjBQDt0FyGP7PvdjtMDgzHkd6Hjfb+f4fbAQDtuP3F4+HogMKHlf2BiK0EDLL0z/1t6Z9FdXSDUfTg9YOSa+B+ECRk00OoYcHsg4TNIwZadX3AasmnHZ7hBA6HO0CXhE04PGLoknAAp6p9xGqdBvdNPwS0cGHUJx3B7wDk+F6TINaz838btHzEMAYm5hVfALXQLr/xPL3WuYWX/oB7IwukBFY9cdiOXxPMghY5BRf97p534v3nnZzAGhQDMMu/o+v/eMXX/6a3O0CXxrFZoKO6aGAT0neKkzT3TbsBCBR37xNT/X7P5zf/Vm17/94FaSg91Fp7p1wxdkqQYiAEgXzZ07/ofmNj839I7A4xB7Kbe3f+37/0Bj1oQm17qtAiFPDogVKTRGzOQCgbawbtGPbB/GCah7Xt//C+sXfnfPrAAZ2nhEFj4v6huFUrmhOHJc86Di0lceh2Div5PnnOBdh4AOQyX5ei4qH4Vhn58jjeCeSK4mHYeAIUuyJLZS27ijOpZi27AY4LURpsRHnmqeIDS1uWoB0gBozHgOpqE/g+6TDzgxagRhR4AVVIgB+Jz/GRaVmTU7qTvondTYkh5YOe+358Hjwd+fyTDA3/2Dx4P/NlLugcO/PYdLB7Yve+3N8keAHti/+/WAffAvt/NDJSAHft/++za92cfKE/QywM7IflvL9khjwsYuiQeMXRNOEwtdaNgFIyCUTAKGAYaAADw+pl0KJlsEwAAAABJRU5ErkJggg=="></img>
      </div>
      {/* <NavLink to="/"> */}
        <Dropdown option={selectedItem} setOption={setSelectedItem} />
      {/* </NavLink> */}
      </div>

      <NavLink style={{
        display:"flex",
        color:"white",
        textDecoration: "none",
      }} to="/cart"><ShoppingCartOutlinedIcon fontSize="large"/><h3>{total}</h3></NavLink>
    </div>
  );
};

export default Navbar;
