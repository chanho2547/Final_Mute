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
import ChoiceSeat from './review/ChoiceSeat';
import Reservation from './reservation/Reservation';
import Cs from './cs/Cs';
import Like from './util/MyWish';
import Membership from './membership/Membership';
import MusicalDetail from './musical/MusicalDetail';
import SignUp from "./login/SignUp";
import Agree from "./login/Agree";
import SignCom from "./login/SignCom";
import FindId from "./login/FindId";
import MyPage from "./mypage/Mypage";
import MusicalSearchList from './musical/MusicalSearchList';
import MusicalSearch from './musical/MusicalSearch'; // 나중에 삭제 예정
import FindPwd from './login/FindPwd';
import TheaterChar from './theaterInfo/TheaterChar';
import TheaterChung from './theaterInfo/TheaterChung';
import RePwd from "./login/RePwd";
import MusicalListTmp from './musical/MusicalListTmp';
import PayTest from './payment/PayTest';
import TheaterSearch from './theaterInfo/TheaterSearch';
import TheaterSearchList from './theaterInfo/TheaterSearchList';
import Alarm from './util/Alarm';
import Edit from "./mypage/Edit";
import MyWish from './util/MyWish';
import PayEnd from './reservation/payment/PayEnd';
import SeatClick from './review/SeatClick';
import TheaterDetail from './musical/TheaterDetail';
import MusicalDetailInfo from './musical/MusicalDetailInfo';


function App() {
  return (
    <>
    <Router>
      <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/FirstFloorChar" element={<FirstFloorChar />} />
        <Route path="/SecondFloorChar" element={<SecondFloorChar />} />
        <Route path="/FirstFloorChung" element={<FirstFloorChung />} />
        <Route path="/SecondFloorChung" element={<SecondFloorChung />} />
        <Route path="/ThirdFloorChung" element={<ThirdFloorChung />} />
        <Route path='/Alarm' element={Alarm}></Route>
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Review' element={<Review />} />
        <Route path='/ChoiceSeat' element={<ChoiceSeat />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Like' element={<Like />} />
        <Route path='/Cs' element={<Cs />} />
        <Route path='/TheaterSearch' element={<TheaterSearch />} />
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/Membership' element={<Membership/>} />
        <Route path='/MusicalDetail' element={<MusicalDetail/>}/>
        <Route path='/MusicalListTmp' element={<MusicalListTmp/>}/>
        <Route path='/Agree' element={<Agree/>} />
        <Route path='/SignCom' element={<SignCom />} />
        <Route path='/FindId' element={<FindId />} />
        <Route path='/TheaterSearchList' element={<TheaterSearchList/>} />
        <Route path='/MusicalSearch' element={<MusicalSearch/>} />
        <Route path='/FindPwd' element={<FindPwd/>} />
        <Route path='/TheaterChar' element={<TheaterChar/>} />
        <Route path='/TheaterChung' element={<TheaterChung/>} />
        <Route path='/RePwd' element={<RePwd/>} />
        <Route path='/MusicalSearchList' element={<MusicalSearchList/>}/>
        <Route path='/payTest' element={<PayTest/>} />
        <Route path="/Edit" element={<Edit/>} />
        <Route path="/MyWish" element={<MyWish/>} />
        <Route path="/PayEnd" element={<PayEnd/>} />
        <Route path='/SeatClick' element={<SeatClick/>}/>
        <Route path='/TheaterDetail' element={<TheaterDetail/>}/>
        <Route path='/MusialDetailInfo' element={<MusicalDetailInfo/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;