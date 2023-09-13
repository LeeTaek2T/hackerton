import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/header';
import ImageSlider from '../ImageSlider/imageSlider';
import Footer from '../footer/footer';
import styles from './main.module.css';
const Main = () => {
  return (
    <div>
      <div className={styles.headerDiv}>
        <Header></Header>
      </div>
      {/* <div>
        <ImageSlider></ImageSlider>
      </div> */}
      <div className={styles.footerDiV}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
