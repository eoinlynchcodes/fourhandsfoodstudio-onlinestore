import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerHeading">
        <h1>4 Hands Food Studio</h1>
      </div>
      <div className="links">
        <div className="">
          <p>Follow us:</p>
          <a href="https://www.instagram.com/4hands_food_studio/?hl=en">
            <p>
              Instagram
            </p>
          </a>
          <a href="https://medium.com/@4handsf">
            <p>
              Medium
            </p>
          </a>
        </div>

        <div className="">
          <p>Read:</p>
          <a href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051">
            Irish Times article
            <br />
          </a>
          <a href="https://medium.com/@4handsf">
            4 Hands Food Studio Blog
          </a>
        </div>

        <nav>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#retailers">Retailers</a>
          <a href="#takeaways">Order Takeaways</a>
        </nav>
      </div>

      <div className="bottom">
        <div className="">
          <p><a>&copy; 4 Hands Food Studio 2020</a></p>
        </div>

        <div className="">
          <p>
            <a href="https://eoinlynch.com">
              Design &amp; Code by <u>Eoin Lynch</u>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
