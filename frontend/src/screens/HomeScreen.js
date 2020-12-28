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
    history.push("/shop");
  };

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
        <div>
          <div className="homepageFirstPiece">
          <div id="thisOneVL"></div>

            <section className="first homepageSection">
              <div className="violet">
                <h3>The Fermented Goods</h3>
              </div>
              <p className="paraforalignment">
                We currently offer a small range of fermented vegetables and
                drinks well known as sauerkraut, kimchi and kombucha aswell as
                fermented vegetable juices.
                <br />
                We focus on a starting point: the raw produce.
                <br /><br />
                The ingredients we use have to be alive, chemical free and
                ethically produced.
                <br />              
                We sell in <a className="linkToNormalise" href="#retailers"><u> shops</u></a>, through <a
                  className="linkToNormalise"
                  href="https://www.neighbourfood.ie/markets/mullingar/collection/2373"
                >
                  <u>Neighbourfood Mullingar</u>
                </a> and our  {" "}  
                 <a className="linkToNormalise" href="/shop"> 
                    <u>Online Store. </u>
                </a>
              </p>
              <div id="orangeButton" className="redButton" onClick={goToProducts}>
                <p>
                  <b>CHECK OUT HERE</b>
                </p>
              </div>
            </section>

            <div id="thisOneVL"></div>

            <section className="second homepageSection">
              <div  className="green">
                <h3>TAKE-AWAY Dinner</h3>
              </div>
              <p id="centeringTakeaway" className="paraforalignment">
                We offer a weekly takeaway dinner, in between fine and casual.
                An ideal choice when going out is not on your agenda and
                microwave food is not an option. Spaces are limited so click in
                to order!
              </p>
              <div onClick={buyTakeAway} id="greenButton" className="redButton">
                <b>
                  <p>ORDER</p>
                </b>
              </div>
            </section>
            <div id="thisOneVL"></div>
          </div>

          <section className="homepageSection">
            <div className="yellow">
              <h2>Newsletter Signup</h2>
            </div>
            <div className="vl"></div>
            <div className="newsletterComponent centreNewsletter">
            <br/><br/>
              <p className="paraforalignment">
                Join our mailing list to receive our weekly takeaway offering
                and latest news!
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
                <div className="formAndMoreNewsletter">
                  <div className="newsletterForm">
                    <input placeholder="your@email.here" />
                    <input
                      className="subscribeButton"
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="vl"></div>

            <hr className="bottomHR" />
          </section>
        </div>
      </div>
    </>
  );
}
export default HomeScreen;
