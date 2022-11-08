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
        },
        {
            id: 5,
            title: "줌",
            text: "프리 파이어에서 맵을 열어 착륙하고자 하는 지점을 줌 아웃하여 보고 싶으십니까? 혹은, 핀치와 줌 기능을 지원하는 게임을 즐겨 플레이하십니까? 줌 기능에서 이 모든 것이 가능합니다."
        },
        {
            id: 6,
            title: "MOBA 스킬 패드",
            text: "MOBA나 RPG 팬이시라면, 마법과 기술을 걸고 조합하는 것, 그리고 이것을 상대편보다 더 빨리하는 것은 어수선한 모바일 스크린에서 어려운 일이라는 것을 아실 것입니다. MOBA 스킬 패드에서는, 마우스와 키보드를 사용해 캐릭터를 움직이고 마법과 기술을 조정할 수 있습니다. 이러한 기술을 사용하는데 원하는 키를 지정하는 권한을 얻게 해주는 특별한 D-Pad와도 같은 것입니다."
        },
        {
            id: 7,
            title: "스와이프",
            text: "정교한 스와이프 액션을 키보드로 수행합니다. 편한 키 조합을 아무것이나 배정하고, 좋아하는 스포츠 게임에서 특정 작업을 수행하기 위해 스와이프 움직임을 시뮬레이트 할 수 있습니다."
        },
        {
            id: 8,
            title: "자유롭게 둘러보기",
            text: "FPA와 TPS 게임에서, 적에게 뒤쫓긴다는 것은 죽을 수 있다는 것을 의미합니다. 프리 룩, 즉 자유롭게 둘러보기 기능을 활용하면, 바로 뒤돌아볼 수 있습니다. 마우스를 주변으로 드래그할 필요없이 카메라를 360도로 회전하여 뒤를 확인할 수 있습니다. 저희가 말했듯이, 저희는 항상 여러분의 뒤에 있으니까요."
        },
        {
            id: 9,
            title: "기울기",
            text: "특정 게임에서 기울기나 회전하기가 필요하십니까? 이제 BlueStacks에서 '기울이기' 기능을 사용해 쉽게 기울이기 액션을 맵핑할 수 있습니다. 위, 아래, 왼쪽, 오른쪽으로 기울이기에 키를 할당하시고 게임을 즐기십시오!"
        },
        {
            id: 10,
            title: "스크립트",
            text: "스크립트는 게임의 명령어입니다. 단순히 싱글 키를 누르는 것으로 액션 시퀀스(키 스트로크, 마우스 클릭)를 유도하는 자신만의 스크립트를 생성하십시오. 스크립트를 적는 것은 스크립트 게임 가이드의 도움으로 매우 재미있습니다."
        },
        {
            id: 11,
            title: "회전",
            text: "고급 설정의 회전 옵션을 사용하여 안드로이드 기기에서와 같이 화면을 회전하고 가로 또는 세로 모드로 게임을 플레이하세요."
        },
        {
            id: 12,
            title: "엣지 스크롤",
            text: "블루스택의 엣지 스크롤은 단순히 커서를 이동하여 지도를 이동하는 데 도움이 됩니다. 더 이상 게임에서 무슨 일이 일어나는지 보기 위해 커서를 누르고 끌 필요가 없습니다. 간단하게 원하는 만큼 이동하세요."
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
                                        <div className={'option0' + option.id + 'item'}>
                                            <h2>{option.title}</h2>
                                            <p>{option.text}</p>
                                            <span onClick={handleClick} className="optionClick">How to use<strong></strong></span>
                                        </div>
                                        <figure key={option.id} className={'optionfigure0' + option.id}></figure>
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