import Footer from './components/Footer';
import Header from './components/Header';
import SignUpPage from './components/SignUpPage';

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import axios from 'axios';
import { getData } from './asyncFunctions/externalDataHandlers';


function App() {
  const [user, setUser] = useState({});
  const [errorStatus, setErrorStatus] = useState();
  const [allPeeps, setAllPeeps] = useState([]);

  const getDataHandler = () => {
    getData(setAllPeeps, setErrorStatus);
  };

  useEffect(() => {
    getDataHandler()
  }, [])

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage peepData={allPeeps} getAllPeeps={getDataHandler}></HomePage>}></Route>
          <Route path='/register' element={<SignUpPage></SignUpPage>}></Route>
          <Route path='/login' element={<LoginPage setUser={setUser}></LoginPage>}></Route>


        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
