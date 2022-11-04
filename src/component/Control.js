import React from 'react'
import '../css/Characteristic.css';

const Control = () => {
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
                    <div className="check">
                        <div className="xi-check">
                        </div>
                    </div>
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
        </section>
    )
}

export default Control