import React from 'react';
import { Consumer } from './Context/Context';
import Player from './Player';

export const PlayerList = (props) => {
  return (
    <Consumer>
       { ({players, actions}) => (
        <React.Fragment>
            {players.map((player, index) =>
                <Player
                    index={index}
                    key={player.id.toString()}
                    getHighScore={actions.getHighScore() === player.score}
                />
            )}
        </React.Fragment>
       )}
    </Consumer>
  )};



export default PlayerList;