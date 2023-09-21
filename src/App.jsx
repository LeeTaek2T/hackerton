import Sub1 from './component/sub01/sub1';
import Sub2 from './component/sub01/sub2';
import Sub03_1 from './component/sub03_1/sub03_1';

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
          <Route path="/" element={<Main></Main>} exact={true} />
          <Route path="/sub1m1" element={<Sub1></Sub1>} exact={true} />
          <Route path="/sub1m1/sub1m1_1" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_2" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_3" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_4" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_5" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_6" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_7" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_8" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_9" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_10" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub1m1/sub1m1_11" element={<Sub2></Sub2>} exact={true} />
          <Route path="/sub03_1" element={<Sub03_1></Sub03_1>} exact={true} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [hello, setHello] = useState('')

//   useEffect(() => {
//     axios.get('/api/api/hello')
//       .then(response => setHello(response.data))
//       .catch(error => console.log(error))
//   }, []);

//   return (
//     <div>
//       백엔드에서 가져온 데이터입니다 : {hello}
//     </div>
//   );
// }

// export default App;