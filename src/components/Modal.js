import React, { Component } from "react";
import { Consumer } from "../Context";
import { FaUserPlus, FaBan } from "react-icons/fa";

export class Modal extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            singlePlayer,
            modelOpen,
            modalClose,
            openModal,
            addPlayerToSquad,
          } = value;
          const {
            id,
            img,
            Age,
            Name,
            DOB,
            Position,
            startMatch,
          } = singlePlayer;
          if (!openModal) {
            return null;
          } else {
            return (
              <div className="modal">
                <div className="disp text-center col-10 mx-auto col-md-4 col-lg-3 p-5">
                  <img
                    src={img}
                    alt="loading"
                    style={{
                      width: "15rem",
                      height: "20rem",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <p className=" font-weight-bold p-0 mt-2">{Name}</p>
                  <p className=" font-weight-bold p-0 ">{Position}</p>
                  <p className=" font-weight-bold p-0 ">{DOB}</p>
                  <div className="d-flex">
                    <button
                      disabled={startMatch ? true : false}
                      onClick={() => addPlayerToSquad(id)}
                      className="btn btn-success mx-1 py-1 text-center t"
                    >
                      {startMatch ? <FaBan /> : <FaUserPlus />}
                    </button>
                    <button
                      onClick={() => modalClose()}
                      className="btn btn-danger "
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Modal;
