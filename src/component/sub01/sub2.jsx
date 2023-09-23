import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './sub2.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import leftArrow from '../../source/leftArrow.png';
import DetailImageSlider from '../detailImageSlider/detailImageSilder';


const Sub2 = () => {
  const navigate = useNavigate();
  const toSubOne_one = () => {
    navigate({
      pathname: '/sub1m1',
    });
  };
  const toSubTwo_one = () => {
    navigate({
      pathname: `/sub02_1/${childData.id}`,
    });
  };
  const location = useLocation();
  const childData = location.state.childData;
  return (
    <div>
      <Header />
      <div className={styles.middle}>
        <div className={styles.middleTitleDiv}>
          <button className={styles.backArrowBtn} onClick={toSubOne_one}>
            <img className={styles.backArrow} src={leftArrow} alt="Back" />
          </button>
          <p className={styles.middleTitle}>상세 페이지</p>
        </div>
        <DetailImageSlider imgData={childData.imgTwo} />
        <div className={styles.details}>
          <div className={styles.detail}>
            <p className={styles.detailTitle}>{childData.STOne}</p>
            <div className={styles.detailCoreDiv}>
              <p className={styles.detailCore}>{childData.SDOne}</p>
            </div>
          </div>

          <div className={styles.detail}>
            <p className={styles.detailTitle}>{childData.STTwo}</p>
            <div className={styles.detailCoreDiv}>
              <p className={styles.detailCore}>{childData.SDTwo}</p>
            </div>
          </div>

          <div className={styles.detail}>
            <p className={styles.detailTitle}>{childData.STThree}</p>
            <div className={styles.detailCoreDiv}>
              <p className={styles.detailCore}>{childData.SDThree}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spoon}>
        <button onClick={toSubTwo_one} className={styles.spoonBtn}>
          후원하기
        </button>
      </div>
    </div>
  );
};

export default Sub2;
