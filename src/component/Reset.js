import React from 'react'
import '../css/Characteristic.css';

const Reset = () => {

    const ResetContent = [
        {
            id: 1,
            title: "직접 나만의 행운을 만드십시오. BlueStacks로 더 빨리 다시 실행해 보세요",
            text: "가챠 게임이든 RPG이든, 다시 리세마라하는 것은 게임 진행의 중요한 부분이며 운에 따라 몇 분 또는 며칠이 걸릴 수도 있습니다. 강력한 캐릭터를 얻으면 게임의 도전에 쉽게 대처할 수 있고 더 빨리 진행할 수 있습니다. 블루스택의 멀티 인스턴스를 사용하면 여러 인스턴스를 생성하고, 다른 계정에서 게임을 플레이하고, 각 계정에서 더 많은 시간을 다시 리세마라할 수 있습니다. 실력으로 모두 얻을 수 있습니다."
        },
        {
            id: 2,
            title: "멀티 인스턴스 및 멀티 인스턴스 동기화로 다시 리세마라",
            text: "블루스택 멀티 인스턴스 관리자를 사용하면 여러 계정을 동시에 사용하여 다시 리세마라할 수 있습니다. 따라서 게임에서 다시 리세마라하는 경우 개별적으로 진행하려면 각 인스턴스를 계속 다시 방문해야 합니다. 그러나 판도를 바꾸는 멀티 인스턴스 동기화 기능의 도입으로 이제 기본 인스턴스의 작업을 다른 모든 인스턴스에 복제할 수 있습니다. 메인 인스턴스에서 게임을 플레이하고 동기화하면 다른 모든 인스턴스에서 복제됩니다."
        }
    ]
    return (
        <section className="Reset">
            <div className="Resethead">
                <div className="container">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/reset.png'} alt='/'></img>
                    </figure>
                    <h2>리세마라</h2>
                    <p>여러 소환을 동시에 수행하고 프로세스 속도를 높여
                        <br />강력한 영웅을 획득해보세요.
                    </p>
                </div>
            </div>
            <div className="ResetMain">
                <div className="container">
                    {
                        ResetContent.map((content, idx) => {
                            return (
                                <div className={'content' + content.id}>
                                    <div className={'content' + content.id + 'inner'}>
                                        <h2>{content.title}</h2>
                                        <p>{content.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Reset