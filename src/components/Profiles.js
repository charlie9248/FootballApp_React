import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { FaInfo, FaBan } from "react-icons/fa";
import Modal from "../components/Modal";
const Profiles = ({ player, value }) => {
  const { img, Name, Age, Position, id, startMatch } = player;
  const { maximumNumberOfPlayers, addPlayerToSquad, count, modalOpen } = value;
  console.log(count);

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4">
      <div className="card text-center my-3">
        <div className="img-container">
          <img
            style={{ width: "10rem", height: "10rem" }}
            className="img card-img-top"
            src={img}
            alt=""
          />

          <button onClick={() => modalOpen(id)} className="info-btn">
            <FaInfo />
          </button>

          <button
            disabled={startMatch ? true : false}
            onClick={() => {
              addPlayerToSquad(id);
              maximumNumberOfPlayers();
            }}
            className="add-btn"
          >
            {startMatch ? <FaBan /> : <FaUserPlus />}
          </button>
        </div>
        <div className="card-footer p-0">
          <p className="card-text text-center font-style-italic  font-weight-bold p-0">
            <span className="text-muted">Name</span> : {Name}
          </p>

          <p className="card-text text-center font-style-italic  font-weight-bold p-0">
            <span className="text-muted">Age</span> : {Age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
