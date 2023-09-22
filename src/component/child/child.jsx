import { useLocation, useNavigate } from 'react-router-dom';
import styles from './child.module.css';
import GaugeGraph from './gaugeGraph';
import subOne_1 from '../../source/sub1/sub1_1.png';
import subOne_2 from '../../source/sub1/sub1_2.png';
import subOne_3 from '../../source/sub1/sub1_3.png';
import subOne_4 from '../../source/sub1/sub1_4.png';
import subOne_5 from '../../source/sub1/sub1_5.png';
import subOne_6 from '../../source/sub1/sub1_6.png';
import subOne_7 from '../../source/sub1/sub1_7.png';
import subOne_8 from '../../source/sub1/sub1_8.png';
import subOne_9 from '../../source/sub1/sub1_9.png';
import subOne_10 from '../../source/sub1/sub1_10.png';
import subOne_11 from '../../source/sub1/sub1_11.png';

const Child = ({ childData }) => {
    let imgSrc = '';
    const navigate = useNavigate();
    switch (childData.imgOne) {
        case 'subOne_1':
            imgSrc = subOne_1;
            break;
        case 'subOne_2':
            imgSrc = subOne_2;
            break;
        case 'subOne_3':
            imgSrc = subOne_3;
            break;
        case 'subOne_4':
            imgSrc = subOne_4;
            break;
        case 'subOne_5':
            imgSrc = subOne_5;
            break;
        case 'subOne_6':
            imgSrc = subOne_6;
            break;
        case 'subOne_7':
            imgSrc = subOne_7;
            break;
        case 'subOne_8':
            imgSrc = subOne_8;
            break;
        case 'subOne_9':
            imgSrc = subOne_9;
            break;
        case 'subOne_10':
            imgSrc = subOne_10;
            break;
        case 'subOne_11':
            imgSrc = subOne_11;
            break;
        default:
            break;
    }
    const twoSubOne_two = (value, childData) => {
        let pathname;
        let CD = childData;
        switch (value) {
            case 1:
                pathname = '/sub1m1/sub1m1_1';
                break;
            case 2:
                pathname = '/sub1m1/sub1m1_2';
                break;
            case 3:
                pathname = '/sub1m1/sub1m1_3';
                break;
            case 4:
                pathname = '/sub1m1/sub1m1_4';
                break;
            case 5:
                pathname = '/sub1m1/sub1m1_5';
                break;
            case 6:
                pathname = '/sub1m1/sub1m1_6';
                break;
            case 7:
                pathname = '/sub1m1/sub1m1_7';
                break;
            case 8:
                pathname = '/sub1m1/sub1m1_8';
                break;
            case 9:
                pathname = '/sub1m1/sub1m1_9';
                break;
            case 10:
                pathname = '/sub1m1/sub1m1_10';
                break;
            case 11:
                pathname = '/sub1m1/sub1m1_11';
                break;
        }
        if (pathname) {
            navigate(
                { pathname: pathname },
                {
                    state: { childData: childData },
                }
            );
        }
    };

    return (
        <div className={styles.childDiv}>
            <button
                className={styles.childBtn}
                onClick={() => twoSubOne_two(childData.id, childData)}
            >
                <img src={imgSrc} className={styles.childImg}></img>
            </button>
            <div
                className={styles.childDetail}
                onClick={() => twoSubOne_two(childData.id, childData)}
            >
                <p className={styles.detailTitle}>{childData.title}</p>
                <p className={styles.hashTag}>{childData.hashtags}</p>
                <p className={styles.hashTag}>{childData.hashtags2}</p>
                <div className={styles.gaugeBarDiv}>
                    <GaugeGraph percent={childData.per}></GaugeGraph>
                </div>
            </div>
        </div>
    );
};

export default Child;
