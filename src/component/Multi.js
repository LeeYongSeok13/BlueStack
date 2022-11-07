import React from 'react'
import '../css/Characteristic.css';

const Multi = () => {

    const MultiContent = [
        {
            id: 1,
            title: '많은 인스턴스와 다양한 가능성',
            text: '멀티 인스턴스 관리자를 사용하여 좋아하는 전략과 갓챠 게임을 쉽게 플레이하세요.’에코 모드’기능을 사용하여 백그라운드에서 여러 인스턴스를 실행하는 경우에도 최상의 성능을 위해 PC를 최적화합니다.인스턴스를 한번에 생성, 닫거나 시작 또는 제거 ,그리드 또는 대각선 레이아웃으로 정렬합니다.',
        },
        {
            id: 2,
            title: '동시에 여러 게임을 플레이하세요.',
            text: '리니지 2 레볼루션에서의 채집과 아스트랄 크로니클에서 플레이하기, PUBG 모바일에서 전리품을 모으기 등을 새로운 인스턴스에서 다른 게임을 어떠한 방해 없이 자유롭게 동시에 플레이할 수 있습니다.'
        },
        {
            id: 3,
            title: '여러 계정에서 동일한 게임을 플레이합니다.',
            text: 'RPG에서 언제까지 파트너만 기다리실 건가요? 기다리지 마세요-스스로가 가장 믿을 수 있는 친구입니다. 리니지 2 레볼루션에서 스스로가 파티원이 되는 겁니다! 라이즈 오브 킹덤에서 미션을 완료하려면 최소 2명의 파티원이 필요하시다고요? 킹 오브 아발론의 동맹이 필요하시다고요? 이젠 혼자서 다 하실 수 있습니다! 막대한 이익과 보상, 레벨업은 자동으로 따라오게 되어있습니다.'
        },
        {
            id: 4,
            title: '중복 문제 없이 재밌게 즐기세요.',
            text: '블루스택에는 모든 게이머들에게 만족을 드립니다.새로운 인스턴스를 만들어서 새 계정으로 로그인하고 친구 및 가족과 계정을 공유하면 문제없이 PC에서 좋아하는 안드로이드 게임을 즐길 수 있습니다.'
        },
        {
            id: 5,
            title: '64비트와 32비트 Android 게임을 동시에 플레이',
            text: '안드로이드 64비트버전에서만 실행되는 TFT와 같은 게임을 원하십니까? 멀티 인스턴스 관리자의 번거 로움없이 수행하십시오. 새로운 BlueStacks 인스턴스를 열고 Android 버전의 게임을 선택하면 완료됩니다. 시작부터 BlueStacks 기본 버전을 설정하지 않고도 여러 BlueStacks 인스턴스에서 여러 안드로이드 32 비트 및 안드로이드 64 비트 게임을 계속 플레이해보세요.'
        }
    ]
    return (
        <section className="Multi">
            <div className="Multihead">
                <div className="container">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/multi.png'} alt='/'></img>
                        <h2>멀티 인스턴스</h2>
                        <p>블루스택에서는 멀티 인스턴스를 통해 다른 계정에서 동일한 게임을
                            <br />플레이하거나 동시에 여러 게임을 플레이할 수 있습니다.
                        </p>
                    </figure>
                </div>
            </div>
            <div className='Multicontent'>
                <div className='container'>
                    <div className='content'>
                        {
                            MultiContent.map((content, idx) => {
                                return (
                                    <div className={'content0' + content.id}>
                                        <div className={'content0' + content.id + 'inner'}>
                                            <h2>{content.title}</h2>
                                            <p>{content.text}</p>
                                        </div>
                                        <figure>
                                        </figure>
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
export default Multi 