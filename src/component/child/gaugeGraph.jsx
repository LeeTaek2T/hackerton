import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './gaugeGraph.module.css';
import sunImg from '../../source/sun.png';

const GaugeGraph = ({ percent }) => {
  // 소수점 한자리까지 반올림하여 변환
  const formattedPercent = percent.toFixed(1);

  return (
    <div className={styles.graph}>
      <div className={styles.bar}>
        <ProgressBar percent={percent} />
        <p className={styles.percent}>후원률 : {formattedPercent}%</p>
      </div>
      <img src={sunImg} className={styles.sunImg} alt="태양" />
    </div>
  );
};

const ProgressBarContainer = styled.div`
  width: 70%; /* 막대 그래프의 전체 너비 */
  height: 18px; /* 막대 그래프의 높이 */
  background-color: #e3e3e3;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #fb8686; /* 게이지 색상 */
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
