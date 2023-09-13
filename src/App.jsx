import './App.module.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Main from './component/main/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={StyleSheet.App}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'
            element={<Main></Main>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
