import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import Footer from "./sectionsByEoin/Footer";
import trolley32px from "./imagesByEoin/trolley32px.png";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="">
        <header className="flexTheHeader">
          <div className="header">
            <div className="brand burgerMenu">
              <button onClick={openMenu}>&#9776;</button>
            </div>
            <div className="brand">
              <Link to="/">
                <div className="headingFlexing">
                  <h2>
                    <span className="headingColours">Four Hands</span> Food
                    Studio
                  </h2>
                </div>
                <div>
                  <p>
                    <i>Always driven by nature!</i>
                  </p>
                </div>
              </Link>
            </div>
            <div className="header-links">
              <Link className="cartIconAndLength" to="/cart/:id?">
                <img className="trolley" src={trolley32px} />{" "}
                <div className="cartLength">
                  {cart.cartItems.length === 0 ? null : cart.cartItems.length}{" "}
                </div>
              </Link>
              {userInfo ? <Link to="/profile">{userInfo.name}</Link> : null}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <a href="#">Admin</a>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/orders">Orders</Link>
                      <Link to="/products">Products</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="theActualNav">
              <Link to="/about"><h2>About</h2></Link>
              <Link to="/products"><h2>Products</h2></Link>
              <Link to="/takeaway"><h2>Takeaway</h2></Link>
              <Link to="/recipes"><h2>Recipes</h2></Link>
              <Link to="/events"><h2>Events</h2></Link>
              <Link to="/newletter"><h2>Newsletter</h2></Link>
            </div>
        </header>

        <aside className="sidebar">
          <h3>Navigation</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="">Nav Needed?</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
