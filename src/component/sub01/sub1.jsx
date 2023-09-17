import { useNavigate } from 'react-router-dom';
import styles from './sub1.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import leftArrow from '../../source/leftArrow.png';
import sub01_1 from '../../source/sub01_1.png';
import sub01_2 from '../../source/sub01_2.png';
import sub01_3 from '../../source/sub01_3.png';
import bottomArrow from '../../source/bottomArrow.png';
import { useState } from 'react';
import Child from '../child/child';
import childImg1 from '../../source/jaechan.png';
import upArrow from '../../source/upArrow.png';
import manImg from '../../source/man.png';
import womanIng from '../../source/woman.png';
import age1 from '../../source/age1.png';
import age2 from '../../source/age2.png';
import age3 from '../../source/age3.png';
import age4 from '../../source/age4.png';
import condition1 from '../../source/condition1.png';
import condition2 from '../../source/condition2.png';
import condition3 from '../../source/condition3.png';
import condition4 from '../../source/condition4.png';
import condition5 from '../../source/condition5.png';
import condition6 from '../../source/condition6.png';
import condition7 from '../../source/condition7.png';
import condition8 from '../../source/condition8.png';
import condition9 from '../../source/condition9.png';
import condition10 from '../../source/condition10.png';


const Sub1 = () => {
    const navigate = useNavigate();
    const toSubOne_two = () => {
        navigate({
            pathname: '/sub1m2'
        });
    }
    const toMain = () => {
        navigate({
            pathname: '/'
        });
    }
    const [percent, setPercent] = useState(50);
    const handleChangePercent = () => {
        const newPercent = Math.random() * 100;
        setPercent(newPercent);
    };

    const child_1 = {
        'name': '이재찬',
        'title': '구멍난 축구화지만 포기하지 않을래요.',
        'hashTag_1': `#생활지원  #재능지원  #0~3세`,
        'hashTag_2': '#축구  #한부모  #운동용품',
        'percent': percent,
        'childImg': childImg1
    }

    const [showFilter, setShowFilter] = useState(false);
    const toggleFilter = () => {
        setShowFilter(!showFilter);
    }
    return (
        <div>
            <Header></Header>
            <div className={styles.sub1Main}>
                <div className={styles.middle}>
                    <div className={styles.middleTitleDiv}> {/*제목 div*/}
                        <button className={styles.backArrow} onClick={toMain}>
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
                    {!showFilter &&
                        <div className={styles.filterDiv}> {/*필터 안눌렀을때 div*/}
                            <p className={styles.fp}>
                                필터
                            </p>
                            <button className={styles.bottomArrowBtn} onClick={toggleFilter}>
                                <img src={bottomArrow} className={styles.Arrow}></img>
                            </button>
                        </div>}
                    {showFilter &&
                        <div className={styles.filterBack}>
                            <div className={styles.selectfilterDiv}> {/*필터 눌렀을 때 div*/}
                                <p className={styles.selectfp}>
                                    필터
                                </p>
                                <button className={styles.selectbottomArrowBtn} onClick={toggleFilter}>
                                    <img src={upArrow} className={styles.Arrow}></img>
                                </button>
                            </div>
                            <div className={styles.filterDetailDiv}>
                                <div className={styles.detailTitle}>
                                    <p className={styles.detailP}>성별</p>
                                    <div className={styles.sort}>
                                        <button className={styles.sex}>남자</button>
                                        <button className={styles.sex}>여자</button>
                                    </div>
                                </div>
                                <div className={styles.detailTitle}>
                                    <p className={styles.detailPLong}>연령대</p>
                                    <div className={styles.sort}>
                                        <button className={styles.age}>0~3세</button>
                                        <button className={styles.age}>4~6세</button>
                                        <button className={styles.age}>7~12세</button>
                                        <button className={styles.age}>13~18세</button>
                                    </div>
                                </div>
                                <div className={styles.detailTitle}>
                                    <p className={styles.detailP}>조건</p>
                                    <div className={styles.sort}>
                                        <div className={styles.conditions}>
                                            <button className={styles.condition}>주거</button>
                                            <button className={styles.condition}>학습</button>
                                            <button className={styles.condition}>재능</button>
                                            <button className={styles.condition}>생활</button>
                                            <button className={styles.condition}>의료</button>
                                        </div>
                                        <div className={styles.conditions}>
                                            <button className={styles.condition}>보육원</button>
                                            <button className={styles.condition}>조부모</button>
                                            <button className={styles.condition}>미혼모</button>
                                            <button className={styles.condition}>한부모</button>
                                            <button className={styles.condition}>다문화</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className={styles.children}> {/*애들 소개*/}
                        <div className={styles.details}>
                            <Child childDetail={child_1} twoSubOne_two={toSubOne_two}></Child>
                            <Child childDetail={child_1}></Child>
                            <Child childDetail={child_1}></Child>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Sub1;


{/* <div className={styles.filterDetailDiv}>
<div className={styles.detailTitle}>
    <p className={styles.detailP}>성별</p>
    <div className={styles.sort}>
        <button className={styles.sex}>
            <img src={manImg} className={styles.sexImg} />
        </button>
        <button className={styles.sex}>
            <img src={womanIng} className={styles.sexImg} />
        </button>
    </div>
</div>
<div className={styles.detailTitle}>
    <p className={styles.detailPLong}>연령대</p>
    <div className={styles.sort}>
        <button className={styles.age}>
            <img className={styles.ageImg} src={age1}></img>
        </button>
        <button className={styles.age}>
            <img className={styles.ageImg} src={age2}></img>
        </button>
        <button className={styles.age}>
            <img className={styles.ageImg} src={age3}></img>
        </button>
        <button className={styles.age}>
            <img className={styles.ageImg} src={age4}></img>
        </button>
    </div>
</div>
<div className={styles.detailTitle}>
    <p className={styles.detailP}>조건</p>
    <div className={styles.sort}>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition1}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition2}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition3}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition4}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition5}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition6}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition7}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition8}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition9}></img>
        </button>
        <button className={styles.condition}>
            <img className={styles.conditionImg} src={condition10}></img>
        </button>
    </div>
</div>
</div> */}
