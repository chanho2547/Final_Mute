
// import { Link } from "react-router-dom";
// import { useState, useEffect} from "react";
// import MuteApi from "../api/MuteApi";

// const OnClick = (e) => {
//     window.localStorage.setItem("Detail", e);
//     window.location.replace("/ItemDetail");
// }


// const Search = () => {
//     const [searchInfo, setSearchInfo] = useState("");
//     let input = window.localStorage.getItem("input");

// useEffect(() => {
//     const SearchData = async () => {
//         try {
//             window.localStorage.getItem(input);
//             let response = await MuteApi.searchTheater(input);

//             setSearchInfo(response.data);
//             console.log(response.data);
//         } catch (e) {
//             console.log(e + "검색 실패 입니다");
//         }
//     };
//     SearchData();
// }, []);

// return (
//     <>
//     <div>
//         {searchInfo && searchInfo.map(TheaterWord => (
//         <>
//             <div onClick={()=>OnClick(TheaterWord.theaterName)}>
//                 <div className="theater">
//                 <img className="theaterPoster" src = {TheaterWord.theaterPoster}/>
//                 <div className="theaterName">{TheaterWord.theaterName}</div>
//                 <div className="theaterAddr">{TheaterWord.theaterAddr}</div>
//                 <div className="theaterSeats">{TheaterWord.theaterSeats}</div>
//                 </div> 
//             </div>
//         </>

//         ))}
//     </div>
//     </>
// )

// }

// export default Search;