import { useState } from "react"
import Topgame from "./Topgame";


const Gametab = ({ content }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const TAB = [
        { name: "TOP 게임", content: "1" },
        { name: "액션", content: "2" },
        { name: "롤플레잉", content: "3" },
        { name: "아케이드", content: "4" },
        { name: "전략", content: "5" }
    ];

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };

    return (
        <section className="Gametab">
            <div className="container">
                <div className="Tab">
                    {TAB.map((element, index) => {
                        return (
                            <div key={index} className={currentTab === index ? "on" : ""} onClick={() => selectMenuHandler(index)}>{element.name}
                            </div>
                        )
                    })}
                    { }
                </div>
                <div className="Tabcontent">
                </div>
            </div>
        </section >
    )
}
export default Gametab