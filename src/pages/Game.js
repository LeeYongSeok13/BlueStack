import React from 'react';
import axios from 'axios';
import Gamelist from '../component/Gamelist';
import '../css/Game.css';
import { useEffect, useState } from "react";


const Game = () => {

    const [itm, setItm] = useState();

    useEffect(() => {
        const url = "https://leeyongseok13.github.io/BlueStack/assets/data.json"
        const getProduct = async () => {
            const res = await axios.get(url);

            const gamedata = res.data.slice(1, 30).map(it => {
                return {
                    id: it.id,
                    name: it.name,
                    genre: it.genre,
                    company: it.company
                }
            })
            setItm(gamedata);
        }
        getProduct();
    }, [])
    return (
        <section className="Game">
            <Gamelist />
        </section>
    )
}
export default Game