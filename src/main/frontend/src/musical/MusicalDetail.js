import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import Modal from "../util/Modal";
import heartIcon from "../images/heart.png";
import heartIcon2 from "../images/heart2.png";
import { useNavigate } from "react-router-dom";
import MusicalTab from "./MusicalTab";
import moment from "moment";
import Moment from 'react-moment';
import 'moment/locale/ko';

//////////////// 스타일드 컴포넌트 ////////////////

const DetailInfoContainer = styled.div`
   
	margin: 40px auto;
	width: 1024px;
	.musicalTitle {
		font-weight: 700;
		font-size: 1.5em;
		display: block;
		margin-bottom: 20px;
	}
	.button {
		cursor: pointer;
		display: flex;
		float: left;
		margin-left: 50px;
	}
`

const DescInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	.poster {
		width: 300px;
		height: 400px;
	}
	table {
		margin-left: 50px;
		height: 340px;
		width: 600px;
		td {
			vertical-align: top;
			padding: 5px;
		}
	}
	.title {
		width: 150px;
		padding-right: 25px;
		color: #810000;
		font-weight: 500;
	}
`

// 찜하기 버튼 스타일
const WishBtn = styled.button`
	font-size: 1.1em;
	width: 280px;
	height: 50px;
	border-radius: 5px;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	color: #810000; 
	background-color: #EEEBDD;
	img {
		margin-right: 5px;
		margin-top: 1px;
	}
	cursor: pointer;
`;

// 찜하기 취소 버튼 스타일
const UnWishBtn = styled.button`
	width: 280px;
	height: 50px;
	border-radius: 5px;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	color: #810000; 
	background-color: #EEEBDD;
	img {
		margin-right: 5px;
		margin-top: 1px;
	}
	cursor: pointer;
`;

// 예매하기 버튼 스타일
const ReserveOnbtn = styled.button`
	font-size: 1.1em;
	width: 280px;
	height: 50px;
	border-radius: 5px;
	border: none;
	margin: 10px;
	color: white; 
	background-color: #810000;
	cursor: pointer;
`;

// 예매예정 버튼 스타일 - 티켓스타트 날짜 이전일 경우
const ReserveOffbtn = styled.button`
	font-size: 1.1em;
	width: 280px;
	height: 50px;
	border-radius: 5px;
	border: none;
	margin: 10px;
	color: white; 
	background-color: #909090;
	cursor: none; // 비활성화
`;



const MusicalDetail = (props) => {
	const navigate = useNavigate();
	const [musicalDetail,setMusicalDetail] = useState();
	const [emptyData, setEmptyData] = useState("");
	const [musicalStartDate, setMusicalStartDate] = useState();
	const [ticketOpenDate, setTicketOpenDate] = useState();

	const musicalId = window.localStorage.getItem("musicalId"); // 선택한 musicalId
	const userNum = window.localStorage.getItem("whoLoginUserNum"); // 로그인할 경우 저장한 userNum

	const [wish, setWish] = useState(false);
	const [modalWishReg, setModalWishReg] = useState(false); // 찜 등록했을 경우
	const [modalWishCancel, setModalWishCancel] = useState(false); // 찜 취소했을 때 
	const [modalNotLogin, setModalNotLogin] = useState(false); // 로그인 안했을 경우

	const [countReview, setCountReview] = useState();


	const closeModalWishReg = () => {
		setModalWishReg(false);
	}

	const closeModalWishCancelN = () => {
		setModalWishCancel(false);
	}

	const closeModalWishCancelY = async () => {
		try {
			console.log("wish취소 userNum : " + userNum);
			console.log("wish취소 musicalId : " + musicalId);
			await MuteApi.wishCancel(userNum, musicalId);
			setModalWishCancel(false);
			setWish(!wish);
		} catch (e) {
			console.log(e + "찜 취소 통신 실패")
		}
	}

	const closeModalNotLogin= () => {
		setModalNotLogin(false);
		navigate('/Login'); // 로그인페이지로 이동 
	}

	

	// 뮤지컬 api 호출
	useEffect(() => {

		if(window.localStorage.getItem("countReview") === 2) {
			setCountReview(window.localStorage.getItem("countReview"));
			props.countReview(true);
		}


		const sysdate = moment().format('YYYY-MM-DD'); // 현재날짜
		console.log("현재날짜시간 ? " + sysdate);

		const MusicalData = async () => {
			try {
				const response = await MuteApi.musicalDetail(musicalId); // 받은 musicalId 서버로 넘겨주기
				setMusicalDetail(response.data);

				console.log(response.data[0].musicalStart);
				setMusicalStartDate(response.data[0].musicalStart); // 공연시작일

				const ticketStartDate = 
				setTicketOpenDate(moment(response.data[0].musicalStart).subtract(1, 'month').format('YYYY-MM-DD'));

				// const musicalCastInfo = response.data[0].musicalCast;
				// const musicalRunInfo = response.data[0].musicalRuntime;
				//
				// if (musicalCastInfo === null && musicalCastInfo == 'undefined'
				// 	|| musicalRunInfo === null && musicalRunInfo == 'undefined')
				// 	setEmptyData("정보없음");

			} catch (e) {
				console.log(e + "실패");
			}
		};
		MusicalData();

	}, []);

	const OnClickWish = async() => {
		try {
			const response = await MuteApi.wishReg(userNum, musicalId); // musicalId와 userNum으로 찜 상품 등록
			setWish(response.data);
		}
		catch (e) {
			console.log(e);
		}
		if(userNum) {
			if(wish === false) {
				setModalWishReg(true);
			} else {
				setModalWishCancel(true);
			}
		} else {
			setModalNotLogin(true);
		}
	}

	const OnClickReserve = (musicalId) => {
		console.log("예매하기로 넘겨줄 뮤지컬 ID값 : " + musicalId);
		window.localStorage.setItem("thisMusicalId", musicalId); // 예매페이지로 넘겨줌
		navigate('/Reservation');
	}

	
	return(
		<>
		{musicalDetail && musicalDetail.map(e => (
			<DetailInfoContainer>
				<p className="musicalTitle">{e.musicalName}</p>
				<DescInfo>
					<div>
						<img alt="poster" className="poster" src={e.musicalPoster}/>
					</div>
					<div>
						<table>
							<tr>
								<td className="title">장소</td><td>{e.theaterName}</td>
							</tr>
							<tr>
								<td className="title">공연기간</td><td>{e.musicalStart} ~ {e.musicalEnd}</td>
							</tr>
							<tr>
								<td className="title">공연시간</td><td>{e.musicalRuntime}</td>
							</tr>
							<tr>
								<td className="title">공연상태</td><td>{e.musicalStatus}</td>
							</tr>
							<tr>
								<td className="title">출연진</td><td>{e.musicalCast}</td>
							</tr>
							<tr>
								<td className="title">관람연령</td><td>{e.musicalAge}</td>
							</tr>
							<tr>
								<td className="title">가격</td><td>{e.musicalPrice}</td>
							</tr>
							<tr>
								<td className="title">공연일정</td><td>{e.musicalPlan}</td>
							</tr>
						</table>
						<div className="button">
							<WishBtn onClick = {() => OnClickWish()} className={(wish ? WishBtn : UnWishBtn)}><img src={wish ? heartIcon : heartIcon2} alt={heartIcon} width="17px"/> 찜하기</WishBtn>
							<ReserveOnbtn onClick={() => OnClickReserve(e.musicalId)}><Moment fromNow>{ticketOpenDate}</Moment> 티켓 오픈</ReserveOnbtn>
						</div>
					</div>
					
				</DescInfo>
				<MusicalTab theaterId={e.theaterId} />
			</DetailInfoContainer>
		))}

		{modalWishReg && <Modal open={modalWishReg} close={closeModalWishReg} header="&nbsp;">뮤지컬 찜 완료</Modal>}
		{modalWishCancel && <Modal open={modalWishCancel} confirm = {closeModalWishCancelY} close={closeModalWishCancelN} header='취소'>찜하기를 취소하시겠습니까?</Modal>}
		{modalNotLogin && <Modal open={modalNotLogin} close={closeModalNotLogin} header="&nbsp;">로그인 후 이용하시기 바랍니다.</Modal>}
	  
	  </>
  );
}

export default MusicalDetail;