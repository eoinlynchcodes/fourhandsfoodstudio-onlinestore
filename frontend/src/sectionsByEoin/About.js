import React from "react";
import rose from "../imagesByEoin/rose.jpeg";
import margaux from "../imagesByEoin/margaux.jpeg";

function About() {
  return (
      <section className="aboutContainer">
        <div class="vl"></div>
        <div>
        <div className="coloredBox red">
          <h3>About</h3>
        </div>
        <div className="aboutMainText">
          <p>
            4 Hands Food Studio are producers of naturally fermented foods and
            drinks. Sourcing the best produce, to make the highest quality
            product! 4 Hands keeps to its sustainable thinking by the{" "}
            <a className="blacken" href="#principles">
              <u>principles</u>
            </a>{" "}
            they set in place for their regenerative business model.
            <br />
            <br />4 Hands Food Studio's pop-up dinners have been hailed as{" "}
            <a className="blacken" href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051">
              <i>
                <u>"the best pop-up restaurant in Ireland"</u>
              </i>
            </a>{" "}
            by the Irish Times.
            <br />
            <br />4 Hands was founded by Rose Greene and Margaux Dejardin in
            2018, in Rathaspick, Ireland.
          </p>
        </div>
        <div className="flexRoseAndMargaux">
          <div className="blackBackgroundAbout">
            <img src={rose} />
            <p>
              <u>Rose Greene</u>
            </p>
          </div>
          <div className="aboutText">
            <h4>
              <u>Rose</u>
            </h4>
            <p>
              Rose’s life has always orientated around food, studies in Culinary
              Arts led to cooking in a number of world renowned restaurants
              internationally. She has always focused her career on produce,
              going to the source and supporting farmers while instilling the
              importance of providence to young budding cooks she mentored
              throughout her 15 year career as a chef.
              <br />
              <br />
              Always a curious mind, fermentation became a core of her work.
              Gaining an in-depth understanding of the health benefits of
              fermentation through collaboration with the microbiology
              department of Antwerp university, using her knowledge in natural
              fermentation to assist professors and PHD students in their
              studies.
            </p>
          </div>
        </div>

        <div className="flexRoseAndMargaux">
          <div className="aboutText">
            <h4>
              <u>Margaux</u>
            </h4>
            <p>
              Margaux’s French roots seen her raised with an appreciation of
              food culture, which followed her throughout her life as a simple
              pleasure. It was only later in life she decided to forge a career
              in her true passion, food. Having a great sensitivity to nature,
              and all living things, the core of her interest in food was
              leading the way in sustainable thinking and the betterment of our
              natural surroundings.
              <br />
              <br />
              Within Europe she gained an extensive knowledge in organic farming
              practices, working along side some amazing farming minds to
              develop her own growing style which she uses today. Wellbeing is
              also key to life, as she continually strives to increase her
              knowledge in medicinal plants and their uses. Together Rose and
              Margaux call upon their experience daily to help them achieve
              their goals as a leading sustainable food business.
            </p>
          </div>

          <div className="blackBackgroundAbout">
            <img src={margaux} />
            <p>
              <u>Margaux Dejardin</u>
            </p>
          </div>
        </div>
        <br />
        </div>
        <div class="vl"></div>
      </section>
  );
}

export default About;
