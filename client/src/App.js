import Footer from './components/Footer';
import Header from './components/Header';
import SignUpPage from './components/SignUpPage';

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import axios from 'axios';



function App() {
  const [user, setUser] = useState({});

  const [allPeeps, setAllPeeps] = useState([]);

  useEffect(() => {
    const getAllPeeps = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/allpeeps`)
        setAllPeeps(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getAllPeeps()
  }, [])

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage peepData={allPeeps}></HomePage>}></Route>
          <Route path='/register' element={<SignUpPage></SignUpPage>}></Route>
          <Route path='/login' element={<LoginPage setUser={setUser}></LoginPage>}></Route>


        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
