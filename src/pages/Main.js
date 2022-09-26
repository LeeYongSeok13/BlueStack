import React from 'react';
import MainVisual from './MainVisual';
import "../css/Main.css";

const Main = ({ content }) => {
    return (
        <main className='Main'>
            <MainVisual word={content} />
        </main>
    )
}
export default Main