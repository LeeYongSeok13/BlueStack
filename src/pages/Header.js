import React, { useEffect, useState } from 'react';
import Navmenu from './Navmenu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="Header" >
            <div className="container">
                <h1>
                    <Link to='/BlueStack'>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="/"></img>
                    </Link>
                </h1>
                <nav>
                    <Navmenu />
                </nav>
                <search>
                    <input type="text"></input>
                    <button className='xi-search'></button>
                </search>
            </div>
        </section >
    )
}
export default Header