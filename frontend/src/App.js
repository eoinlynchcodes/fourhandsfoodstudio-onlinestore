import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import Newsletter from "./sectionsByEoin/Newsletter";
import Shop from "./sectionsByEoin/Shop";
import Takeaway from "./sectionsByEoin/Takeaway";
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
import About from "./sectionsByEoin/About";
import TakeawayHandling from "./screens/TakeawayHandling";
import Blog from "./sectionsByEoin/Blog";
import EditTakeaway from "./sectionsByEoin/EditTakeaway";
import ContactForm from './sectionsByEoin/ContactForm.js';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51I6HfqKCoR6minuUWX6pYxagadWiNnVY7SRQGpPCoiKTA5yo0NzPgY0QCmbltHAGGLwx1uWiTr2THMpQVh2Lhl6i00sVGtNjCP');

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
      <Elements stripe={promise}>

      <div className="entireparentcontainer">
        <header className="flexTheHeader">
          <div className="header">
            
            <div id="noMargin" className="brand burgerMenu">
              <button onClick={openMenu}>&#9776;</button>
            </div>

            <div className="fourHandsHeading">
              <Link to="/">
                <h3 className="fourHandsHeadingText">
                  <span className="headingColours">4 Hands</span>Food Studio
                </h3>
              </Link>
            </div>

            <div className="header-links">
              <Link className="" to="/cart/:id?">
                {/* <img className="trolley" src={trolley32px} />{" "} */}
              <h5>CART{cart.cartItems.length ? <h5>({cart.cartItems.length})</h5> : null} </h5>
                {/* {cart.cartItems.length ? (
                  <div className="cartLength">
                    <p>{cart.cartItems.length}</p>
                  </div>
                ) : null} */}
              </Link>
              {userInfo ? <Link to="/profile">{userInfo.name}</Link> : null}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <a href="#">Admin</a>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/orders">Orders</Link>
                      <Link to="/products">Products</Link>
                      <Link to="/edittakeaway">Takeaway</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
                <hr/>
          <div className="theActualNav">
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <Link to="/about">
              <h2>About</h2>
            </Link>
            <Link to="/shop">
              <h2>Products</h2>
            </Link>
            <Link to="/takeaway">
              <h2>Takeaway</h2>
            </Link>
            <Link to="/blog">
              <h2>Blog</h2>
            </Link>
            <Link to="/events">
              <h2>Events</h2>
            </Link>
          </div>
        </header>
        {/* <hr/> */}
       

        <aside className="sidebar">
          <h3>Navigation</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/takeaway">Takeaway</Link>
              <Link to="/blog">Recipes</Link>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/takeaway" component={Takeaway} />
            <Route path="/newsletter" component={Newsletter} />
            <Route path="/about" component={About} />
            <Route path="/edittakeaway" component={EditTakeaway} />
            <Route path="/shop" component={Shop} />
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/takeawayhandling" component={TakeawayHandling} />
            <Route path="/shipping" component={ShippingScreen} />
            {/* <Route path="/payment" component={PaymentScreen} /> */}
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/blog" component={Blog} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/contact" component={ContactForm} />
          </div>
        </main>
        <Footer />
      </div>
      </Elements>
    </BrowserRouter>
  );
}

export default App;
