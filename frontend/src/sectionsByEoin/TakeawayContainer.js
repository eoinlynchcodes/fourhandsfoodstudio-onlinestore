import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getTakeaway } from "../actions/takeawayActions";
import { useHistory } from 'react-router-dom';

function TakeawayContainer(props) {
  const [takeawayData, setTakeawayData] = useState([]);
  const history = useHistory();

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

  const orderTakeaway = (id) => {
    debugger
    console.log(id);
    history.push('/cart/' + id);
  }

  return (
    <div className="menuTakeawaySection">
        <h2>This week's menu:</h2>

{/* For Details */}

{takeawayData.map((takeaway) => {
        if(takeaway.isTakeaway === true){
        return (
          <div>
            <div className="takeawayDetails">
              {takeaway.collectionDate ? <p><u className="yellowText" >Collection Date:</u><br/> {takeaway.collectionDate}</p> : null }
              {takeaway.pickupPoints ? (<p><u className="yellowText">Pick-up points:</u><br/> {takeaway.pickupPoints}</p>) : null }
            </div>
          </div>
        );} else {
          return null;
        }
      })}
      <hr/>

{/* For Menu */}
      {takeawayData.map((takeaway) => {
        if(takeaway.isTakeaway === true){
        return (
          <div>
            <div>
              <p className="yellowText">
                <u>
                  {takeaway.mainTitle}
                </u>
              </p>
              <p>{takeaway.mainItems}</p>
            </div>
            <div>
              <p>
                <u className="yellowText">
                  {takeaway.courseTitle}
                </u>
                <p> {takeaway.courseText}</p>

                {takeaway.price ? <p><u>Price:</u> €{takeaway.price} </p> : null}
              </p>
            </div>
            <div>
            { takeaway.price ? <div onClick={() => orderTakeaway(takeaway._id)} className="orderButton"><b><p>ORDER</p></b></div> : null }
            </div>
            <hr/>
          </div>
        );} else {
          return null;
        }
      })}
    </div>
  );
}

export default TakeawayContainer;
