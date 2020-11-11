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
      <nav className="footerNavigation">
        <a href="#shop">
          <p>Shop</p>
        </a>
        <a href="#about">
          <p>About</p>
        </a>
        <a href="#contact">
          <p>Contact</p>
        </a>
        <a href="#retailers">
          <p>Retailers</p>
        </a>
        <a href="#takeaways">
          <p>Takeaways</p>
        </a>
      </nav>

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
              <u>
                <p>Newsletter Signup:</p>
              </u>
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
            <p>Our Irish Times article</p>
          </a>
          <a href="https://medium.com/@4handsf">
            <p>4 Hands Food Studio Blog</p>
          </a>
        </div>
      </div>

      <div className="">
          <p id="bottom">
            <a>&copy; 4 Hands Food Studio 2020</a>
          </p>

          <p id="bottom">
            <a href="https://eoinlynch.com">
              Design &amp; Code by <u>Eoin Lynch</u>
            </a>
          </p>
      </div>
    </footer>
  );
}

export default Footer;
