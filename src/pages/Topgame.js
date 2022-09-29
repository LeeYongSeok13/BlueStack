import { useState } from "react"

const Topgame = ({ content }) => {
    const [tabContent, setTabContent] = useState(0);
    const TOPGAME = [
        { name: "원신", company: "Cogonosphere PTE. LTD.", genre: "roleplaying" },
        { name: "PUBG Mobile", company: "Proxima Beta", genre: "action" },
        { name: "벽람항로", company: "X.D.Global", genre: "roleplaying" },
        { name: "쿠키런-오븐 브레이크", company: "Devsisters corporation", genre: "arcade" },
        { name: "명일방주", company: "Yostar Limited.", genre: "strategy" }
    ]

    return (
        <div className="Topgame">
            {
                TOPGAME.map((tabcontent, index) => {
                    return (
                        <div className="Topgame">
                            <h2>{tabcontent.name}</h2>
                            <p>{tabcontent.company}</p>
                        </div>
                    )
                })}

        </div>
    )
}
export default Topgame