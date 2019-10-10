import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import players from "./players.json";
import Wrapper from "./components/Wrapper";
import Click from "./components/Click"
import "./App.css";
//consider making this a functional component and moving logic to Game component (class)
class App extends Component {
  state = {
    players,
    score: 0,
    highscore: 0
  };

  // componentDidMount useful for when you don't know the database or have it locally
  componentDidMount() {
    this.setState({players: this.shuffleData(this.state.players)});
  }

  handleCorrectGuess = newData => {
    const { highscore, score } = this.state;
    const newScore = score + 1;
    const newHighScore = Math.max(newScore, highscore);

    console.log(players)
    this.setState({
      players: this.shuffleData(newData),
      score: newScore,
      highscore: newHighScore
    })
  }

  handleIncorrectGuess = data => {
    console.log("wrong")
    this.setState({
      players: this.resetData(data),
      score: 0
    })
  }

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false}))
    return this.shuffleData(resetData)
  }

  shuffleData = data => {
    let i = data.length -1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data
  }

  handleItemClick = id => {
    console.log(id)
    let guessedCorrectly = false;
    const newData = this.state.players.map(item => {
      const newItem = {...item};
      if (newItem.id === id) {
        if (!newItem.count) {
          newItem.count = true;
          guessedCorrectly = true;
        }
      }
      return newItem
    });
    guessedCorrectly
    ? this.handleCorrectGuess(newData)
    : this.handleIncorrectGuess(newData)
  }

  render() {
    return (
      <div>
        <NavBar score={this.state.score} highscore={this.state.highscore} />
        <Header />

        <Wrapper>
          {this.state.players.map(player => (
            <Click
              id={player.id}
              key={player.id}
              image={player.image}
              name={player.name}
              handleItemClick={this.handleItemClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
