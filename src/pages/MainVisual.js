import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, logo: 1, title: "S.O.S: State Survival" },
    { id: 2, logo: 2, title: "PUBG Mobile" },
    { id: 3, logo: 3, title: "Genshin Impact" },
    { id: 4, logo: 4, title: "Epic Seven" },
    { id: 5, logo: 5, title: "Azur-Lane" }
]

const MainVisual = ({ content }) => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const settings = {
        arrows: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,

    }
    return (
        <section className='MainVisual'>
            <Slider {...settings} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <div className='MainSlider'>
                                <figure key={slide.id} className={'itm0' + slide.id}>
                                    <div className='inner_content'>
                                        <figure key={slide.title} className={"logo0" + slide.logo}></figure>
                                        <span>
                                            <a href=''>
                                                <img src={process.env.PUBLIC_URL + '/images/bluestacks_logo.png'}></img>
                                                <div className='download'>
                                                    <h2>다운로드</h2>
                                                    <p>BlueStacks 5</p>
                                                </div>
                                            </a>
                                        </span>
                                    </div>
                                </figure>
                            </div>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default MainVisual