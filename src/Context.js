import React, { Component } from "react";
import { liverPool_Players, singlePerson } from "./info";

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      Sqaud: [],
      count: 1,
      singlePlayer: {},
      openModal: false,
      substitutes: [],
    };
  }

  modalOpen = (id) => {
    const tempPlayer = [...this.state.players];
    let selectedPlayer = tempPlayer.find((player) => player.id === id);
    this.setState({
      openModal: true,
      singlePlayer: selectedPlayer,
    });
  };

  modalClose = () => {
    this.setState({
      openModal: false,
    });
  };

  componentDidMount = () => {
    this.getPlayers();
  };

  getPlayers = () => {
    let tempPlayers = [];
    liverPool_Players.forEach((player) => {
      const singlePlayer = { ...player };
      tempPlayers = [...tempPlayers, singlePlayer];
    });

    this.setState({
      players: tempPlayers,
    });
  };

  addPlayerToSquad = (id) => {
    const tempPlayers = [...this.state.players];
    const selectedPlayer = tempPlayers.find((player) => player.id === id);
    selectedPlayer.startMatch = true;
    this.setState({
      Sqaud: [...this.state.Sqaud, selectedPlayer],
      count: this.state.count + 1,
    });
    console.log(selectedPlayer);
  };

  setPlayersStatusToNormal = () => {
    const tempSubstitude = [...this.state.substitutes];

    if (this.state.count <= 12 && tempSubstitude !== null) {
      tempSubstitude.forEach((player) => {
        player.startMatch = false;
      });
    }

    this.setState({
      substitutes: tempSubstitude,
    });
  };

  maximumNumberOfPlayers = () => {
    let tempPlayers = [...this.state.players];
    let substitutes = [];
    if (this.state.count === 11) {
      tempPlayers.map((player) => {
        if (!player.startMatch) {
          player.startMatch = true;
          substitutes = [...substitutes, player];
        }
      });
    }
    this.setState({
      players: tempPlayers,
      substitutes: substitutes,
    });
    console.log(this.state.count);
  };

  substitudePlayer = (id) => {
    const tempSqaud = [...this.state.Sqaud];
    const tempPlayers = [...this.state.players];

    let player = tempPlayers.find((player) => player.id === id);
    player.startMatch = false;

    this.setState(
      () => {
        return {
          Sqaud: tempSqaud.filter((player) => player.id !== id),
          players: tempPlayers,
          count: this.state.count - 1,
        };
      },
      () => {
        this.setPlayersStatusToNormal();
      }
    );
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          addPlayerToSquad: this.addPlayerToSquad,
          maximumNumberOfPlayers: this.maximumNumberOfPlayers,
          substitudePlayer: this.substitudePlayer,
          setPlayersStatusToNormal: this.setPlayersStatusToNormal,
          modalOpen: this.modalOpen,
          modalClose: this.modalClose,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
