import React from 'react';
import MainVisual from './MainVisual';
import Rank from './Rank';
import Advertise from './Advertise';
import "../css/Main.css";

const Main = ({ content }) => {
    return (
        <main className='Main'>
            <MainVisual word={content} />
            <Rank word={content} />
            <Advertise word={content} />
        </main>
    )
}
export default Main