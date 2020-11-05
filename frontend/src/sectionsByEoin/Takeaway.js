import React from "react";
import TakeawayContainer from "./TakeawayContainer";

function Takeaway() {
  return (
    <section className="aboutContainer">
      <div class="vl"></div>
      <div>
        <div className="coloredBox green">
          <h2>Takeaway</h2>
        </div>
        <div className="white">
          <p>
            Nourishing, sustainable, tasty ready-to-go meal to enjoy with your
            loved ones in the comfort of your own home.
            <br />
            <br />
            Our takeaway is by pre-order only, join our mailing list to receive
            the weekly menu, or check out the website each Monday for the
            update.
            <br />
            <br />
            Food is served in glass jars, we greatly appreciate the return of
            clean jars helping eliminate waste.
          </p>
          <div className="redButton">
            <b>
              <p>ORDER</p>
            </b>
          </div>
          <TakeawayContainer/>
        </div>
      </div>
      <div class="vl"></div>
    </section>
  );
}

export default Takeaway;
