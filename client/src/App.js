import Footer from './components/Footer';
import Header from './components/Header';
import SignUpPage from './components/SignUpPage';

import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';



function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/register' element={<SignUpPage></SignUpPage>}></Route>
          <Route path='/login' element={<LoginPage setUser={setUser}></LoginPage>}></Route>


        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
