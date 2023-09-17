import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './detailImageSlider.module.css';
import detailImg1 from '../../source/detailImg1.png';
import detailImg2 from '../../source/detailImg2.png';


const DetailImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <></>, // 이전 버튼 숨김
        nextArrow: <></>, // 다음 버튼 숨김
    };

    return (
        <div>
            <Slider {...settings} className={styles.slider}>
                <div className={styles.imgDiv}>
                    <div className={styles.centerImg}>
                        <img src={detailImg1} className={styles.detailImg} alt="이미지 1" />
                    </div>
                </div>
                <div className={styles.imgDiv}>
                    <div className={styles.centerImg}>
                        <img src={detailImg2} className={styles.detailImg} alt="이미지 2" />
                    </div>
                </div>
                <div className={styles.imgDiv}>
                    <div className={styles.centerImg}>
                        <img src={detailImg2} className={styles.detailImg} alt="이미지 3" />
                    </div>
                </div>
                <div className={styles.imgDiv}>
                    <div className={styles.centerImg}>
                        <img src={detailImg2} className={styles.detailImg} alt="이미지 3" />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default DetailImageSlider;
