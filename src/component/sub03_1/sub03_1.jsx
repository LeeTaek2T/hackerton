import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './sub03_1.module.css';
import myProfilePhoto from '../../source/tree.jpg';
import sponsored1 from '../../source/Sponsored1.jpg';

const Sub03_1 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headerDiv}>
        <Header></Header>
      </div>/
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
          <div className={styles.SponAmount}>누적후원금 210,000원</div>
          <button className={styles.ModifyInfo}>
            <b>회원정보 수정</b>
          </button>
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
          <div>
            <b>오수연</b>
            <br />
            후원시작일 : 20203.07.02.
            <br />월 후원금액 : 20,000원
          </div>
          <button className={styles.LetterButton}>편지함</button>
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
