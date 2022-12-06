import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import { ReactDOM, useEffect } from "react";
import { Link } from "react-router-dom";

import '../seats.css';


function prevAll(element) { // element 이전의 모든 형제노드의 갯수를 구하는 함수
    let result = []; //빈 배열을 만들어서 앞에있는 모든 형제노드를 넣어줄 예정 
    
        while (element = element.previousElementSibling){ // 이전의 모든 형제노드를 구하는 previousElementSibling  
            result.push(element);
        }
           
    return result.length + 1; // 충무는 샤롯데랑 다르게 앞에 구역태그 (A,B,C)가 없어서 1을 더해야 맞다 
}

const onClickSeat = (event) => {

    let pkNum = event.currentTarget.getAttribute("pk");
    let grade = event.currentTarget.getAttribute("class");
    let seatNum = event.currentTarget.innerText; // 현재 currentTarget의 innerText (태그 안의 텍스트)를 불러온다
    
    if(grade === "real purple") { grade = "VIP"}
    else if (grade === "real lightgreen") {grade = "R"}
    else if (grade === "real skyblue") {grade = "S"}
    else {grade = "A"}

    // 코드를 잘 보면, 부모자식 관계의 className을 보면 row > seats > seat 이다
    // 내가 지금 몇번째 row인지 확인하려고 이전의 row의 갯수를 세는 (이전 모든 형제노드 갯수) 함수를 만들어 놓았으니
    // row 까지 두번 올라간 후 형제노드를 찾아야 한다
    // parentNode를 두번 사용해 두번 올라간다 
    let parentNode = prevAll(event.currentTarget.parentNode.parentNode);
    let floor = window.localStorage.getItem("floor");
    alert(floor + "층 "+parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + pkNum + "\n등급 : " + grade);
    console.log(parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + pkNum);
}


const ThirdFloorChung = () => {

    useEffect(() => {
        window.localStorage.setItem("floor",3);
        let seatInfoMode = window.localStorage.getItem("seatInfoMode");
        console.log("seatInfoMode : " + seatInfoMode)
        if(seatInfoMode === "예매") {
         
            
             for(let i = 10540 ; i <= 10823 ; i++) {
                if(i>=10620 && i<=  10743){    
                    try{
                        document.getElementById(i).parentNode.setAttribute('class','real skyblue');
                        console.log(i);
                    } catch{
                        
                    }
                }

                else {    //  A
                    try{
                        document.getElementById(i).parentNode.setAttribute('class','real orange');
                        console.log(i);
                    } catch{}
                }
                

             }
             



        } else {

        }
    
        //document.getElementById('8452').parentNode.setAttribute('class','real red');
    })
    return (
        <>
        
        <h1>충무아트 ThirdFloor 입장 성공</h1>
        
        <div className="grid-containder modal-background" id="modal-background">  
        </div>


        <div className="floor">

        
        <div className="seating_table_container">
            
            <div className="seattable_floor">3층</div>
            
        </div>        
        
        
        <div className="floor_container">
    
            
            <div id="chungmu_grand" className="AA3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10540">
                                    <p id="10540" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10541">
                                    <p id="10541" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10542">
                                    <p id="10542" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10543">
                                    <p id="10543" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10544">
                                    <p id="10544" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10545">
                                    <p id="10545" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10546">
                                    <p id="10546" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10547">
                                    <p id="10547" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10548">
                                    <p id="10548" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10549">
                                    <p id="10549" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10550">
                                    <p id="10550" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10551">
                                    <p id="10551" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10552">
                                    <p id="10552" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10553">
                                    <p id="10553" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10554">
                                    <p id="10554" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10555">
                                    <p id="10555" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10556">
                                    <p id="10556" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10557">
                                    <p id="10557" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10558">
                                    <p id="10558" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10559">
                                    <p id="10559" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10560">
                                    <p id="10560" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10561">
                                    <p id="10561" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10562">
                                    <p id="10562" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10563">
                                    <p id="10563" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10564">
                                    <p id="10564" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10565">
                                    <p id="10565" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10566">
                                    <p id="10566" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10567">
                                    <p id="10567" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10568">
                                    <p id="10568" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10569">
                                    <p id="10569" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10570">
                                    <p id="10570" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10571">
                                    <p id="10571" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10572">
                                    <p id="10572" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10573">
                                    <p id="10573" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10574">
                                    <p id="10574" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10575">
                                    <p id="10575" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10576">
                                    <p id="10576" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10577">
                                    <p id="10577" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10578">
                                    <p id="10578" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10579">
                                    <p id="10579" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10580">
                                    <p id="10580" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10581">
                                    <p id="10581" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10582">
                                    <p id="10582" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10583">
                                    <p id="10583" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10584">
                                    <p id="10584" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10585">
                                    <p id="10585" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10586">
                                    <p id="10586" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10587">
                                    <p id="10587" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10588">
                                    <p id="10588" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10589">
                                    <p id="10589" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10590">
                                    <p id="10590" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10591">
                                    <p id="10591" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10592">
                                    <p id="10592" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10593">
                                    <p id="10593" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10594">
                                    <p id="10594" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10595">
                                    <p id="10595" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10596">
                                    <p id="10596" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10597">
                                    <p id="10597" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10598">
                                    <p id="10598" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10599">
                                    <p id="10599" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10600">
                                    <p id="10600" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10601">
                                    <p id="10601" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10602">
                                    <p id="10602" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10603">
                                    <p id="10603" >2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10604">
                                    <p id="10604" >3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10605">
                                    <p id="10605" >4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10606">
                                    <p id="10606" >5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10607">
                                    <p id="10607" >6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10608">
                                    <p id="10608" >7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10609">
                                    <p id="10609" >8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10610">
                                    <p id="10610" >9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10611">
                                    <p id="10611" >10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="AB3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    1
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    2
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    3
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    4
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    5
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    6
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    7
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    8
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="BB3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10620">
                                    <p id="10620" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10621">
                                    <p id="10621" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10622">
                                    <p id="10622" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10623">
                                    <p id="10623" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10624">
                                    <p id="10624" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10625">
                                    <p id="10625" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10626">
                                    <p id="10626" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10627">
                                    <p id="10627" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10628">
                                    <p id="10628" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10629">
                                    <p id="10629" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10630">
                                    <p id="10630" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10631">
                                    <p id="10631" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10632">
                                    <p id="10632" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10633">
                                    <p id="10633" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10634">
                                    <p id="10634" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10635">
                                    <p id="10635" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10636">
                                    <p id="10636" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10637">
                                    <p id="10637" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10638">
                                    <p id="10638" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10639">
                                    <p id="10639" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10640">
                                    <p id="10640" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10641">
                                    <p id="10641" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10642">
                                    <p id="10642" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10643">
                                    <p id="10643" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10644">
                                    <p id="10644" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10645">
                                    <p id="10645" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10646">
                                    <p id="10646" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10647">
                                    <p id="10647" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10648">
                                    <p id="10648" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10649">
                                    <p id="10649" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10650">
                                    <p id="10650" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10651">
                                    <p id="10651" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10652">
                                    <p id="10652" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10653">
                                    <p id="10653" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10654">
                                    <p id="10654" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10655">
                                    <p id="10655" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10656">
                                    <p id="10656" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10657">
                                    <p id="10657" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10658">
                                    <p id="10658" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10659">
                                    <p id="10659" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10660">
                                    <p id="10660" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10661">
                                    <p id="10661" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10662">
                                    <p id="10662" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10663">
                                    <p id="10663" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10664">
                                    <p id="10664" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10665">
                                    <p id="10665" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10666">
                                    <p id="10666" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10667">
                                    <p id="10667" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10668">
                                    <p id="10668" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10669">
                                    <p id="10669" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10670">
                                    <p id="10670" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10671">
                                    <p id="10671" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10672">
                                    <p id="10672" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10673">
                                    <p id="10673" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10674">
                                    <p id="10674" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10675">
                                    <p id="10675" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10676">
                                    <p id="10676" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10677">
                                    <p id="10677" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10678">
                                    <p id="10678" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10679">
                                    <p id="10679" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10680">
                                    <p id="10680" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10681">
                                    <p id="10681" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10682">
                                    <p id="10682" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10683">
                                    <p id="10683" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10684">
                                    <p id="10684" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10685">
                                    <p id="10685" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10686">
                                    <p id="10686" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10687">
                                    <p id="10687" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10688">
                                    <p id="10688" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10689">
                                    <p id="10689" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10690">
                                    <p id="10690" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10691">
                                    <p id="10691" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10692">
                                    <p id="10692" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10693">
                                    <p id="10693" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10694">
                                    <p id="10694" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10695">
                                    <p id="10695" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10696">
                                    <p id="10696" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10697">
                                    <p id="10697" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10698">
                                    <p id="10698" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10699">
                                    <p id="10699" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10700">
                                    <p id="10700" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10701">
                                    <p id="10701" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10702">
                                    <p id="10702" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10703">
                                    <p id="10703" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10704">
                                    <p id="10704" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10705">
                                    <p id="10705" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10706">
                                    <p id="10706" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10707">
                                    <p id="10707" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10708">
                                    <p id="10708" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10709">
                                    <p id="10709" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10710">
                                    <p id="10710" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10711">
                                    <p id="10711" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10712">
                                    <p id="10712" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10713">
                                    <p id="10713" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10714">
                                    <p id="10714" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10715">
                                    <p id="10715" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10716">
                                    <p id="10716" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10717">
                                    <p id="10717" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10718">
                                    <p id="10718" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10719">
                                    <p id="10719" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10720">
                                    <p id="10720" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10721">
                                    <p id="10721" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10722">
                                    <p id="10722" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10723">
                                    <p id="10723" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10724">
                                    <p id="10724" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10725">
                                    <p id="10725" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10726">
                                    <p id="10726" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10727">
                                    <p id="10727" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10728">
                                    <p id="10728" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10729">
                                    <p id="10729" >11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10730">
                                    <p id="10730" >12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10731">
                                    <p id="10731" >13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10732">
                                    <p id="10732" >14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10733">
                                    <p id="10733" >15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10734">
                                    <p id="10734" >16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10735">
                                    <p id="10735" >17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10736">
                                    <p id="10736" >18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10737">
                                    <p id="10737" >19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10738">
                                    <p id="10738" >20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10739">
                                    <p id="10739" >21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10740">
                                    <p id="10740" >22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10741">
                                    <p id="10741" >23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10742">
                                    <p id="10742" >24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10743">
                                    <p id="10743" >25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="BC3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    1
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    2
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    3
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    4
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    5
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    6
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    7
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    8
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="CC3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10752">
                                    <p id="10752" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10753">
                                    <p id="10753" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10754">
                                    <p id="10754" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10755">
                                    <p id="10755" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10756">
                                    <p id="10756" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10757">
                                    <p id="10757" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10758">
                                    <p id="10758" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10759">
                                    <p id="10759" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10760">
                                    <p id="10760" >35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10761">
                                    <p id="10761" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10762">
                                    <p id="10762" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10763">
                                    <p id="10763" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10764">
                                    <p id="10764" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10765">
                                    <p id="10765" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10766">
                                    <p id="10766" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10767">
                                    <p id="10767" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10768">
                                    <p id="10768" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10769">
                                    <p id="10769" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10770">
                                    <p id="10770" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10771">
                                    <p id="10771" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10772">
                                    <p id="10772" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10773">
                                    <p id="10773" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10774">
                                    <p id="10774" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10775">
                                    <p id="10775" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10776">
                                    <p id="10776" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10777">
                                    <p id="10777" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10778">
                                    <p id="10778" >35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10779">
                                    <p id="10779" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10780">
                                    <p id="10780" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10781">
                                    <p id="10781" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10782">
                                    <p id="10782" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10783">
                                    <p id="10783" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10784">
                                    <p id="10784" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10785">
                                    <p id="10785" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10786">
                                    <p id="10786" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10787">
                                    <p id="10787" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10788">
                                    <p id="10788" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10789">
                                    <p id="10789" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10790">
                                    <p id="10790" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10791">
                                    <p id="10791" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10792">
                                    <p id="10792" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10793">
                                    <p id="10793" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10794">
                                    <p id="10794" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10795">
                                    <p id="10795" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10796">
                                    <p id="10796" >35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10797">
                                    <p id="10797" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10798">
                                    <p id="10798" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10799">
                                    <p id="10799" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10800">
                                    <p id="10800" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10801">
                                    <p id="10801" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10802">
                                    <p id="10802" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10803">
                                    <p id="10803" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10804">
                                    <p id="10804" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10805">
                                    <p id="10805" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10806">
                                    <p id="10806" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10807">
                                    <p id="10807" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10808">
                                    <p id="10808" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10809">
                                    <p id="10809" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10810">
                                    <p id="10810" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10811">
                                    <p id="10811" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10812">
                                    <p id="10812" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10813">
                                    <p id="10813" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10814">
                                    <p id="10814" >35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10815">
                                    <p id="10815" >26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10816">
                                    <p id="10816" >27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10817">
                                    <p id="10817" >28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10818">
                                    <p id="10818" >29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10819">
                                    <p id="10819" >30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10820">
                                    <p id="10820" >31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10821">
                                    <p id="10821" >32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10822">
                                    <p id="10822" >33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10823">
                                    <p id="10823" >34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
                

        </div>
    </div>
    
        </>
    );
}

export default ThirdFloorChung;