import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// 임시 스타일
const Container = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;

  #top {
    width: 50px;
    height: 50px;
    font-weight: bold;
    font-size: 15px;
    padding :10px 10px;
    background-color: #1b1717;
    color: #fff;
    border: 1px solid rgb(210, 204, 193);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }

  #top:hover {
    background-color: #810000;
  }
`;



const TopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth' // 위치로 부드럽게 끌어올림
    })

  }
  useEffect (() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton (true)
      } else {
        setShowButton (false)
      }
    }
    window.addEventListener ("scroll", ShowButtonClick)
    return () => {
      window.removeEventListener ("scroll", ShowButtonClick)
    }
  }, [])

  return (
    <>
      {showButton && 
        <Container>
          <button id="top" onClick={scrollToTop} type="button">Top</button>
        </Container>
      }
    </>
  )
}

export default TopButton;