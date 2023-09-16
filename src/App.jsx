import Main from './component/main/main';
import Sub1 from './component/sub01/sub1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>} exact={true} />
          <Route path='/sub1m1' element={<Sub1></Sub1>} exact={true} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;