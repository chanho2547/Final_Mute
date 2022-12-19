import { useState } from "react";
import styled from "styled-components";
import Review from "../review/Review";
import MusicalDetailInfo from "./MusicalDetailInfo";
import TheaterDetail from "./TheaterDetail";

//// 임시 스타일드 컴포넌트 ////
const TabMenu = styled.ul`

  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-top: 40px;

  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    color: #1b1717;
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    color: #810000;
    border: 2px solid #810000;
    border-bottom-width: 0px;
    font-weight: bold;
  }

  & div.desc {
    text-align: center;
    border-top-width: 0px;
  }
`;

const Desc = styled.div`
    width: 800px;
    padding: 50px;
    text-align: center;
    border-top: 2px solid #810000;
`;


const MusicalTab = () => {

    // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 nowTab 상태와 
    // nowTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
    const [nowTab, clickTab] = useState(0);

    const tabArr = [
        // { name: '상세정보', content: {MusicalDetailInfo}},
        // { name: '공연장정보', content: {TheaterDetail}},
        // { name: '후기', content: {Review}}
        { name: '상세정보', content: 'MusicalDetailInfo'},
        { name: '공연장정보', content: 'TheaterDetail'},
        { name: '후기', content: 'Review'}
    ];

    const selectTabHandler = (index) => {
        clickTab(index);
    };


    return(
        <>
            <div>
                <TabMenu>
                    {tabArr.map((e,index) => (
                        <li className={index === nowTab ? "submenu focused" : "submenu" }
                        onClick={() => selectTabHandler(index)}>{e.name}</li>
                    ))}
            {/* <MusicalDetailInfo/>
            <TheaterDetail/>
            <Review/> */}
                </TabMenu>
                <Desc>
                    {tabArr[nowTab].content}
                </Desc>
            </div>
        </>
    )
}

export default MusicalTab;