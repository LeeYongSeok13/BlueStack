import userEvent from "@testing-library/user-event";
import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react"


const Gametab = ({ content }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const TAB = [
        { name: "TOP 게임", content: "1" },
        { name: "액션", content: "2" },
        { name: "롤플레잉", content: "3" },
        { name: "아케이드", content: "4" },
        { name: "전략", content: "5" }
    ];
    const TOPGAME = [
        { name: "원신", company: "Cogonosphere PTE. LTD.", genre: "roleplaying" },
        { name: "PUBG Mobile", company: "Proxima Beta", genre: "action" },
        { name: "벽람항로", company: "X.D.Global", genre: "roleplaying" },
        { name: "쿠키런-오븐 브레이크", company: "Devsisters corporation", genre: "arcade" },
        { name: "명일방주", company: "Yostar Limited.", genre: "strategy" }
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
                            <div key={index} className={currentTab === index ? "on" : ""} onClick={() => selectMenuHandler(index)}>{element.name}</div>
                        )
                    })}
                </div>
                <div className="Tab_content">
                    <h1>{TOPGAME[currentTab].name}</h1>
                    <p>{TOPGAME[currentTab].company}</p>
                </div>
            </div>
        </section >
    )
}
export default Gametab