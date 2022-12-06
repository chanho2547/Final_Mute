import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

// 스타일 컴포넌트
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;
  & svg {
    color: gray;
    cursor: pointer;
  }
  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }
  .yellowStar {
    color: #fcc419;
  }
`;

const StarArr = [0, 1, 2, 3, 4]; // 별 5개 리턴하기 위한 배열

function Rating() {
  const [clicked, setClicked] = useState([false, false, false, false, false]); // default false

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); 

  const sendReview = () => {
    let score = clicked.filter(Boolean).length; // filter 이용하여 true값만 뽑아서 별의 개수 저장
  };

  return (
    <Wrap>
      <Stars>
        {/* 별의 index값이 el에 찍힘 */}
        {StarArr.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default Rating;

