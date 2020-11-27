import Axios from "axios";
import "./sectionsbyEoin.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTakeaway, deleteTakeawayData } from "../actions/takeawayActions";
import { useHistory } from "react-router-dom";
import {
  saveProduct,
  listProducts,
  deleteProdcut,
} from "../actions/productActions";

function EditTakeaway(props) {
  const history = useHistory();
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  const dispatch = useDispatch();

  const [outgoingTakeawayData, setOutgoingTakeawayData] = useState({
    isTakeaway: true,
    collectionDate: "",
    headingOnePrice: null,
    headingOne: "",
    textOne: "",
    headingTwoPrice: null,
    headingTwo: "",
    textTwo: "",
    headingThreePrice: null,
    headingThree: "",
    textThree: "",
    pickupPoints: "",
    otherinfo: "",
  });
  const [takeawayData, setTakeawayData] = useState([]);


  const deleteHandler = (takeaway) => {
    dispatch(deleteProdcut(takeaway._id));
    window.location.reload();
  };

  const handleChange = (event) => {
    setOutgoingTakeawayData({
      ...outgoingTakeawayData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/products/", outgoingTakeawayData)
      .then((response) => {
        setOutgoingTakeawayData(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("/api/products/")
      .then((response) => {
        setTakeawayData(response.data);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  return (
    <section className="homepageContainer">
      <hr />
      <div className="editTakeawaySection">
        <div>
          <br />
          {takeawayData.map((takeaway) => {
            console.log(takeaway);
            if (takeaway.isTakeaway === true) {
              return (
                <div>
                  <h2>Menu currently online</h2>
                  <div>
                    <button onClick={() => deleteHandler(takeaway)}>
                      Delete Takeaway
                    </button>
                    <h4>
                      <u>
                        {takeaway.headingOne}, {takeaway.headingOnePrice}
                      </u>
                    </h4>
                    <p>{takeaway.textOne}</p>
                  </div>
                  <div>
                    <h4>
                      <u>
                        {takeaway.headingTwo}, {takeaway.headingTwoPrice}
                      </u>
                    </h4>
                    <p> {takeaway.textTwo}</p>
                  </div>
                  <p>
                    <u>Pick-up points:</u>
                  </p>
                  <p>{takeaway.pickupPoints}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="editTakeawayForm"
          >
            <h3>Add Takeaway</h3>

            <label>Collection Date:</label>
            <input
              name="collectionDate"
              placeholder="Date"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading One Price:</label>
            <input
              name="headingOnePrice"
              placeholder="Price in €"
              type="price"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading One:</label>
            <textarea
              name="headingOne"
              placeholder="Course Name:"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Text Area One:</label>
            <textarea
              name="textOne"
              placeholder="Course Contents:"
              rows="6"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading Two Price:</label>
            <input
              name="headingTwoPrice"
              placeholder="Price in €"
              type="price"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading Two:</label>
            <textarea
              name="headingTwo"
              placeholder="Course Name:"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Text Area Two:</label>
            <textarea
              name="textTwo"
              placeholder="Course Contents:"
              rows="6"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading Three Price:</label>
            <input
              name="headingThreePrice"
              placeholder="Price in €"
              type="price"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading Three:</label>
            <textarea
              name="headingThree"
              placeholder="Course Name:"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Text Area Three:</label>
            <textarea
              name="textThree"
              placeholder="Course Contents:"
              rows="6"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Pick-Up Points:</label>
            <textarea
              name="pickupPoints"
              placeholder="Where can it be collected?"
              rows="6"
              onChange={(event) => handleChange(event)}
            />

            <label>Other Information to Add:</label>
            <textarea
              name="otherinfo"
              placeholder="Any other information to add:"
              rows="8"
              onChange={(event) => handleChange(event)}
            />
            <br />
            <br />
            <button type="submit">Add</button>
            <br />
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditTakeaway;
