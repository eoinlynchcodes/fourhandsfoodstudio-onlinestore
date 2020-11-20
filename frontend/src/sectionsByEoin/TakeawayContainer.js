import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getTakeaway } from "../actions/takeawayActions";

function TakeawayContainer(props) {
  const [takeawayData, setTakeawayData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/takeaway/")
      .then((response) => {
        setTakeawayData(response.data);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  return (
    <div>
      {takeawayData.map((takeaway) => {
        console.log(takeaway);
        return (
          <div className="menuTakeawaySection">
            <div>
              <h4>
                <u>
                  {takeaway.starterName}, {takeaway.starterPrice}
                </u>
              </h4>
              <p>{takeaway.starterItems}</p>
            </div>
            <div>
              <h4>
                <u>
                  {takeaway.menuName}, {takeaway.menuPrice}
                </u>
                <p> {takeaway.menuItems}</p>
              </h4>
            </div>
            <p>
              <u>Pick-up points:</u>
            </p>
            <p>{takeaway.pickUpPoints}</p>
            <div className="orderButton">
                <b>
                  <p>ORDER</p>
                </b>
              </div>
          </div>
        );
      })}
    </div>
  );
}

export default TakeawayContainer;
