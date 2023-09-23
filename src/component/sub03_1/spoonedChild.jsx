import styles from './spoonedChild.module.css';
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


const SpoonedChild = ({ child }) => {
    let imgSrc = '';
    // console.log(child.data);
    switch (child.imgOne) {
        case 1:
            imgSrc = subOne_1;
            break;
        case 2:
            imgSrc = subOne_2;
            break;
        case 3:
            imgSrc = subOne_3;
            break;
        case 4:
            imgSrc = subOne_4;
            break;
        case 5:
            imgSrc = subOne_5;
            break;
        case 6:
            imgSrc = subOne_6;
            break;
        case 7:
            imgSrc = subOne_7;
            break;
        case 8:
            imgSrc = subOne_8;
            break;
        case 9:
            imgSrc = subOne_9;
            break;
        case 10:
            imgSrc = subOne_10;
            break;
        case 11:
            imgSrc = subOne_11;
            break;
        default:
            break;
    }
    return (
        <div>
            <div className={styles.Sponsored} >
                <div className={styles.SponsoredImgSpace}>
                    <img src={imgSrc} className={styles.SponsoredPhoto} />
                </div>
                <div className={styles.SponsoredInfo}>
                    <div className={styles.InfoDiv}>
                        <b className={styles.name}>{child.name}</b>
                        <br className={styles.detail} />
                        {`후원 시작일 : ${child.date}`}
                        <br />{`월 후원금액 : ${child.money}원`}
                    </div>
                </div>
            </div >
            <hr className={styles.BetweenSponsored} />
            <div className={styles.Sponsored}></div>
        </div>

    )
}

export default SpoonedChild;