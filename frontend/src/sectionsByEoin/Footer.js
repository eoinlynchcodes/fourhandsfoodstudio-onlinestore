import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const history = useHistory();

  const gohome = (e) => {
    history.push("/");
  };

  return (
    <footer className="footer">
      <div className="footerHeading changeMouse">
        <h1 onClick={gohome}>4 Hands Food Studio</h1>
      </div>
      <div className="links">
        <form
          action="https://gmail.us19.list-manage.com/subscribe/post?u=5f345ee5b52850316f8e104b4&amp;id=e9b9605d2b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div>
            <label>
              <u>Newsletter Signup</u>
            </label>
            <div>
              <br />
              <input type="text" placeholder="your@email.here" />
              <input
                type="submit"
                className="subscribeButton"
                value="Sign Up"
                name="subscribe"
              />
            </div>
          </div>
        </form>
        <div className="flexinthefooter">
          <div className="">
            <p>
              <u>Follow us:</u>
            </p>
            <a href="https://www.instagram.com/4hands_food_studio/?hl=en">
              <p>Instagram</p>
            </a>
            <a href="https://medium.com/@4handsf">
              <p>Medium</p>
            </a>
          </div>

          <div className="">
            <p>
              <u>Read:</u>
            </p>
            <a href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051">
              Our Irish Times article
            </a>
            <br />
            <br />
            <a href="https://medium.com/@4handsf">4 Hands Food Studio Blog</a>
          </div>
        </div>

        <nav>
          <h4>
            <u>Navigation:</u>
          </h4>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#retailers">Retailers</a>
          <a href="#takeaways">Takeaways</a>
        </nav>
      </div>

      <div className="bottom">
        <div className="">
          <p>
            <a>&copy; 4 Hands Food Studio 2020</a>
          </p>
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
