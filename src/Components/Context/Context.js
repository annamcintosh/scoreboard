import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
              score: prevState.players[index].score += delta
          }));
      }
      
      handleAddPlayer = (name) => {
        let prevPlayerId = 4;
        this.setState( prevState => {
          return {
            players: [
              ...prevState.players,
              {
                name,
                score: 0,
                id: prevPlayerId += 1
              }
            ]
         };
        });
      }
      
      getHighScore = () => {
        const scores = this.state.players.map( p => p.score );
        const highScore = Math.max(...scores);
        if (highScore) {
          return highScore;
        }
        return null;
      }
      
        handleRemovePlayer = (id) => {
          this.setState( prevState => {
            return {
            players: prevState.players.filter( p => p.id !== id )
            }
          });
        }

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

    render() {
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                  changeScore: this.handleScoreChange,
                  removePlayer: this.handleRemovePlayer,
                  addPlayer: this.handleAddPlayer,
                  getHighScore: this.getHighScore
                }
              }}>
              { this.props.children }
            </ScoreboardContext.Provider>
        );
    }
}
export const Consumer = ScoreboardContext.Consumer;

