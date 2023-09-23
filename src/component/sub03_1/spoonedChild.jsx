import styles from './spoonedChild.module.css';
import subOne_1 from '../../source/sub1/sub1_1.png';
import subOne_5 from '../../source/sub1/sub1_5.png';

const SpoonedChild = ({ child }) => {
    let imgSrc = '';
    switch (child.imgOne) {
        case 'subOne_1':
            imgSrc = subOne_1;
            break;
        case 'subOne_5':
            imgSrc = subOne_5;
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