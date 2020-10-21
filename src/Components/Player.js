import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import {Counter} from './Counter';
import {Crown} from './Crown';

export class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        handleHighScore: PropTypes.bool
    }

    render() {
        const { 
            name, 
            id, 
            score, 
            index, 
            changeScore, 
            removePlayer,
            handleHighScore 
        } = this.props;

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
                <Crown winning={(handleHighScore)}/>
                { name }
            </span>
            <Counter 
                score={ score }
                index={index}
                changeScore={changeScore} 
            />
        </div>
    )
}
}