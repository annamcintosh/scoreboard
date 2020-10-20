import React, {Component} from 'react';
import {Header} from './Components/Header';
import {Player} from './Components/Player';
import {AddPlayerForm} from './Components/AddPlayerForm';
import './App.css';

export class App extends Component {

  state = {
    players: [
      {
          name: "Anna",
          score: 0,
          id: 1
      },
      {
          name: "Tosh",
          score: 0,
          id: 2
      },
      {
          name: "Vegas",
          score: 0,
          id: 3
      },
      {
          name: "Gabe",
          score: 0,
          id: 4
      }
    ]
  }

//player id counter
prevPlayerId = 4;

handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += delta
    }));
}

handleAddPlayer = (name) => {
  this.setState( prevState => {
    return {
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
   };
  });
}

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
      players: prevState.players.filter( p => p.id !== id )
      }
    });
  }

  render() {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={ this.state.players } />
      {this.state.players.map( (player, index) => 
        <Player 
          name={player.name} 
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          index={index}
          changeScore={this.handleScoreChange}
          removePlayer={this.handleRemovePlayer}
          />
      )}        
      <AddPlayerForm addPlayer={this.handleAddPlayer}/>
    </div>
  );
}
}

export default App;