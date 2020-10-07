import React from "react";

function Footer() {
  return (
    <footer className="w3-container w3-dark-grey">
      <div className="footerContainer">
        <div className="footerSections">
          <p>Follow us:</p>
          <a href="https://www.instagram.com/4hands_food_studio/?hl=en">
            <p>
              <u>Instagram</u>
            </p>
          </a>
          <a href="https://medium.com/@4handsf">
            <p>
              <u>Medium</u>
            </p>
          </a>
        </div>

        <div className="footerSections">
          <p>Read:</p>
          <a href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051">
            <u>Irish Times article</u>
            <br />
          </a>
          <a href="https://medium.com/@4handsf">
            <u>4 Hands Food Studio Blog</u>
          </a>
        </div>
      </div>

      <div className="middleOfFooter">
        <p>4 Hands Food Studio &copy; 2020.</p>
        <br />
      </div>

      <div className="middleOfFooter">
        <p>
          <a href="https://eoinlynch.com">
            Design &amp; Code, by <u>Eoin Lynch</u>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
