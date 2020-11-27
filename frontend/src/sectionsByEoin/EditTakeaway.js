import Axios from "axios";
import "./sectionsbyEoin.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTakeaway, deleteTakeawayData } from "../actions/takeawayActions";
import { useHistory } from 'react-router-dom';

function EditTakeaway(props) {

  const history = useHistory();

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
    otherinfo: ""
  });
  const [takeawayData, setTakeawayData] = useState([]);

  const dispatch = useDispatch();

  const deleteHandler = (takeawayData) => {
    console.log(takeawayData[0]._id);
    axios.delete(`/api/products/${takeawayData[0]._id}`)
    .then(response => {
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleChange = (event) => {
    setOutgoingTakeawayData({
      ...outgoingTakeawayData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger
    console.log(outgoingTakeawayData);
    axios.post('/api/products/', outgoingTakeawayData)
    .then(response => {
      setOutgoingTakeawayData(response.data);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    axios
      .get("/api/products/")
      .then((response) => {
        console.log(response.data);
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
          <button onClick={() => deleteHandler(takeawayData)}>
            Delete Takeaway
          </button>
          <br />
          {
          takeawayData.map((takeaway) => {
            console.log(takeaway);
            if(takeaway.isTakeaway === true){
            return (
              <div>
                <h2>Menu currently online</h2>
                <div>
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
            );} else {
              return null;
            }
          })}
        </div>
        <div>
          <form onSubmit={event => handleSubmit(event)} className="editTakeawayForm">
            <h3>Add Takeaway</h3>

            <label>Collection Date:</label>
            <input
              name="collectionDate"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading One Price:</label>
            <input 
            name="headingOnePrice"
            type="price"
            onChange={(event) => handleChange(event)}
            />
            <br/>

            <label>Heading One:</label>
            <textarea
              name="headingOne"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Text Area One:</label>
            <textarea
              name="textOne"
              rows="6"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Heading Two Price:</label>
            <input 
            name="headingTwoPrice"
            type="price"
            onChange={(event) => handleChange(event)}
            />
            <br/>

            <label>Heading Two:</label>
            <textarea
              name="headingTwo"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Text Area Two:</label>
            <textarea
              name="textTwo"
              rows="6"
              onChange={(event) => handleChange(event)}
            />
            <br />

    <label>Heading Three Price:</label>
            <input 
            name="headingThreePrice"
            type="price"
            onChange={(event) => handleChange(event)}
            />
            <br/>


            <label>Heading Three:</label>
            <textarea
              name="headingThree"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Text Area Three:</label>
            <textarea
              name="textThree"
              rows="6"
              onChange={(event) => handleChange(event)}
            />
            <br />

            <label>Pick-Up Points:</label>
            <textarea
              name="pickupPoints"
              rows="6"
              onChange={(event) => handleChange(event)}
            />

            <label>Other Information to Add:</label>
            <textarea 
            name="otherinfo"
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
