import React, {PureComponent} from 'react';
import { Consumer } from './Context/Context';
import PropTypes from 'prop-types';
import {Counter} from './Counter';
import {Crown} from './Crown';

export class Player extends PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        getHighScore: PropTypes.bool
    }

    render() {
        const { 
            name, 
            id, 
            score, 
            index, 
            getHighScore 
        } = this.props;

    return (
        <div className="player">
            <Consumer>
                { context => (
                <span className="player-name">
                    <button className="remove-player" onClick={ () => context.actions.removePlayer(id) }>✖</button>
                    <Crown winning={(getHighScore)}/>
                    { name }
                </span>
                )}
            </Consumer>

            <Counter 
                score={ score }
                index={index}
            />
        </div>
    )
}
}

export default Player;