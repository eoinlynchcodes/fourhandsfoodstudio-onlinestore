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
            <p><i>"To live in a world where nature comes first, where we as humans see ourselves of part of nature, not
                above it. To see all peoples open to receive the goodness our natural surroundings have to offer,
                showing
                respect and gratitude for how lucky we are to live in a world which knows better how to care for itself
                than we ever could."</i>
              <br /> <br />
              - Rose Greene & Margaux Dejardin, 4 Hands Food Studio
            </p>
            </div>
        </section>

        <section className="homepagebox">

        </section>

        <section className="homepagebox">
            
        </section> 
        
        <section className="homepagebox">

        </section>
      </section>
      <section className="rightHandSide">
        <section className="homepagebox">
            <div className="black">
                <h2>Principles</h2>
            </div>
            <div className="white">
                <li>
                    1. Make the best product possible
                </li>
                <li>
                    2. Always strive to improve and innovate on every level.
                </li>
            </div>
        </section>
      </section>
    </div>
  );
}

export default Homepage;
