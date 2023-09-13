import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import magnifier from '../../source/MagnifierLogo.png';
import mylogo from '../../source/myLogo.png';
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
                <img src={magnifier} className={styles.magnifier}></img>
                <img src={mylogo} className={styles.mylogo}></img>
            </div>

        </div>
    )
}

export default Header;