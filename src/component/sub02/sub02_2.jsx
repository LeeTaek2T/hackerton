import styles from './sub03_1.module.css';
import mainImg from '../../source/laughingPlant.png';

const Sub02_2 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainImgSpace}>
        <img src={mainImg} alt="main_image" />
      </div>
      <div className={styles.thxMsg}>
        <b>소중한 햇살 감사드립니다.</b>
      </div>
      <button className={styles.toHomeBtn}>홈으로</button>
    </div>
  );
};

export default Sub02_2;
