import React from "react";
import { FaSort } from "react-icons/fa";
const Player = ({ player, value }) => {
  const { id, img, fullName, Age, Position, Citizenship, DOB } = player;
  const { substitudePlayer } = value;
  return (
    <div className="container-fluid text-center">
      <div className="row my-3 ">
        <div className="col-10  col-lg-2">
          <img
            src={img}
            alt="loading"
            style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
          />
        </div>
        <div className="col-10  col-lg-2">{fullName}</div>
        <div className="col-10  col-lg-2">{Position}</div>
        <div className="col-10  col-lg-2">{DOB}</div>
        <div className="col-10  col-lg-2">
          <FaSort
            onClick={() => substitudePlayer(id)}
            className="text-danger"
          />
        </div>
        <div className="col-10  col-lg-2">{Age}</div>
      </div>
    </div>
  );
};

export default Player;
