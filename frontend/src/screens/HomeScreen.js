import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../sectionsByEoin/Homepage.css";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import rose from "../imagesByEoin/rose.jpeg";
import margaux from "../imagesByEoin/margaux.jpeg";
import kombuchas from "../imagesByEoin/kombuchas.jpg";

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
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
        <img src={kombuchas} />
      </div>

      <div className="homepageContainer">
        <div className="leftHandSide">
          <section className="homepagebox">
            <div className="black">
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
          </section>

          <section id="shop" className="homepagebox">
            <div className="black">
              <h2>Products</h2>
            </div>
            <div className="white">
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <ul className="products">
                  {products.map((product) => (
                    <li key={product._id}>
                        {console.log(product)}
                      <div className="product">
                        <Link to={"/product/" + product._id}>
                          <img className="product-image" src={product.image} />
                        </Link>
                        <div className="productDetail">
                          <Link to={"/product/" + product._id}>
                            {product.name}
                          </Link>
                        </div>
                        <div className="productDetail">€{product.price}</div>
                        <Link to={"/product/" + product._id}>
                          <div className="curiousButton">Curious?</div>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <section className="homepagebox">
            <div className="black">
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
          </section>

          <section className="homepagebox">
            <div className="black">
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
          </section>

          <section className="homepagebox">
            <div className="black">
              <h2>Gallery</h2>
            </div>

            <div className="white"></div>
          </section>

          <section className="homepagebox">
            <div className="black">
              <h2>Find 4 Hands Food Studio's Products</h2>
            </div>

            <div className="white">
              <ul>
                <li>Nuts and Grains Mullingar, Westmeath</li>
                <li>Fox's Fruit &amp; Veg Mullingar, Westmeath</li>
                <li>Lowe &amp; Co. Athlone, Westmeath</li>
                <li>Skelly's Ballymahon, Longford</li>
                <li>Wilder and Gold Ballymahon, Longford</li>
              </ul>
            </div>
          </section>

          <section className="contactForm homepagebox">
            <div className="black">
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

                <input
                  className="formbox"
                  type="textarea"
                  placeholder="Message:"
                />
                <br />

                <div className="formbox">
                  <input type="Submit" />
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* Beginning of right section */}

        <div className="rightHandSide">

        <section className="homepagebox">
            <div className="black">
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
            </div>
          </section>

          <section className="homepagebox">
            <div className="black">
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
          </section>

          <section className="homepagebox">
            <div className="black">
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
                <img src={rose} />
                <p>Rose Greene</p>
              </div>

              <div className="blackBackgroundAbout">
                <img src={margaux} />
                <p>Margaux Dejardin</p>
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
          </section>

          <section className="homepagebox">
            <div className="black">
              <h2>Newsletter Signup</h2>
            </div>
            <div className="white">
              <p>
                ***Text about what our news letter contains and why we send it.
              </p>
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
                  <label>Subscribe to our News Letter</label>
                  <div>
                    <input />
                    <div>
                      <input type="submit" value="Subscribe" name="subscribe" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default HomeScreen;
