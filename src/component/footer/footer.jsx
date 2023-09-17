import styles from './footer.module.css';
import ask from '../../source/askLogo.png';
import my from '../../source/myLogo.png';
import foot from '../../source/footer.png';
import spoon from '../../source/spoon.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const movePage = useNavigate();

  function goSub03_1() {
    movePage('../sub03_1/sub03_1');
  }
  return (
    <div className={styles.footer}>
      <div className={styles.spoonsor}>
        <img src={foot} className={styles.foot}></img>
        <button className={styles.spoonBtn}>
          <img className={styles.spoon} src={spoon}></img>
        </button>
      </div>
      <div className={styles.oneLogo}>
        <img src={ask} className={styles.ask}></img>
        <p className={styles.myq}>문의</p>
      </div>
      <div className={styles.twoLogo}>
        <button onClick={goSub03_1}>
          <img src={my} className={styles.my}></img>
          <p className={styles.myp}>나의 후원</p>
        </button>
      </div>
    </div>
  );
};

export default Footer;
