import React from 'react';
import VChar from './VChar';
import CChar from './CChar';
import IChar from './IChar';
import MACChar from './MACChar';
import RChar from './RChar';
import '../css/Characteristic.css';


const Characteristic = ({ content }) => {
    return (
        <section className='Characteristic'>
            <VChar word={content} />
            <CChar word={content} />
            <IChar word={content} />
            <MACChar word={content} />
            <RChar word={content} />
        </section>
    )
}

export default Characteristic