import React from 'react'
import '../css/Characteristic.css';

const Control = () => {

    const Option = [
        {
            id: 1,
            title: "조준, 고정 그리고 발사",
            text: "프로처럼 적들을 저격하고 쏴 죽이세요. F1키 (기본 설정)를 눌러서 슈팅 모드를 활성화하기만 하면 됩니다. 마우스로 조준하고 쏘세요 (좌클릭). 이동과 조준을 더 빨리하도록 슈팅 모드를 커스텀하고 싶으신가요? '조준, 고정, 발사' 컨트롤이 도움이 될 것입니다."
        },
        {
            id: 2,
            title: "장소 탭하기",
            text: "아무 키나 선택하여 스크린의 게임 플레이 구역에 하이라이트된 태스크에 배정합니다. 발사, 점프하거나 마법을 걸도록 합니다. 탭 스팟은 마우스를 자유롭게 하고 배정된 키와 함께 지정된 작업을 수행합니다."
        },
        {
            id: 3,
            title: "반복 탭",
            text: "싱글 키 프레스. 다중 혹은 연속 클릭 액션을 복제하기 위해 필요한 것입니다. 그러니 서두르셔서, 싱글 키를 한번 클릭하는 것으로 PUBG를 실행하십시오. 쉽지 않습니까?"
        },
        {
            id: 4,
            title: "D-Pad",
            text: "D-Pad는 키보드로 게임 아날로그 스틱을 시뮬레이트하거나 캐릭터 움직임을 매핑하도록 해줍니다. 왼쪽, 오른쪽, 위, 아래로 쉽게 이동하기 위해 키 조합을 자유롭게 배정하십시오. 기본 키는 W, A, S, D 이지만 자유롭게 조합을 선택할 수 있습니다."
        }
    ]

    const handleClick = (event) => {
        event.currentTarget.classList.toggle('active');
    }
    return (
        <section className='Control'>
            <div className="Controlhead">
                <div className="container">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/keyboard.png'} alt='/'></img>
                    </figure>
                    <h2>게임 컨트롤</h2>
                    <p>키보드, 마우스, 게임 패드 등 나에게 가장 잘 맞는 방법으로 PC에서
                        <br />좋아하는 안드로이드 게임을 플레이하세요.
                    </p>
                </div>
            </div>
            <div className="ControlMain">
                <div className="container">
                    <h2>뛰어난 게임 컨트롤과 함께라면, 엄청난 승리가 따라옵니다.</h2>
                    <p>PC에서 마우스, 키보드 또는 게임패드를 사용하여 안드로이드 게임을 플레이하면 게임 플레이에 놀라운 효과가 나타납니다.
                        <br /> 이 승리 공식에 블루스택 맞춤형 게임 컨트롤까지 추가하면 더욱 놀라운 승리를 위한 준비가 모두 완료됩니다.
                    </p>
                    <div className="main_explain">
                        <div>PC와 같은 게임플레이
                            <p>게임 컨트롤은 PC와 같은 게임 환경을 제공하면서 모든 임무를 매우 효율적으로 수행하는 데 도움이 됩니다. 키보드, 마우스 또는 게임패드를 사용하여 게임을 할 수 있습니다.</p>
                        </div>
                        <div>커스텀
                            <p>사전 설정 컨트롤은 매우 편안한 게임 환경을 제공합니다. 상황을 더 좋게 만들기 위해 컨트롤을 아주 미세한 부분까지 자유롭게 사용자 지정할 수 있습니다.</p>
                        </div>
                        <div>가져오기, 내보내기, 공유하기
                            <p>공유 게임 제어 설정으로 팀 임무 중에 더 나은 조정을 즐기십시오. 기본 제어 설정과 개인 설정을 쉽게 가져오고 내보낼 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ControlOption'>
                <div className='container'>
                    <h2>고급 설정 컨트롤</h2>
                    <div className='ControlOptionInner'>
                        {
                            Option.map((option, idx) => {
                                return (
                                    <div className={'option0' + option.id}>
                                        <h2>{option.title}</h2>
                                        <p>{option.text}</p>
                                        <span onClick={handleClick} className="optionClick">How to use<strong></strong></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Control