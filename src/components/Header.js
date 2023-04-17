import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpg";
import useOnline from "../utils/useOnline.js";
import userContext from "../utils/userContext";
const Title = () => (
  <div className="logo">
    <img src={logo} />
    <h3>Akhr Eats</h3>
  </div>
);

const Nav = () => {
  const [loginState, setLoginState] = useState(true);
  const networkStatus = useOnline();
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/cartPage">
          <li>Cart ({cartItems.length})</li>
        </Link>
        <li>{networkStatus ? "🔛" : "📴"}</li>
        {loginState ? (
          <button onClick={() => setLoginState(false)}>Login</button>
        ) : (
          <button onClick={() => setLoginState(true)}>{user.name}</button>
        )}
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Nav />
    </div>
  );
};

export default Header;
