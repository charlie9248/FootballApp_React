import React, { Component } from "react";
import { Consumer } from "../Context";
import Porfile from "../components/Profiles";

export class PlayersPage extends Component {
  render() {
    return (
      <>
        <h2 className="text-center my-3">Select your best 11 players</h2>
        <div className="container">
          <div className="row">
            <Consumer>
              {(value) => {
                const { players } = value;
                return players.map((player) => (
                  <Porfile key={player.id} player={player} value={value} />
                ));
              }}
            </Consumer>
          </div>
        </div>
      </>
    );
  }
}

export default PlayersPage;
