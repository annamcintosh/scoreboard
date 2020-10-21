import React from 'react';
import {Header} from './Components/Header';
import {PlayerList} from './Components/PlayerList';
import {AddPlayerForm} from './Components/AddPlayerForm';
import './App.css';

const App = () => {
    return (
        <div className="scoreboard">
          <Header />
          <PlayerList />
          <AddPlayerForm />
        </div>
    );
}

export default App;