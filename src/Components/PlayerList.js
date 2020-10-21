import React from 'react';
import { Consumer } from './Context/Context';
import Player from './Player';

export const PlayerList = (props) => {
  return (
    <Consumer>
       { context => (
        <React.Fragment>
            {context.players.map((player, index) =>
                <Player
                    {...player}
                    index={index}
                    key={player.id.toString()}
                    getHighScore={context.actions.getHighScore() === player.score}
                />
            )}
        </React.Fragment>
       )}
    </Consumer>
  )};



export default PlayerList;