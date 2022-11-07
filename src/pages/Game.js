import React from 'react';
import Gamedata from '../data/data.json';
import Gamelist from '../component/Gamelist';
import '../css/Game.css';


const Game = () => {

    return (
        <section className="Game">
            <Gamelist />
        </section>
    )
}
export default Game