import styles from './footer.module.css';
import ask from '../../source/askLogo.png';
import my from '../../source/myLogo.png';
import foot from '../../source/footer.png';
import spoon from '../../source/spoon.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const movePage = useNavigate();
  const navigate = useNavigate();
  const toSubThree_one = () => {
    navigate({
      pathname: '/sub03_1'
    });
  }
  return (
    <div className={styles.footer}>
      <div className={styles.spoonsor}>
        <img src={foot} className={styles.foot}></img>
        <button className={styles.spoonBtn}>
          <img className={styles.spoon} src={spoon}></img>
        </button>
        <p className={styles.spoonP}>후원하기</p>
      </div>
      <div className={styles.oneLogo}>
        <img src={ask} className={styles.ask}></img>
        <p className={styles.myq}>문의</p>
      </div>
      <div className={styles.twoLogo}>
        <button onClick={toSubThree_one} className={styles.myBtn}>
          <img src={my} className={styles.my}></img>
        </button>
        <p className={styles.myp}>나의 후원</p>
      </div>
    </div>
  );
};

export default Footer;
