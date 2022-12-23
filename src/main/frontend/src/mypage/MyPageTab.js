import React, {useState} from "react";
import MyWish from "../util/MyWish";
import styled from "styled-components";
import MyMuReview from "../review/MyMuReview";

const Desc = styled.div`
    padding: 50px 10px;
    border-top: 2px solid #810000;
`;

const TabMenu = styled.ul`

    width: 1024px;
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
    padding: 10px 30px;
  }

  .focused {
   //선택된 Tab에만 적용되는 CSS
    color: #810000;
    border: 2px solid #810000;
    border-bottom: 2px solid white;
    margin-bottom: -2px;
    font-weight: bold;
    position: relative;
    padding: 10px 30px;
    border-radius: 10px 10px 0px 0px;
  }
/* 
  & div.desc {
    border-top: 2px solid white;
  } */
`;


const MyPageTab = () => {

    const [selectTab, setSelectTab] = useState(0);

    const tabArr = [
        {
            tabTitle: (
                <li className={selectTab === 0 ? "focused" : "submenu"}
                    onClick={()=>selectTabHandler(0)}> 예매내역 </li>
            ),
            tabCont:(
                <></> // 여기에 예매내역 컴포넌트페이지 임포트 해주시면 됩니당
            )
        },
        {
            tabTitle: (
                <li className={selectTab === 1 ? "focused" : "submenu"}
                    onClick={()=>selectTabHandler(1)}> 내가 쓴 후기</li>
            ),
            tabCont:(
                <MyMuReview/>
            )
        },
        {
            tabTitle: (
                <li className={selectTab === 2 ? "focused" : "submenu"}
                    onClick={()=>selectTabHandler(2)}> 찜한 뮤지컬 </li>
            ),
            tabCont:(
                <MyWish/>
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
export default MyPageTab;