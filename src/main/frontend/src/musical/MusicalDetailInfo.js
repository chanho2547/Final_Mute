import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;

const MusicalDetailInfo = () => {

    const [musicalDetail,setMusicalDetail] = useState();
    const musicalId = window.localStorage.getItem("musicalId"); // 선택한 musicalId

    useEffect(() => {
        const MusicalData = async () => {
            try {
                const response = await MuteApi.musicalDetail(musicalId);
                setMusicalDetail(response.data);
            } catch (e) {  
                console.log(e + "실패");
            }     
        };
        MusicalData();
    }, []);

    return(
        <Container>
            {musicalDetail && musicalDetail.map(e => (
                <div>
                    <img alt="descImg1" src={e.musicalDescImg1}/>
                    <img alt="" src={e.musicalDescImg2}/>
                </div>
            ))}
        </Container>
    )
}

export default MusicalDetailInfo;