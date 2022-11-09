import React, { useState } from 'react';
import '../css/Game.css';


const Game = () => {
    const [top, setTop] = useState();

    return (
        <section className='GameNav'>
            <ul>
                <li onClick={setTop}>LI</li>
            </ul>
        </section>
    )
}
export default Game