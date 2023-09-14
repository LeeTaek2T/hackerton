import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import magnifier from '../../source/MagnifierLogo.png';
import notificationLogo from '../../source/notificationLogo.png';
import home from '../../source/spoon1.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftLogo}>
                <button className={styles.homeBtn}>
                    <img src={home} className={styles.home}></img>
                </button>
                <p className={styles.korean}>늘봄</p>
            </div>
            <div className={styles.rightLogo}>
                <button className={styles.magnifier}>
                    <img src={magnifier}></img>
                </button>
                <button className={styles.notificationLogo}>
                    <img src={notificationLogo}></img>
                </button>
            </div>
        </div>
    );
};

export default Header;
