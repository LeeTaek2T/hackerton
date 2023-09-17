import { useLocation } from 'react-router-dom';
import styles from './child.module.css';
import GaugeGraph from './gaugeGraph';

const Child = ({ childDetail, twoSubOne_two }) => {

    const { name, title, hashTag_1, hashTag_2, percent, childImg } = childDetail;

    return (
        <div className={styles.childDiv}>
            <button className={styles.childBtn} onClick={twoSubOne_two}>
                <img src={childImg} className={styles.childImg}></img>
            </button>
            <div className={styles.childDetail} onClick={twoSubOne_two}>
                <p className={styles.detailTitle}>{title}</p>
                <p className={styles.hashTag}>{hashTag_1}</p>
                <p className={styles.hashTag}>{hashTag_2}</p>
                <GaugeGraph percent={percent}></GaugeGraph>
            </div>
            <div className={styles.gaugeBarDiv}>
            </div>
        </div>

    )
}

export default Child;