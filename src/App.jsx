import Sub1 from './component/sub01/sub1';
import Sub2 from './component/sub01/sub2';

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
          <Route path='/' element={<Main></Main>} exact={true} />
          <Route path='/sub1m1' element={<Sub1></Sub1>} exact={true} />
          <Route path='/sub1m2' element={<Sub2></Sub2>} exact={true} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;