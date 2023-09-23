import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './detailImageSlider.module.css';
import detailImg1 from '../../source/detailImg1.png';
import detailImg2 from '../../source/detailImg2.png';
import subTwo_1 from '../../source/sub1/sub1_1_1.png';
import subTwo_2 from '../../source/sub1/sub1_2_1.png';
import subTwo_3 from '../../source/sub1/sub1_3_1.png';
import subTwo_4 from '../../source/sub1/sub1_4_1.png';
import subTwo_5 from '../../source/sub1/sub1_5_1.png';
import subTwo_6 from '../../source/sub1/sub1_6_1.png';
import subTwo_7 from '../../source/sub1/sub1_7_1.png';
import subTwo_8 from '../../source/sub1/sub1_8_1.png';
import subTwo_9 from '../../source/sub1/sub1_9_1.png';
import subTwo_10 from '../../source/sub1/sub1_10_1.png';
import subTwo_11 from '../../source/sub1/sub1_11_1.png';


const DetailImageSlider = ({ imgData }) => {
    let imgSrc1 = '';
    console.log(imgData);
    switch (imgData) {
        case 'subTwo_1':
            imgSrc1 = subTwo_1;
            break;
        case 'subTwo_2':
            imgSrc1 = subTwo_2;
            break;
        case 'subTwo_3':
            imgSrc1 = subTwo_3;
            break;
        case 'subTwo_4':
            imgSrc1 = subTwo_4;
            break;
        case 'subTwo_5':
            imgSrc1 = subTwo_5;
            break;
        case 'subTwo_6':
            imgSrc1 = subTwo_6;
            break;
        case 'subTwo_7':
            imgSrc1 = subTwo_7;
            break;
        case 'subTwo_8':
            imgSrc1 = subTwo_8;
            break;
        case 'subTwo_9':
            imgSrc1 = subTwo_9;
            break;
        case 'subTwo_10':
            imgSrc1 = subTwo_10;
            break;
        case 'subTwo_11':
            imgSrc1 = subTwo_11;
            break;
        default:
            break;
    }

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
                        <img src={imgSrc1} className={styles.detailImg} alt="이미지 1" />
                    </div>
                </div>
                {/* <div className={styles.imgDiv}>
                    <div className={styles.centerImg}>
                        <img src={imgSrc1} className={styles.detailImg} alt="이미지 2" />
                    </div>
                </div>
                <div className={styles.imgDiv}>
                    <div className={styles.centerImg}>
                        <img src={imgSrc1} className={styles.detailImg} alt="이미지 3" />
                    </div>
                </div> */}
            </Slider>
        </div>
    );
};

export default DetailImageSlider;
