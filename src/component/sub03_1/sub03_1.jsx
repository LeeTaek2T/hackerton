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
  const [money, setMoney] = useState(0);
  let testMoney = 0;
  useEffect(() => {
    axios
      .get('/api/donators/1/donatees')
      .then((response) => {
        // setDonatees(response.data);
        const responseDataArray = Array.isArray(response.data)
          ? response.data
          : [response.data];
        responseDataArray.forEach((item, index) => {
          testMoney += item.money;
          console.log(item.money)
          console.log(`money : ${money}`)

          const URLs = [
            'subOne_1',
            'subOne_5',
          ]
          item.imgOne = URLs[index % URLs.length]; // 이미지 URL을 순환하도록 설정
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
        <b>나의 후원</b>
      </div>
      <div className={styles.MyProfile}>
        <div className={styles.MyPhoto}>
          <img src={myProfilePhoto} className={styles.MyProfilePhoto} />
        </div>
        <div className={styles.MyInfo}>
          <div className={styles.MyName}>
            <b>상수우</b>
          </div>
          <div className={styles.SponAmount}>{`누적후원금 ${money}원`}</div>
          <button className={styles.ModifyInfo}>
            <b>회원정보 수정</b>
          </button>
        </div>
      </div>
      <hr />
      <div className={styles.ListHeadTxt}>
        <b>후원중인새싹들</b>
      </div>
      {
        donatees.map((child) => (
          <SpoonedChild child={child}></SpoonedChild>
        ))
      }

      <div className={styles.footerDiV} >
        <Footer></Footer>
      </div>
    </div >
  );
};

export default Sub03_1;
