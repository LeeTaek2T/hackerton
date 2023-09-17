import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import { Carousel } from 'react-responsive-carousel';

import ImageSlider from '../ImageSlider/imageSlider';
import Footer from '../footer/footer';
import styles from './main.module.css';
import arrow from '../../source/arrow.png';
import chOImg from '../../source/main2.png';
import chTImg from '../../source/main3.png';
import chThImg from '../../source/main4.png';
import reportImg from '../../source/main5.png';

const Main = () => {
  const navigate = useNavigate();
  const toSubOne_one = () => {
    navigate({
      pathname: '/sub1m1'
    });
  }
  const toSubOne_two = () => {
    navigate({
      pathname: '/sub1m2'
    });
  }
  return (
    <div className={styles.main}>
      <Header></Header>
      <ImageSlider></ImageSlider>
      <div className={styles.middle}>
        {' '}
        {/*후원 구간*/}
        <div className={styles.middleTitleDiv}>
          {' '}
          {/*후원 타이틀*/}
          <p className={styles.spoonsor}>상수우</p>
          <p className={styles.title}>님의 햇살을 기다리고 있어요!</p>
          <button className={styles.arrowBtn} onClick={toSubOne_one}>
            <img src={arrow} className={arrow}></img>
          </button>
        </div>
        <div className={styles.children}>
          {' '}
          {/*후원대상 아이들*/}
          <div className={styles.child}>
            {' '}
            {/*첫번째 아이 */}
            <button className={styles.chBtn}>
              <img src={chOImg} className={styles.chImg}></img>
              <p className={styles.chP}>씩씩하게 치료...</p>
            </button>
            <p className={styles.chName}>김나현</p>
          </div>
          <div className={styles.child}>
            {' '}
            {/*두번째 아이 */}
            <button className={styles.chBtn}>
              <img src={chTImg} className={styles.chImg}></img>
              <p className={styles.chP}>구멍난 축구화...</p>
            </button>
            <p className={styles.chName}>이재찬</p>
          </div>
          <div className={styles.child}>
            {' '}
            {/*세번째아이*/}
            <button className={styles.chBtn}>
              <img src={chThImg} className={styles.chImg}></img>
              <p className={styles.chP}>조금 느리지만...</p>
            </button>
            <p className={styles.chName}>황이준</p>
          </div>
        </div>
      </div>

      <div className={styles.reportDiv}>
        <p className={styles.reportTitle}>8월의 새싹</p>
        <div className={styles.reportCore}>
          <div className={styles.reportCoreNameDiv}>
            <p className={styles.reportCoreName}>8월 활동 보고서</p>
          </div>
          <img src={reportImg} className={styles.reportImg}></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
