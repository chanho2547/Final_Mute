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
import Like from './util/Like';
import SeatView from './review/SeatView';
import Membership from './membership/Membership';
import MusicalDetail from './musical/MusicalDetail';
import SignUp from "./login/SignUp";
import Agree from "./login/Agree";
import SignCom from "./login/SignCom";
import FindId from "./login/FindId";
import MyPage from "./mypage/Mypage";
import Search from './theaterInfo/Search';
import FindPwd from './login/FindPwd';

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
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Review' element={<Review />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Like' element={<Like />} />
        <Route path='/Cs' element={<Cs />} />
        <Route path='/SeatView' element={<SeatView />} />
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/Membership' element={<Membership/>} />
        <Route path='/MusicalDetail' element={<MusicalDetail/>}></Route>
        <Route path='/Agree' element={<Agree/>} />
        <Route path='/SignCom' element={<SignCom />} />
        <Route path='/FindId' element={<FindId />} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/FindPwd' element={<FindPwd/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;