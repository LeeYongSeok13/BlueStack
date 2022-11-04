import React from 'react'
import '../css/Characteristic.css';

const Reset = () => {
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
        </section>
    )
}
export default Reset