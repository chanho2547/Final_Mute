// import { useState, useEffect } from "react";
// import MuteApi from "../api/MuteApi";

// const SeatClick = () => {
//     const [selectSeat, setSelectSeat] = useState();

//     useEffect(() => {
//         const SeatDetailData = async () => {
//             try {
//                 let response = await MuteApi.seatReview();
//                 setSelectSeat(response.data);
//             } catch(e) {
//                 console.log(e + "좌석 상세정보 후기 불러오기 실패");
//             }
//         };
//         SeatDetailData();
//     }, []);

//     const Onclick = (e) => {
//     }

//     return(
//         <>
//         {selectSeat && selectSeat.map(e => (
//             <div Onclick={() => Onclick(e)}>


//             </div>
//         ))}

//         </>
//     )
// }

// export default SeatClick;