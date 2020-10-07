import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepageContainer">
      <section className="leftHandSide">
        <section className="homepagebox">
          <div className="black">
            <h2>Vision</h2>
          </div>
          <div className="white">
            <p>
              <i>
                "To live in a world where nature comes first, where we as humans
                see ourselves of part of nature, not above it. To see all
                peoples open to receive the goodness our natural surroundings
                have to offer, showing respect and gratitude for how lucky we
                are to live in a world which knows better how to care for itself
                than we ever could."
              </i>
              <br /> <br />- Rose Greene &amp; Margaux Dejardin, 4 Hands Food Studio
            </p>
          </div>
        </section>

        <section className="homepagebox"></section>

        <section className="homepagebox"></section>

        <section className="homepagebox"></section>
      </section>
      <section className="rightHandSide">
        <section className="homepagebox">
          <div className="black">
            <h3>Our Principles</h3>
          </div>
          <div id="principles" className="white">
            <hr/>
            <span>1. Make the best product possible</span>
            <br />
            <br />
            <hr/>
            <span>
              2. Always strive to improve and innovate on every level.
            </span>
            <br />
            <br />
            <hr/>
            <span>3. Nutrition is key.</span>
            <br />
            <br />
            <hr/>
            <span>
              4. Connect with suppliers, continually control and monitor supply
              chain.
            </span>
            <br />
            <br />
            <hr/>
            <span>5. Minimize the creation of waste.</span>
            <br />
            <br />
            <hr/>
            <span>
              6. Assess the environmental outcome of any business decision
              before making
            </span>
            <br />
            <br />
            <hr/>
            <span>7. Support and promote farmers that fit principles.</span>
            <br/>
            <br />
            <hr/>
            <span>8. Engage with and teach food citizens (customers).</span>
            <br />
            <br />
            <hr/>
            <span>
              9. Continually push for the collective good, to give better access
              to sustainable food to a maximum of people, while supporting
              biodiversity and regenerative agriculture.
            </span>
            <br />
            <br />
            <hr/>
            <span>10. Lead by example.</span>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Homepage;
