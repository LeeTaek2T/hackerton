import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './sub2.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import leftArrow from '../../source/leftArrow.png';
import DetailImageSlider from '../detailImageSlider/detailImageSilder';


const Sub2 = () => {
    const navigate = useNavigate();
    const toSubOne_one = () => {
        navigate({
            pathname: '/sub1m1'
        });
    }



    return (
        <div>
            <Header></Header>
            <div className={styles.middle}>
                <div className={styles.middleTitleDiv}>
                    <button className={styles.backArrowBtn} onClick={toSubOne_one}>
                        <img className={styles.backArrow} src={leftArrow} />
                    </button>
                    <p className={styles.middleTitle}>상세 페이지</p>
                </div>
                <DetailImageSlider></DetailImageSlider>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <p className={styles.detailTitle}>"힘들었던 어린 시절의 유일한 희망은 오직 축구 뿐이었어요."</p>
                        <div className={styles.detailCoreDiv}>
                            <p className={styles.detailCore}>
                                재찬이는 다른 친구들보다 다소 늦은 초5 때부터 축구를 시작하여 열심히 노력한 덕분에 지금은 교내 주전 선수로 활약하고 있습니다. 재찬이의 축구 실력은 오로지 혼자만의 싸움과 의지로 이루어 냈습니다. 새벽 5시반에 누구보다 일찍 운동장에 도착해서 기본 2시간의 훈련 및 슛 300개, 저녁 훈련이 끝나고도 드리블 200개, 마무리 스트레칭까지… 이렇게 홀로 훈련을 시작한 지 벌써 2년이 넘어가고 있습니다.
                            </p>
                            <p className={styles.detailCore}>
                                어느 날 어머니는 재찬이의 축구화를 보고 깜짝 놀랐습니다. "축구화가 닳으면 얘기해 달라고 했는데 재찬이가 사달라고 선뜻 말을 꺼내기가 어려웠는지 신발 깔창에 구멍이 날 정도였는데도 새로 사달라고 얘기하지 않더라고요. 그걸 보고 얼마나 속이 상하던지.." 항상 재찬이의 또래에 비해 부모로서 뒷바라지를 못해준 것 같아 어머니는 속이 상합니다.
                            </p>
                        </div>
                    </div>

                    <div className={styles.detail}>
                        <p className={styles.detailTitle}>"그래도 제가 포기하지만 않으면, 언젠가는 꼭 꿈을 이룰 수 있을 것 같아요."</p>
                        <div className={styles.detailCoreDiv}>
                            <p className={styles.detailCore}>
                                재찬이는 특출난 재능과 꿈에 대한 열정이 있음에도 불구하고 경제적인 문제로로 인해 적절한 지원을 받지 못하고 있습니다. 비록 어려운 환경일지라도, 재찬이가 아무런 걱정 없이 축구를 할 수 있도록 여러분의 관심과 응원이 필요합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.spoon}>
                <button className={styles.spoonBtn} >후원하기</button>
            </div>
        </div>
    );
}

export default Sub2;