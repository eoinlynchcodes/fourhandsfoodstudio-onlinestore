import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getTakeaway } from "../actions/takeawayActions";

function TakeawayContainer(props) {
  const [takeawayData, setTakeawayData] = useState([]);

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

  const orderTakeaway = () => {
    
  }

  return (
    <div>
      {takeawayData.map((takeaway) => {
        if(takeaway.isTakeaway === true){
        return (
          <div className="menuTakeawaySection">
            <div>
              
              <h2>This week's menu:</h2>
              <p>For collection on: <u>{takeaway.collectionDate}</u></p>
              <p className="yellowText">
                <u>
                  {takeaway.headingOne}, {takeaway.headingOnePrice}
                </u>
              </p>
              <p>{takeaway.textOne}</p>
            </div>
            <div>
              <p>
                <u className="yellowText">
                  {takeaway.headingTwo}, {takeaway.headingTwoPrice}
                </u>
                <p> {takeaway.textTwo}</p>
              </p>
            </div>
            <p className="yellowText">
              <u>Pick-up points:</u>
            </p>
            <p>{takeaway.pickupPoints}</p>
            <div onClick={orderTakeaway} className="orderButton">
              <b>
                <p>ORDER</p>
              </b>
            </div>
          </div>
        );} else {
          return null;
        }
      })}
    </div>
  );
}

export default TakeawayContainer;
