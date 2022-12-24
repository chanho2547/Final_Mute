import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MusicalListContainer = styled.div`
margin : 0 auto;


.musicalList{
    display: flex;
    margin: 0 auto;
    .musicalList_img{
        /* margin-right: 100px;    */
    }
    .musicalList_status{
        /* margin-top: 120px;
        margin-right: 100px; */
        font-weight: 600;
        font-size: 20px;
    }
    .musicalList_text{
        .musicalList_text_name{
            font-size: 30px;
            font-weight: 700;
        }
        .musicalList_test_date{
            color: #909090;
        }
    }
}

`;

const Container = styled.div`


margin: 0 auto;

:hover {
    /* background-color: ; */
    opacity: 0.5;
    background-color: rgba(233,230,213,0.9);
    color:black;
    cursor: pointer;
}

`;

const MusicalSearchRes = (props) => {
    let navigate = useNavigate();
    const [searchList, setSearchList] = useState("");
    let musicalWord = window.localStorage.getItem("inputMusical"); // header에서 입력한 단어

useEffect(() => {
    const SearchData = async () => {
        try {
            let response = await MuteApi.searchMusical(musicalWord);
            setSearchList(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e + "뮤지컬 검색 실패입니다.")
        } 
    };
    SearchData();
}, []);

// 뮤지컬 클릭
const OnClick = (musicalId,musicalName) => {
    //window.localStorage.setItem("musicalId", musicalId)
    // console.log("로컬스토리지 : " + musicalId)
    props.addMusicalId(musicalId);
    props.addMusicalName(musicalName);
    props.propFunction();
}

    return (
        <>
        <MusicalListContainer>
            {searchList && searchList.map(e => (
                // 만약 OnClick(e.musicalName)이라고 적으면 로컬스토리지에 musicalName저장됨
                <Container onClick={() => OnClick(e.musicalId,e.musicalName)}>

                <div className="musicalList">

                <img className="musicalList_img" src= {e.musicalPoster} size width={220} height={300} />
                <p className="musicalList_status">{e.musicalStatus}</p>

                <div className="musicalList_text">
                <p className="musicalList_text_name">{e.musicalName}</p>
                <p className="musicalList_test_date">{e.musicalStart}&nbsp;~&nbsp;{e.musicalEnd}&nbsp;&nbsp;|&nbsp;&nbsp;{e.theaterName}</p>
                </div>

                </div>

                </Container>
            ))}
        </MusicalListContainer>
        </>
    )
}
export default MusicalSearchRes;