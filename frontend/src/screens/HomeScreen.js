import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../sectionsByEoin/Homepage.css";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import rose from "../imagesByEoin/rose.jpeg";
import margaux from "../imagesByEoin/margaux.jpeg";
import fourhandshome from "../imagesByEoin/fourhandshome.png";

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const history = useHistory();
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  // const sortHandler = (e) => {
  //   setSortOrder(e.target.value);
  //   dispatch(listProducts(category, searchKeyword, sortOrder));
  // };

  const buyTakeAway = (e) => {
    history.push("/takeaway");
  };

  const goToProducts = (e) => {
    history.push('/shop');
  }

  return (
    <>
      {category && <h2>{category}</h2>}

      {/* Search Functionality and Box */}
      {/* <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
      </ul> */}

      <div className="homeImages">
        <div className="homepageContainer">
          <img src={fourhandshome} />
        </div>
      </div>

      <div className="homepageContainer">
        <div className="leftHandSide">
          <section id="shop" className="homepagebox">
            <div className="coloredBox violet">
              <h2>Products</h2>
            </div>
            <div className="white">
              <p>
                We currently offer a small range of fermented vegetables and
                drinks such as sauerkraut, kimchi and kombucha aswell as
                fermented vegetable juices.<br/><br/>
                We focus on a starting point: the raw produce.<br/>
                The ingredients we use have to be alive, chemical free and ethically driven.<br/><br/>
                We sell in <a href="#retailers">shops,</a> through <a href="https://www.neighbourfood.ie/markets/mullingar/collection/2373">Neighbourfood Mullingar</a> and our own <span>Online Store</span>
              </p>
              <div className="redButton" onClick={goToProducts}>
                <p><b>SHOP</b></p>
              </div>
            </div>
            <hr className="bottomHR" />
          </section>

          <section className="homepagebox">
            <div className="coloredBox lime">
              <h2>Vision</h2>
            </div>
            <div className="white">
              <p>
                <i>
                  "To live in a world where nature comes first, where we as
                  humans see ourselves of part of nature, not above it. To see
                  all peoples open to receive the goodness our natural
                  surroundings have to offer, showing respect and gratitude for
                  how lucky we are to live in a world which knows better how to
                  care for itself than we ever could."
                </i>
                <br /> <br />- Rose Greene &amp; Margaux Dejardin, 4 Hands Food
                Studio
              </p>
            </div>
            <hr className="bottomHR" />
          </section>

          <section className="homepagebox">
            <div className="coloredBox blue">
              <h2>Blog</h2>
            </div>
            <div className="white">
              <div
                class="aroundBlog w3-justify"
                id="retainable-rss-embed"
                data-rss="https://medium.com/feed/@4handsf"
                data-maxcols="3"
                data-layout="grid"
                data-poststyle="inline"
                data-readmore="Read the rest..."
                data-buttonclass="btn btn-primary"
                data-offset="-100"
              ></div>
            </div>
            <hr className="bottomHR" />
          </section>

          <section className="homepagebox">
            <div className="coloredBox whiteBox">
              <h2>Events</h2>
            </div>
            <div className="white">
              <p>
                4Hands run workshops, private and pop-up dinners. Events are
                currently restricted due to the Covid-19 situation but expect
                more in the future.
                <br />
                In 2020, the Irish Times voted 4Hands Food Studio as 'the best
                pop-up restaurant in Ireland' with dinners being served in the
                Fumbally Stables, Dublin.
              </p>
            </div>
            <hr className="bottomHR" />
          </section>

          <section className="homepagebox">
            <div className="coloredBox orange">
              <h2>Gallery</h2>
            </div>

            <div className="white"></div>
            <hr className="bottomHR" />
          </section>

          <section id="retailers" className="homepagebox">
            <div className="coloredBox blue">
              <h2>Retailers</h2>
            </div>

            <div className="white">
              <table className="table">
                <tr>
                  <th>Store</th>
                  <th>Location</th>
                </tr>
                <tr>
                  <td>Nuts and Grains Mullingar</td>
                  <td>Mullingar, Westmeath</td>
                </tr>
                <tr>
                  <td>Fox's Fruit &amp; Veg</td>
                  <td>Mullingar, Westmeath</td>
                </tr>
                <tr>
                  <td>Lowe &amp; Co.</td>
                  <td>Athlone, Westmeath</td>
                </tr>  
                <tr>
                  <td>Skelly's </td>
                  <td>Ballymahon, Longford</td>
                </tr>
                <tr>
                  <td>Wilder and Gold</td>
                  <td>Ballymahon, Longford</td>
                </tr>
              </table>
            </div>
            <hr className="bottomHR" />
          </section>

          <section className="contactForm homepagebox">
            <div className="coloredBox black">
              <h2>Contact Us:</h2>
            </div>

            <div className="white">
              <form className="contactForm">
                <p>
                  Feel free to contact us about anything to do with how 4 Hands
                  Food Studio operates, for order enquiries or more..
                </p>
                <input className="formbox" type="text" placeholder="Name:" />
                <br />

                <input className="formbox" type="text" placeholder="Email:" />
                <br />

                <textarea
                  className="formbox"
                  rows="6"
                  cols="60"
                  placeholder="Message:"
                />
                <br />

                <div className="formbox">
                  <input className="submitButton" type="Submit" />
                </div>
              </form>
            </div>
            <hr className="bottomHR" />
          </section>
        </div>

        {/* Beginning of right section */}

        <div className="rightHandSide">
          <section className="homepagebox">
            <div className="coloredBox green">
              <h2>Takeaway</h2>
            </div>
            <div className="white">
              <p>
                Nourishing, sustainable, tasty ready-to-go meal to enjoy with
                your loved ones in the comfort of your own home.
                <br />
                <br />
                Our takeaway is by pre-order only, join our mailing list to
                receive the weekly menu, or check out the website each Monday
                for the update.
                <br />
                <br />
                Food is served in glass jars, we greatly appreciate the return
                of clean jars helping eliminate waste.
              </p>
              <div
                onClick={buyTakeAway}
                className="redButton"
              >
                <b>
                  <p>ORDER</p>
                </b>
              </div>
            </div>
            <hr className="bottomHR" />
          </section>

          <section className="homepagebox">
            <div className="coloredBox orange">
              <h3>Our Principles</h3>
            </div>
            <div id="principles" className="white">
              <hr />
              <span>1. Make the best product possible</span>
              <br />
              <br />
              <hr />
              <span>
                2. Always strive to improve and innovate on every level.
              </span>
              <br />
              <br />
              <hr />
              <span>3. Nutrition is key.</span>
              <br />
              <br />
              <hr />
              <span>
                4. Connect with suppliers, continually control and monitor
                supply chain.
              </span>
              <br />
              <br />
              <hr />
              <span>5. Minimize the creation of waste.</span>
              <br />
              <br />
              <hr />
              <span>
                6. Assess the environmental outcome of any business decision
                before making
              </span>
              <br />
              <br />
              <hr />
              <span>7. Support and promote farmers that fit principles.</span>
              <br />
              <br />
              <hr />
              <span>8. Engage with and teach food citizens (customers).</span>
              <br />
              <br />
              <hr />
              <span>
                9. Continually push for the collective good, to give better
                access to sustainable food to a maximum of people, while
                supporting biodiversity and regenerative agriculture.
              </span>
              <br />
              <br />
              <hr />
              <span>10. Lead by example.</span>
            </div>
            <hr className="bottomHR" />
          </section>

          <section className="homepagebox">
            <div className="coloredBox red">
              <h3>About</h3>
            </div>
            <div className="white">
              <p>
                4 Hands Food Studio are producers of naturally fermented foods
                and drinks. Sourcing the best produce, to make the highest
                quality product! 4 Hands keeps to its sustainable thinking by
                the{" "}
                <a href="#principles">
                  <u>principles</u>
                </a>{" "}
                they set in place for their regenerative business model.
                <br />
                <br />4 Hands Food Studio's pop-up dinners have been hailed as{" "}
                <a href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051">
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
                <img src={margaux} />
                <p>
                  <u>Margaux Dejardin</u>
                </p>
              </div>

              <div className="blackBackgroundAbout">
                <img src={rose} />
                <p>
                  <u>Rose Greene</u>
                </p>
              </div>
            </div>
            <br />
            <div className="white">
              <h4>
                <u>Rose</u>
              </h4>
              <p id="rose">
                Rose’s life has always orientated around food, studies in
                Culinary Arts led to cooking in a number of world renowned
                restaurants internationally. She has always focused her career
                on produce, going to the source and supporting farmers while
                instilling the importance of providence to young budding cooks
                she mentored throughout her 15 year career as a chef.
                <br />
                <br />
                Always a curious mind, fermentation became a core of her work.
                Gaining an in-depth understanding of the health benefits of
                fermentation through collaboration with the microbiology
                department of Antwerp university, using her knowledge in natural
                fermentation to assist professors and PHD students in their
                studies.
                <br />
                <br />
                <h4>
                  <u>Margaux</u>
                </h4>
                Margaux’s French roots seen her raised with an appreciation of
                food culture, which followed her throughout her life as a simple
                pleasure. It was only later in life she decided to forge a
                career in her true passion, food. Having a great sensitivity to
                nature, and all living things, the core of her interest in food
                was leading the way in sustainable thinking and the betterment
                of our natural surroundings.
                <br />
                <br />
                Within Europe she gained an extensive knowledge in organic
                farming practices, working along side some amazing farming minds
                to develop her own growing style which she uses today. Wellbeing
                is also key to life, as she continually strives to increase her
                knowledge in medicinal plants and their uses. Together Rose and
                Margaux call upon their experience daily to help them achieve
                their goals as a leading sustainable food business.
              </p>
            </div>
            <hr className="bottomHR" />
          </section>
        </div>
      </div>
    </>
  );
}
export default HomeScreen;
