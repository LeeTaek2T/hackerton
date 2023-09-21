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
            pathname: '/sub1m1'
        });
    }
    const location = useLocation();
    const childData = location.state.childData; // location 객체에서 state를 가져옵니다.
    console.log(`location : ${childData.STThree} ${location.SDThree}`);
    // useEffect(() => {
    //     console.log(`childData - sub2 : ${childData}`);
    // }, []);
    return (
        <div>
            <Header></Header>
            <div className={styles.middle}>
                <div className={styles.middleTitleDiv}>
                    <button className={styles.backArrowBtn} onClick={toSubOne_one}>
                        <img className={styles.backArrow} src={leftArrow} />
                    </button>
                    <p className={styles.middleTitle}>상세 페이지</p>
                </div>
                <DetailImageSlider></DetailImageSlider>
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
                <button className={styles.spoonBtn} >후원하기</button>
            </div>
        </div>
    );
}

export default Sub2;