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
        <div class="vl"></div>
        <div className="leftHandSide">
          <section id="shop" className="homepagebox">
            <div className="coloredBox violet">
              <h2>The Fermented Goods</h2>
            </div>
            <p className="paragraph">
              We currently offer a small range of fermented vegetables and
              drinks well known as sauerkraut, kimchi and kombucha aswell as fermented
              vegetable juices.
              <br />
              We focus on a starting point: the raw produce.
              <br />
              The ingredients we use have to be alive, chemical free and
              ethically produced.
              <br />
              We sell in <a className="linkToNormalise" href="#retailers"><u>shops,</u></a> through{" "}
              <a className="linkToNormalise" href="https://www.neighbourfood.ie/markets/mullingar/collection/2373">
                <u>Neighbourfood Mullingar</u>
              </a>{" "}
              and our own <span>Online Store</span>
            </p>
            <div className="redButton" onClick={goToProducts}>
              <p>
                <b>CHECK OUT HERE</b>
              </p>
            </div>
          </section>
        </div>

        <div class="vl"></div>

        <div className="rightHandSide">
          <section className="homepagebox">
            <div className="coloredBox green">
              <h2>TAKE-AWAY Dinner</h2>
            </div>
            <p className="paragraph">
              We offer a weekly takeaway dinner, in between fine and casual. An iedal choice when going out is not on your agenda and microwave food is not an option. Spaces are limisted so click in to order!
            </p>
            <div onClick={buyTakeAway} className="redButton">
              <b>
                <p>ORDER</p>
              </b>
            </div>
          </section>
        </div>
        <div class="vl"></div>
      </div>
    </>
  );
}
export default HomeScreen;
