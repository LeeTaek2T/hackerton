import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mainOne from '../../source/main1.png';
import mainTwo from '../../source/main2.png';
import mainThree from '../../source/main3.png';
import mainFour from '../../source/main4.png';
import mainFive from '../../source/main5.png';
import styles from './imageSlider.module.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={styles.imgDiv}>
          <div className={styles.centerImg}>
            <img src={mainOne} className={styles.mainImg} alt="이미지 1" />
          </div>
        </div>
        <div className={styles.imgDiv}>
          <div className={styles.centerImg}>
            <img src={mainOne} className={styles.mainImg} alt="이미지 2" />
          </div>
        </div>
        <div className={styles.imgDiv}>
          <div className={styles.centerImg}>
            <img src={mainOne} className={styles.mainImg} alt="이미지 3" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
