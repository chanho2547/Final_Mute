
import { useEffect,useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";

const Container = styled.div`

    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;

`;


const MusicalContainer = styled.div`

flex-wrap: wrap;

.title {
    font-weight: 700;
    font-size: 20px;
}

img{
    width: 300px;
}
:hover{
    opacity: 0.5;
    cursor: pointer;
}
`;


const SelectMusical = (props) => {

    const [musicalInfo,setMusicalInfo] = useState();

    useEffect(() => {
        const MusicalData = async () => {
            try {
                let response = await MuteApi.musicalList(); // 뮤지컬 리스트 불러오기
                setMusicalInfo(response.data);
                
            } catch (e) {  
                console.log(e + "실패 입니다");
            }
           
        };
        MusicalData(); // 첫 페이지 로딩시 목록을 다 끌어온다

    });

    const OnClickPoster = (e) => {
        props.addMusicalId(e);
        props.propFunction(); // 상위 컴포넌트의 함수를 불러 count ++
    }

    return(
        <Container>
       
        {musicalInfo && musicalInfo.map(e => (        
            <MusicalContainer onClick={() => OnClickPoster(e.musicalName) }>
            <img alt="poster" src={e.musicalPoster}/>
            <p className="title">{e.musicalName}</p>
          
            </MusicalContainer>
        ))}
        
            
        </Container>
    );
}

export default SelectMusical;