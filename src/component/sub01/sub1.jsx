import { useNavigate } from 'react-router-dom';
import styles from './sub1.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import leftArrow from '../../source/leftArrow.png';
import sub01_1 from '../../source/sub01_1.png';
import sub01_2 from '../../source/sub01_2.png';
import sub01_3 from '../../source/sub01_3.png';
import bottomArrow from '../../source/bottomArrow.png';

const Sub1 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header></Header>
            <div className={styles.sub1Main}>
                <div className={styles.middle}>
                    <div className={styles.middleTitleDiv}> {/*제목 div*/}
                        <button className={styles.backArrow}>
                            <img className={styles.backArrow} src={leftArrow} />
                        </button>
                        <div className={styles.titles}>
                            <div className={styles.oneTitles}>
                                <p className={styles.oneTitle}>236</p>
                                <p className={styles.twoTitle}>명의 새싹이</p>
                            </div>
                            <div className={styles.oneTitles}>
                                <p className={styles.oneTitle}>상수우</p>
                                <p className={styles.twoTitle}>님의 햇살을 기다리고 있어요!</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.filterDiv}> {/*필터 div*/}
                        <p className={styles.fp}>
                            필터
                        </p>
                        <button className={styles.bottomArrowBtn}>
                            <img src={bottomArrow} className={styles.bottomArrow}></img>
                        </button>
                    </div>
                    <div className={styles.children}> {/*애들 소개*/}
                        <div className={styles.child}>
                            <button className={styles.childBtn}>
                                <img src={sub01_1} className={styles.childImg}></img>
                            </button>
                            <div className={styles.childIntroduce}>
                                <p className={styles.childName}>이정훈</p>
                                <p className={styles.detail}>정훈이는 올해 백혈병 진단을 받았습니다. 현재 1주일에 4일 항암치료를 받는데, 아침 일찍 병원에 방문해서 혈액 검사를 가장 먼저 받습니다. 치료를 을 수 있는 혈액 수치가 되어야 항암치료를 받을 수 있고 수치가 좋지 않은...</p>
                            </div>
                        </div>

                        <div className={styles.child}>
                            <button className={styles.childBtn}>
                                <img src={sub01_2} className={styles.childImg}></img>
                            </button>
                            <div className={styles.childIntroduce}>
                                <p className={styles.childName}>김민정</p>
                                <p className={styles.detail}>집중호우가 잦았던 올해 여름, 오래되어 노후가 심한 민정이의 집도 무섭게 퍼붓는 빗줄기를 견디지 못하고 집안 여러 곳에 누수가 발생하고 말았습니다. 그 피해는 유독 겨울에도 웃풍이 심해 감기를 달고 지냈던 민정이...</p>
                            </div>
                        </div>

                        <div className={styles.child}>
                            <button className={styles.childBtn}>
                                <img src={sub01_3} className={styles.childImg}></img>
                            </button>
                            <div className={styles.childIntroduce}>
                                <p className={styles.childName}>이재찬</p>
                                <p className={styles.detail}>재찬이는 다른 친구들보다 다소 늦은 초5 때부터 축구를 시작하여 열심히 노력한 덕분에 지금은 교내 주전 선수로 활약하고 있습니다. 재찬이의 축구 실력은 오로지 혼자만의 싸움과 의지로 이루어 냈습니다. 새벽 5시...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Sub1;