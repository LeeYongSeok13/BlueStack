import React from 'react';
import Gametab from './Gametab';
import '../css/Game.css'

const Game = ({ content }) => {
    return (
        <section className="Game">
            <Gametab word={content} />
        </section>
    )
}
export default Game