import { useState, useEffect } from "react";
import styled from "styled-components";
import Review from "../review/Review";
import MusicalDetailInfo from "./MusicalDetailInfo";
import TheaterDetail from "./TheaterDetail";
import MuteApi from "../api/MuteApi";



//// 스타일드 컴포넌트 (수정중) ////
const TabMenu = styled.ul`

  display: flex;
  flex-direction: row;
  align-items: left;
  list-style: none;
  margin-top: 40px;

  .submenu {
  // 기본 Tab CSS
    display: inline-block;
    cursor: pointer;
    color: #1b1717;
    padding: 10px 30px 10px 30px;
    font-size: 15px;
  }

  .focused {
   //선택된 Tab에만 적용되는 CSS
    color: #810000;
    border: 2px solid #810000;
    border-bottom: 4px solid white;
    font-weight: bold;
    position: relative;
    padding: 10px 30px;
    font-size: 15px;
    border-radius: 10px 10px 0px 0px;
  }

  & div.desc {
    border-top: 2px solid white;
  }
`;

const Desc = styled.div`
    width: 1024px;
    padding: 50px 10px;
    border-top: 2px solid #810000;
`;


const MusicalTab = (props) => {

    const [selectTab, setSelectTab] = useState(0);

    const tabArr = [
        { 
            tabTitle: (
                <li className={selectTab === 0 ? "focused" : "submenu"}
                onClick={()=>selectTabHandler(0)}> 상세정보 </li>
            ),
            tabCont:(
                <MusicalDetailInfo/>
            )
        },
        { 
            tabTitle: (
                <li className={selectTab === 1 ? "focused" : "submenu"}
                onClick={()=>selectTabHandler(1)}> 공연장정보 </li>
            ),
            tabCont:(
                <TheaterDetail theaterId={props.theaterId}/>
            )
        },
        { 
            tabTitle: (
                <li className={selectTab === 2 ? "focused" : "submenu"}
                onClick={()=>selectTabHandler(2)}> 후기 </li>
            ),
            tabCont:(
                <Review/>
            )
        }
    ];

    const selectTabHandler = (index) => {
        setSelectTab(index);
    };

    
    return(
        <>
            <TabMenu>
                {tabArr.map((section, index) => {
                    return section.tabTitle
                })}
            </TabMenu>
            <Desc>
                {tabArr[selectTab].tabCont}
            </Desc>
        </>
    )
}

export default MusicalTab;