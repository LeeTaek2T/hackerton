import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './gaugeGraph.module.css';
import sunImg from '../../source/sun.png';
//***  npm install react react-dom styled-components 설치필요****


const GaugeGraph = () => {
    const [percent, setPercent] = useState(50); // 초기 게이지 퍼센트 값

    useEffect(() => {
        const interval = setInterval(() => {
            const newPercent = Math.floor(Math.random() * 101); // 랜덤한 퍼센트 값 생성 (0에서 100 사이)
            setPercent(newPercent);
        }, 3000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <div className={styles.graph}>
            <div className={styles.bar}>
                {/* <p className={styles.Spercent}>후원률</p> */}
                <ProgressBar percent={percent} />
                <p className={styles.percent}>후원률 : {percent}%</p>
            </div>
            <img src={sunImg} className={styles.sunImg}></img>
        </div>

    );
}



const ProgressBarContainer = styled.div`
  width: 70%; /* 막대 그래프의 전체 너비 */
  height: 18px; /* 막대 그래프의 높이 */
  background-color: #E3E3E3;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #FB8686; /* 게이지 색상 */
  transition: width 0.5s ease-in-out;
`;

const ProgressBar = ({ percent }) => {
    return (
        <ProgressBarContainer className={styles.container}>
            <ProgressBarFill style={{ width: `${percent}%` }} />
        </ProgressBarContainer>
    );
};
export default GaugeGraph;