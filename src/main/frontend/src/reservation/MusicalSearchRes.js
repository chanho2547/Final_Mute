
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";

import styled from "styled-components";

const MusicalListContainer = styled.div`
margin : 0 auto;

.musicalList{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    .musicalList_img{
        margin: 0 auto;
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

const MusicalContainer =styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
.musical_title{
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-size: 35px;
    margin: 50px 0 10px 0;
    .musical_title_front{
        color: #810000;
    }
    .musical_title_back{
        color: #1b1717;
    }
}
.musical_name{
    width: 300px;
    color: #810000;
    font-weight: 700;
    font-size: 20px;
    margin: 0 50px 0 50px;
}
.musical_img{
    width: 300px;
    height: 400px;
    margin: 0 auto;
    justify-content: center;

}

.theater_name{
    width: 300px;
    color: #1b1717;
    margin: 0 50px 0 50px;
}
.musical_date{
    color: #909090;
    font-size: 13px;
    margin: 0 50px 0 50px;
}
.openedMusical{
    display: flex;
    justify-content: center;
    margin: auto;
}
.openBeforeMusical{
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    margin: auto;
    padding-bottom: 35px;
}
.starRanking{
    display: flex;
    justify-content: center;
    margin: auto;
    margin-bottom: 35px
}
.wishRanking{
    display: flex;
    justify-content: center;
    margin: auto;
    margin-bottom: 35px;
}
.centerBlock{
    background-color: #F4F4F4;
    .musical_title{
        padding-top:30px;
    }
    .musicalDate{
        padding-bottom:30px;
    }
}
`;

const Container = styled.div`
width: fit-content;
text-align: center;
margin: 20px auto;

:hover {
    /* background-color: ; */
    opacity: 0.5;
    //background-color: rgba(233,230,213,0.9);
    //color:black;
    cursor: pointer;
}

`;

const MusicalSearchRes = (props) => {

    const [searchList, setSearchList] = useState("");
    let musicalWord = props.searchWord; // header에서 입력한 단어

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
},[props.searchWord]);

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
        <MusicalContainer>
            {searchList && searchList.map(e => (
                // 만약 OnClick(e.musicalName)이라고 적으면 로컬스토리지에 musicalName저장됨
                <Container onClick={() => OnClick(e.musicalId,e.musicalName)}>

                

                <img className="musical_img" src= {e.musicalPoster} />
                {/* <p className="musicalList_status">{e.musicalStatus}</p> */}

                
                <p className="musical_name">{e.musicalName}</p>
                <p className="musical_date">{e.musicalStart}&nbsp;~&nbsp;{e.musicalEnd}&nbsp;&nbsp;</p>
                

                </Container>

                
            ))}
        </MusicalContainer>
        </>
    )
}
export default MusicalSearchRes;