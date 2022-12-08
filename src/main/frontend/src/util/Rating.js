import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const Rating = ( props ) => {
  // console.log("확인용 : " + props.value);

  const ARRAY = [0, 1, 2, 3, 4];

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [count, setCount] = useState("");

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    let count = clickStates.filter(Boolean).length;
    setCount(count);
  };

  // useEffect(() => {
  //   sendReview();
  // }, [clicked]); //컨디마 컨디업

  // const sendReview = () => {
  //   let count = clicked.filter(Boolean).length;
  // };

  console.log("확인용 : " + count);
  props.propFunction(count);

  return (
    <Wrap>
      <RatingText>별점</RatingText>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="30"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
      <p onChange={setCount}>{count}</p>
      
    </Wrap>
  );
}

export default Rating;

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