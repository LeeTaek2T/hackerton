import styles from './footer.module.css';
import ask from '../../source/askLogo.png';
import my from '../../source/myLogo.png';
import foot from '../../source/footer.png';
import spoon from '../../source/spoon.png';
const Footer = () => {

    return (
        <div className={styles.footer}>
            <img src={foot} className={styles.foot}></img>
            <button className={styles.spoonBtn}>
                <img className={styles.spoon} src={spoon}></img>
            </button>
            <img src={ask} className={styles.ask}></img>
            <p className={styles.myq}>문의</p>
            <img src={my} className={styles.my}></img>
            <p className={styles.myp}>나의 후원</p>
        </div>
    )
}

export default Footer;