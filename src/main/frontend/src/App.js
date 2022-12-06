import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstFloorChar from './theaterInfo/charLotte/FirstFloorChar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './home/Home';
import Login from './login/Login';
import SecondFloorChar from './theaterInfo/charLotte/SecondFloorChar';
import FirstFloorChung from './theaterInfo/chungmuArt/FirstFloorChung';
import SecondFloorChung from './theaterInfo/chungmuArt/SecondFloorChung';
import ThirdFloorChung from './theaterInfo/chungmuArt/ThirdFloorChung';
import Review from './review/Review';

import Reservation from './reservation/Reservation';
import Cs from './cs/Cs';
import SingUp from './login/SignUp';
import Like from './util/Like';
import SeatView from './review/SeatView';
import Membership from './membership/Membership';
import Mypage from './mypage/Mypage';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/FirstFloorChar" element={<FirstFloorChar />} />
        <Route path="/SecondFloorChar" element={<SecondFloorChar />} />
        <Route path="/FirstFloorChung" element={<FirstFloorChung />} />
        <Route path="/SecondFloorChung" element={<SecondFloorChung />} />
        <Route path="/ThirdFloorChung" element={<ThirdFloorChung />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SingUp />} />
        <Route path='/Review' element={<Review />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Like' element={<Like />} />
        <Route path='/Cs' element={<Cs />} />
        <Route path='/SeatView' element={<SeatView />} />
        <Route path='/Mypage' element={<Mypage />} />
        <Route path='/Membership' element={<Membership/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;