import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './sub03_1.module.css';
import myProfilePhoto from '../../source/tree.jpg';
// import sponsored1 from '  ../../source/Sponsored1.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SpoonedChild from './spoonedChild';

const Sub03_1 = () => {
  const [donatees, setDonatees] = useState([]);


  const [money, setMoney] = useState(0); // money 상태 변수 초기값 설정
  const [name, setName] = useState(''); // name 상태 변수 초기값 설정

  useEffect(() => {
    // API 주소
    const apiUrl = 'https://port-0-donation-backend-2rrqq2blmpwenmp.sel5.cloudtype.app/api/donators/1';

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

  useEffect(() => {
    axios
      .get('https://port-0-donation-backend-2rrqq2blmpwenmp.sel5.cloudtype.app/api/donators/1/donatees')
      .then((response) => {
        // setDonatees(response.data);
        const responseDataArray = Array.isArray(response.data)
          ? response.data
          : [response.data];
        console.log(response.data);
        responseDataArray.forEach((item, index) => {
          if (typeof item === 'object') { // 객체인 경우에만 처리
            const URLs = [
              'subOne_1',
              'subOne_5',
            ]
            item.imgOne = URLs[index % URLs.length]; // 이미지 URL을 순환하도록 설정
          }
        })
        setMoney(testMoney);
        setDonatees(responseDataArray);
      })
  }, []);


  return (
    <div className={styles.main}>
      <div className={styles.headerDiv}>
        <Header></Header>
      </div>
      <div className={styles.HeadLineDiv}>
        <b className={styles.title}>나의 후원</b>
      </div>
      <div className={styles.MyProfile}>
        <div className={styles.MyPhoto}>
          <img src={myProfilePhoto} className={styles.MyProfilePhoto} />
        </div>
        <div className={styles.MyInfo}>
          <div className={styles.MyName}>
            <b className={styles.titl}>{name}</b>
          </div>
          <div className={styles.SponAmount}>{`누적후원금 ${money}원`}</div>
        </div>
      </div>
      <hr />
      <div className={styles.ListHeadTxt}>
        <b className={styles.ti}>후원중인새싹들</b>
      </div>
      {
        donatees.map((child) => (
          <SpoonedChild key={child.name} child={child}></SpoonedChild>
        ))
      }
      <div className={styles.footerDiV} >
        <Footer></Footer>
      </div>
    </div >
  );
};

export default Sub03_1;
