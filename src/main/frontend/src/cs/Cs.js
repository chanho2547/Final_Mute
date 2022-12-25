import React from "react";
import styled from "styled-components";

const CsBox = styled.div`
    width: 100%;
    max-width: 50%;
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;

details {
  overflow: hidden;
  background: #EEEBDD;
  border: 1.5px solid #EEEBDD;
  border-radius: 5px;
  width: 100%;
  margin: 10px;

  &,
  summary,
  .details-content{
    position: relative;
    outline: none;
  }

  summary {
    outline: none;
    z-index: 2;
    margin: 0;
    color: #810000;
    background:  #EEEBDD;
  }
  
  summary,
  .details-content {
    padding: 1rem;
    
  }
  
  .details-content {
    z-index: 1;
    margin: 0;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path .25s ease-out .125s;
  }

  &[open] {
    .details-content {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}

/* @keyframes replaceSummary {
  0% {
    top: 50%;
  }
  100% {
    top: 0;
  }
} */

/* // Resets…
* { box-sizing: border-box; }
p { margin: 0; }
p + p { margin-top: 1em; }

body {
  height: 100%;
}

body {
  display: flex;
  margin: 0;
  
  color: #810000;
  background-color: #EEEBDD;
} */

`;


const Cs = ()=> {

    
    return(
        <CsBox>
            <h3>고객센터 페이지입니다</h3>
            <p>자주하는 질문 BEST 3</p>
           
                <div>
                <details>
                    <summary>Q : 공연예매 후 좌석변경을 할 수 있나요?</summary>
                    예매 완료 후에는 좌석을 변경할 수 없습니다. <br/>
                    변경을 원하시는 경우 [마이페이지 👉예매내역] 메뉴에서 해당 예매 건을 취소하시고 재 예매하셔야 합니다.<br />
                    예매 건을 취소하는 경우 예매수수료, 취소수수료는 뮤트 수수료 정책에 따라 발생합니다.
                
                </details>
                
                <details>
                    <summary>Q : 공연이 취소되었는데 이후 처리는 어떻게 되나요?</summary>
                    주최측의 사유로 공연이 취소될 경우, 결제하신 전체 금액을 환불해드리게 됩니다.
                </details>
                
                   
                <details>
                    <summary>Q : 티켓 취소를 하려면 어떻게 해야 하나요?</summary>
                    마이티켓 👉 예매확인/취소 메뉴를 통해 취소를 진행하실 수 있습니다. <br/>
                    콜센터를 통해 예매를 진행하신 경우, 콜센터(1234-5678)로 문의하시면 상담원을 통해 취소하실 수 있습니다.
                </details>
            </div>
        </CsBox>
    )
};
export default Cs;