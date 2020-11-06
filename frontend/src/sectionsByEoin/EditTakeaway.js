import Axios from "axios";
import "./sectionsbyEoin.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTakeaway, deleteTakeawayData } from "../actions/takeawayActions";

function EditTakeaway(props) {
  const [takeawayData, setTakeawayData] = useState([]);

  const dispatch = useDispatch();

  const deleteHandler = (takeawayData) => {
    console.log(takeawayData[0]._id);
      dispatch(deleteTakeawayData(takeawayData[0]._id));
  };

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
    <section>
      <hr />
      <div className="editTakeawaySection">
        <div>
          <button onClick={() => deleteHandler(takeawayData)}>Delete Takeaway</button>
          <br />
          {takeawayData.map((takeaway) => {
            console.log(takeaway);
            return (
              <div>
                <div>
                  <h4>
                    <u>
                      {takeaway.starterName}, {takeaway.starterPrice}
                    </u>
                  </h4>
                  <p>{takeaway.starterItems}</p>
                </div>
                <div>
                  <h4><u>{takeaway.menuName}, {takeaway.menuPrice}</u></h4>
                    <p> {takeaway.menuItems}</p>
                </div>
                <p>
                  <u>Pick-up points:</u>
                </p>
                <p>{takeaway.pickUpPoints}</p>
              </div>
            );
          })}
        </div>
        <div>
          <form className="editTakeawayForm">
            <h3>Add Takeaway</h3>
            <label>
              {" "}
              Starter Name:
              <br />
              <input />
            </label>
            <label>
              {" "}
              Starter Items:
              <br />
              <input />
            </label>
            <label>
              {" "}
              Starter Price:
              <br />
              <input />
            </label>
            <label>
              {" "}
              Menu Name:
              <br />
              <input />
            </label>
            <label>
              {" "}
              Menu Items:
              <br />
              <input type="textarea"/>
            </label>
            <label>
              {" "}
              Menu Price:
              <br />
              <input />
            </label>
            <label>
              {" "}
              Pick-Up Points:
              <br />
              <input />
            </label>
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
