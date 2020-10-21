import React, {PureComponent} from 'react';
import { Consumer } from './Context/Context';
import PropTypes from 'prop-types';
import {Counter} from './Counter';
import {Crown} from './Crown';

export class Player extends PureComponent {

    static propTypes = {
        index: PropTypes.number,
        getHighScore: PropTypes.bool
    }

    render() {
        const { 
            index, 
            getHighScore 
        } = this.props;

    return (
        <div className="player">
            <Consumer>
                { ({actions, players}) => (
                <span className="player-name">
                    <button className="remove-player" onClick={ () => actions.removePlayer(players[index].id) }>✖</button>
                    <Crown winning={(getHighScore)}/>
                    { players[index].name }
                </span>
                )}
            </Consumer>

            <Counter 
                index={index}
            />
        </div>
    )
}
}

export default Player;