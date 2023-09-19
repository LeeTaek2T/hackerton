import styles from './sub02_2.module.css';
import mainImg from '../../source/laughingPlant.png';
import { useNavigate } from 'react-router-dom';

const Sub02_2 = () => {
  const navigate = useNavigate();
  const toMain = () => {
    navigate({
      pathname: '/',
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.mainImgSpace}>
        <img src={mainImg} alt="main_image" />
      </div>
      <div className={styles.thxMsg}>
        <b>소중한 햇살 감사드립니다.</b>
      </div>
      <button onClick={toMain} className={styles.toHomeBtn}>
        홈으로
      </button>
    </div>
  );
};

export default Sub02_2;
