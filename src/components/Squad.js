import React from "react";
import Player from "./Player";
import { Consumer } from "../Context";

const Squad = () => {
  return (
    <Consumer>
      {(value) => {
        const { Sqaud } = value;
        return (
          <>
            <div className="container-fluid text-center">
              <div className="row my-3 ">
                <div className="col-10  col-lg-2">profile</div>
                <div className="col-10  col-lg-2">Name</div>
                <div className="col-10  col-lg-2">Position</div>
                <div className="col-10  col-lg-2">DOB</div>
                <div className="col-10  col-lg-2">Substitude</div>
                <div className="col-10  col-lg-2">Age</div>
              </div>
            </div>
            <>
              <div>
                {Sqaud.map((player) => (
                  <Player key={player.id} player={player} value={value} />
                ))}
              </div>
            </>
          </>
        );
      }}
    </Consumer>
  );
};

export default Squad;
