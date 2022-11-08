import React from 'react'
import '../css/Characteristic.css';

const Macro = () => {

    const MacroContent = [
        {
            id: 1,
            title: "왕국의 출현에 따른 로그인 및 수집을 자동화합니다.",
            text: "라이즈 오브 킹덤에서 바로 시작하십시오. 매크로가 있으면, 게임에 자동으로 로그인하여, BlueStacks가 열리고 귀하의 도시 레이아웃의 생산 건물에서 자원을 바로 수확하기 시작합니다."
        },
        {
            id: 2,
            title: "모바일 레전드에서 강력한 공격을 수행합니다.",
            text: "게임을 시작하는 순간에, 매크로가 기록되어, 기본 공격들을 조합한 파워 어택을 수행하고 매크로를 종료합니다. 이것에 키를 할당하면 다음에 적에게 가까이 다가가서 할당 키를 눌렀을 때, 히어로가 동일한 공격을 적에게 수행할 것입니다."
        },
        {
            id: 3,
            title: "가져오기, 내보내기 그리고 공유하기",
            text: "매크로 녹화가 끝났습니까? 귀하는 쉽게 사용자의 바탕 화면 또는 당신의.json 파일로 선택한 장소에 저장할 수 있습니다. 또한 귀하는 친구들과 함께 이 매크로 파일을 가져오기 및 내보내기 할 수 있습니다."
        },
        {
            id: 4,
            title: "무제한 사용자 지정",
            text: "스피드를 조정하여 매크로 행동을 커스텀하십시오. (1.5x, 2x 등으로 증가시킵니다.) 혹은 매크로가 작동하는 횟수와 기간을 지정합니다."
        },
        {
            id: 5,
            title: "매크로 병합. 이젠 쉽게하세요.",
            text: "두 개 이상의 매크로를 하나로 병합하면 각 매크로를 수동으로 실행할 필요가 없습니다. 기록 된 매크로를 재사용하고 함께 병합하고 BlueStacks으로 놀라운 자동화를 경험하십시오."
        },
        {
            id: 6,
            title: "한 곳에서 모든 매크로를. BlueStacks 매크로 커뮤니티.",
            text: "모든 게임에서 좋은 매크로를 찾을 수 있는 최고의 방법은 전 세계 게이머가 참여하여 빠르게 성장중인 매크로 커뮤니티에 접속하는 것입니다. 커뮤니티에서 내 매크로를 공유하고, 다른 사람이 업로드 한 다양한 매크로를 검색하고, 나와 같은 게임 플레이어와 대화를 나눌 수도 있습니다. 매크로 커뮤니티 페이지를 확인하시려면 매크로 레코더 (CTRL + Shift +7)에서 ‘커뮤니티 열기’버튼을 클릭해주세요."
        }
    ]
    return (
        <section className="Macro">
            <div className="Macrohead">
                <div className="container">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/macro.png'} alt='/'></img>
                    </figure>
                    <h2>매크로</h2>
                    <p>게임 내에서 기다리는 사람, BlueStacks의 매크로를 사용하는 사람,
                        <br /> 지루한 작업을 자동화하여 실시간으로 복제하는 사람들에게 최고의 경험이 찾아옵니다.
                    </p>
                </div>
            </div>
            <div className="MacroMain">
                <div className="container">
                    <h2>리소스를 수집하고, 스킬을 업그레이드하고, 군대를 훈련하여, 공격하십시오. 매크로의 세계에 오신 것을 환영합니다.</h2>
                    <p>BlueStacks(4.140 및 이상 버전 대상)의 매크로를 소개합니다. BlueStacks의 어느 부분이든지 액션 시퀀스를 기록하고, 홈스크린을 포함하여, 마우스나 키보드 버튼에 묶어서, 추후 100% 정확하게 복제하십시오. 어느 게임에든지 매크로를 생성할 수 있지만 정복 게임이나 RPS에서 특히 유용합니다.</p>
                </div>
            </div>
            <div className="MacroContent">
                <div className="container">
                    <div className="MacroContentInner">
                        {
                            MacroContent.map((content, idx) => {
                                return (
                                    <div className={'content' + content.id}>
                                        <div className={'content' + content.id + 'inner'}>
                                            <h2>{content.title}</h2>
                                            <p>{content.text}</p>
                                        </div>
                                        <figure key={content.id} className={'content' + content.id + 'figure'}></figure>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Macro