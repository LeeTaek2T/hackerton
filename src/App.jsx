import Sub1 from './component/sub01/sub1';
import Sub2 from './component/sub01/sub2';
import Sub03_1 from './component/sub03_1/sub03_1';
import Sub02_1 from './component/sub02/sub02_1';
import Sub02_2 from './component/sub02/sub02_2';

import './App.module.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Main from './component/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} exact={true} />
          <Route path="/sub1m1" element={<Sub1 />} exact={true} />
          <Route path="/sub1m2" element={<Sub2 />} exact={true} />
          <Route path="/sub03_1" element={<Sub03_1 />} exact={true} />
          <Route path="/sub02_1" element={<Sub02_1 />} exact={true} />
          <Route path="/sub02_2" element={<Sub02_2 />} exact={true} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
