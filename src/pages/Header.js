import React, { useEffect, useState } from 'react';
import json from '../json/Game.json'
import Navmenu from './Navmenu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [condition, setCondition] = useState({
        item: 'GAME'
    })

    const [isLoading, setIsLoading] = useState(false)
    const [GameList, setGameList] = useState(json)

    const search = ({ item }) => {
        if (condition.item !== item)
            setCondition({
                item: item
            })
    }


    return (
        <section className="Header" >
            <div className="container">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="/"></img>
                    </Link>
                </h1>
                <nav>
                    <Navmenu />
                </nav>
                <search onSearch={search}>
                    <input type="text"></input>
                    <button className='xi-search'></button>
                </search>
            </div>
        </section >
    )
}
export default Header