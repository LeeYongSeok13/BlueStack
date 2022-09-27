import React from 'react';
import VChar from './VChar';
import MChar from './MChar';
import '../css/Characteristic.css';
import { Link } from 'react-router-dom';


const Characteristic = ({ content }) => {
    return (
        <section className='Characteristic'>
            <VChar word={content} />
            <MChar word={content} />
        </section>
    )
}

export default Characteristic