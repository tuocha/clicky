import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import PlayerCard from "./components/PlayerCard";
import players from "./players.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the json array
  state = {
    players,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.score);
      });
    }
    this.state.players.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clicker = id => {
    this.state.players.find((o, i) => {
      if (o.id === id) {
        if (players[i].count === 0) {
          players[i].count = players[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.players.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
        }
      }
      return true;
    });
  };

  render() {
    return (
      <div>
        <NavBar score={this.state.score} highscore={this.state.highscore} />

        <Header />
        <Wrapper>
          {this.state.players.map(player => (
            <PlayerCard
              id={player.id}
              key={player.id}
              image={player.image}
              name={player.name}
              clicker={this.clicker}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
