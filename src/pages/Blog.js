const Blog = () => {

    const BlueCharacteristic = [
        {
            id: 1,
            title: "게임 컨트롤",
            text: "사전 설정된 컨트롤로 플레이하거나 사용자 지정합니다."
        },
        {
            id: 2,
            title: "멀티 인스턴스",
            text: "여러 게임을 동시에 플레이합니다."
        },
        {
            id: 3,
            title: "매크로",
            text: "한번의 클릭으로 패턴을 저장하고 실행합니다."
        },
        {
            id: 4,
            title: "리세마라",
            text: "멀티 인스턴스를 사용하여 더 빠르게 리롤할 수 있습니다."
        }
    ]
    return (
        <section className="Blog">
            <div className="container">
                <div className="Char">
                    {
                        BlueCharacteristic.map((char, idx) => {
                            return (
                                <div className="char_inner">
                                    <h2>{char.title}</h2>
                                    <p>{char.text}</p>
                                    <figure>
                                    </figure>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Blog