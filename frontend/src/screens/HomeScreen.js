import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import Homepage from "../sectionsByEoin/Homepage";

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

          <section className="homepagebox">
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
                      <div className="product">
                        <Link to={"/product/" + product._id}>
                          <img className="product-image" src={product.image} />
                        </Link>
                        <div className="product-name">
                          <Link to={"/product/" + product._id}>
                            {product.name}
                          </Link>
                        </div>
                        <div className="product">{product.brand}</div>
                        <div className="product">€{product.price}</div>
                        <Link to={"/product/" + product._id}>
                          <div className="button">Curious?</div>
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
              <h2>Takeaways</h2>
            </div>
            <div className="white">
              <p>
              Nourishing, sustainable, tasty ready-to-go meal to enjoy with your loved ones in the
              comfort of your own home.
              <br/>
              <br/>
              Our takeaway is by pre-order only, join our mailing list to receive the weekly menu, or check out the
              website each Monday for the update.
              <br/>
              <br/>
              Food is served in glass jars, we greatly appreciate the return of clean jars helping eliminate waste.
              </p>
            </div>
          </section>

        </div>

        <div className="rightHandSide">
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
              <h3>About Rose &amp; Margaux</h3>
            </div>
            <div className="white">
              <p>
              Rose’s life has always orientated around food, studies in Culinary Arts
              led to cooking in a number of
              world renowned restaurants internationally.
              She has always focused her career on produce, going to the source and supporting farmers while
              instilling
              the importance of providence to young budding cooks she mentored throughout her 15 year career as a
              chef.
              <br /><br />
              Always a curious mind, fermentation became a core of her work.
              Gaining an in-depth understanding of the health benefits of fermentation through collaboration with
              the
              microbiology department of Antwerp university, using her knowledge in natural fermentation to assist
              professors and PHD students in their studies.
              Margaux’s French roots seen her raised with an appreciation of food
              culture, which followed her
              throughout her life as a simple pleasure. It was only later in life she decided to forge a career in
              her
              true passion, food.
              Having a great sensitivity to nature, and all living things, the core of her interest in food was
              leading
              the way in sustainable thinking and the betterment of our natural surroundings.
              <br /><br />
              Within Europe she gained an extensive knowledge in organic farming practices, working along side some
              amazing farming minds to develop her own growing style which she uses today.
              Wellbeing is also key to life, as she continually strives to increase her knowledge in medicinal
              plants
              and their uses.
              Together Rose and Margaux call upon their experience daily to help them achieve their goals as a
              leading
              sustainable food business.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default HomeScreen;
