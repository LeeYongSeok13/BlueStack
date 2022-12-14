import React from 'react';
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
                <Navmenu />
            </div>
        </section >
    )
}
export default Header