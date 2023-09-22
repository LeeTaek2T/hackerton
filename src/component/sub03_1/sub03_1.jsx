import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './sub03_1.module.css';
import myProfilePhoto from '../../source/tree.jpg';
import sponsored1 from '../../source/Sponsored1.jpg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sub03_1 = () => {
  const [money, setMoney] = useState(0); // money 상태 변수 초기값 설정
  const [name, setName] = useState(''); // name 상태 변수 초기값 설정

  useEffect(() => {
    // API 주소
    const apiUrl = 'api/donators/1';

    // API에서 데이터 가져오기
    axios
      .get(apiUrl)
      .then((response) => {
        // API 응답에서 money 변수 값 추출
        const moneyValue = response.data.money;
        const nameValue = response.data.name; // Extract name from API response
        setMoney(moneyValue); // 상태 변수 업데이트
        setName(nameValue); // 상태 변수 업데이트
      })
      .catch((error) => {
        console.error('API 요청 중 오류 발생:', error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.headerDiv}>
        <Header></Header>
      </div>
      <div className={styles.HeadLineDiv}>
        <b>나의 후원</b>
      </div>
      <div className={styles.MyProfile}>
        <div className={styles.MyPhoto}>
          <img src={myProfilePhoto} className={styles.MyProfilePhoto} />
        </div>
        <div className={styles.MyInfo}>
          <div className={styles.MyName}>
            <b>{name}</b> {/* Use the name variable */}
          </div>
          <div className={styles.SponAmount}>누적후원금 {money}원</div>
        </div>
      </div>
      <hr />
      <div className={styles.ListHeadTxt}>
        <b>후원중인새싹들</b>
      </div>
      <div className={styles.Sponsored}>
        <div className={styles.SponsoredImgSpace}>
          <img src={sponsored1} className={styles.SponsoredPhoto} />
        </div>
        <div className={styles.SponsoredInfo}>
          <div className={styles.InfoDiv}>
            <b>오수연</b>
            <br />
            후원시작일 : 20203.07.02.
            <br />월 후원금액 : 20,000원
          </div>
        </div>
      </div>
      <hr className={styles.BetweenSponsored} />
      <div className={styles.Sponsored}></div>
      <div div className={styles.footerDiV}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Sub03_1;
