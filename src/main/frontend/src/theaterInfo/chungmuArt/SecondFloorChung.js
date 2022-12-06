import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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

    // 코드를 잘 보면, 부모자식 관계의 className을 보면 row > seats > seat 이다
    // 내가 지금 몇번째 row인지 확인하려고 이전의 row의 갯수를 세는 (이전 모든 형제노드 갯수) 함수를 만들어 놓았으니
    // row 까지 두번 올라간 후 형제노드를 찾아야 한다
    // parentNode를 두번 사용해 두번 올라간다 
    let parentNode = prevAll(event.currentTarget.parentNode.parentNode);
    let floor = window.localStorage.getItem("floor");
    alert(floor + "층 "+parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + pkNum + "\n등급 : " + grade);
    console.log(parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + pkNum);
}

const SecondFloorChung = () => {

    useEffect(() => {
        window.localStorage.setItem("floor",2);
        let seatInfoMode = window.localStorage.getItem("seatInfoMode");
        console.log("seatInfoMode : " + seatInfoMode)
        if(seatInfoMode === "예매") {
         
            
             for(let i = 10243 ; i <= 10539 ; i++) {
                console.log("입장");
                if(i>=10317 && i<=  10467){    // R
                    try{
                        document.getElementById(i).parentNode.setAttribute('class','real lightgreen');
                        console.log(i);
                    } catch{
                        
                    }
                }

                else {    //  S
                    try{
                        document.getElementById(i).parentNode.setAttribute('class','real skyblue');
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
        
        <h1>충무아트 SecondFloor 입장 성공</h1>
        
        <div className="grid-containder modal-background" id="modal-background">  
        </div>


        <div className="floor">

        
        <div className="seating_table_container">
            
            <div className="seattable_floor">2층</div>
            
        </div>        
        
        
        <div className="floor_container">


            
            <div id="chungmu_grand" className="AA2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10243">
                                    <p id="10243" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10244">
                                    <p id="10244" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10245">
                                    <p id="10245" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10246">
                                    <p id="10246" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10247">
                                    <p id="10247" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10248">
                                    <p id="10248" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10249">
                                    <p id="10249" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10250">
                                    <p id="10250" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10251">
                                    <p id="10251" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10252">
                                    <p id="10252" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10253">
                                    <p id="10253" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10254">
                                    <p id="10254" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10255">
                                    <p id="10255" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10256">
                                    <p id="10256" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10257">
                                    <p id="10257" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10258">
                                    <p id="10258" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10259">
                                    <p id="10259" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10260">
                                    <p id="10260" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10261">
                                    <p id="10261" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10262">
                                    <p id="10262" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10263">
                                    <p id="10263" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10264">
                                    <p id="10264" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10265">
                                    <p id="10265" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10266">
                                    <p id="10266" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10267">
                                    <p id="10267" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10268">
                                    <p id="10268" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10269">
                                    <p id="10269" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10270">
                                    <p id="10270" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10271">
                                    <p id="10271" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10272">
                                    <p id="10272" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10273">
                                    <p id="10273" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10274">
                                    <p id="10274" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10275">
                                    <p id="10275" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10276">
                                    <p id="10276" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10277">
                                    <p id="10277" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10278">
                                    <p id="10278" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10279">
                                    <p id="10279" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10280">
                                    <p id="10280" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10281">
                                    <p id="10281" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10282">
                                    <p id="10282" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10283">
                                    <p id="10283" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10284">
                                    <p id="10284" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10285">
                                    <p id="10285" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10286">
                                    <p id="10286" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10287">
                                    <p id="10287" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10288">
                                    <p id="10288" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10289">
                                    <p id="10289" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10290">
                                    <p id="10290" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10291">
                                    <p id="10291" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10292">
                                    <p id="10292" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10293">
                                    <p id="10293" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10294">
                                    <p id="10294" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10295">
                                    <p id="10295" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10296">
                                    <p id="10296" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10302">
                                    <p id="10302" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10303">
                                    <p id="10303" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10304">
                                    <p id="10304" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10305">
                                    <p id="10305" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="AB2">

    
                
                
    
                
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
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    9
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    10
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    11
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="BB2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10317">
                                    <p id="10317" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10318">
                                    <p id="10318" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10319">
                                    <p id="10319" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10320">
                                    <p id="10320" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10321">
                                    <p id="10321" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10322">
                                    <p id="10322" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10323">
                                    <p id="10323" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10324">
                                    <p id="10324" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10325">
                                    <p id="10325" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10326">
                                    <p id="10326" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10327">
                                    <p id="10327" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10328">
                                    <p id="10328" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10329">
                                    <p id="10329" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10330">
                                    <p id="10330" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10331">
                                    <p id="10331" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10332">
                                    <p id="10332" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10333">
                                    <p id="10333" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10334">
                                    <p id="10334" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10335">
                                    <p id="10335" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10336">
                                    <p id="10336" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10337">
                                    <p id="10337" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10338">
                                    <p id="10338" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10339">
                                    <p id="10339" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10340">
                                    <p id="10340" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10341">
                                    <p id="10341" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10342">
                                    <p id="10342" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10343">
                                    <p id="10343" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10344">
                                    <p id="10344" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10345">
                                    <p id="10345" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10346">
                                    <p id="10346" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10347">
                                    <p id="10347" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10348">
                                    <p id="10348" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10349">
                                    <p id="10349" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10350">
                                    <p id="10350" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10351">
                                    <p id="10351" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10352">
                                    <p id="10352" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10353">
                                    <p id="10353" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10354">
                                    <p id="10354" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10355">
                                    <p id="10355" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10356">
                                    <p id="10356" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10357">
                                    <p id="10357" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10358">
                                    <p id="10358" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10359">
                                    <p id="10359" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10360">
                                    <p id="10360" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10361">
                                    <p id="10361" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10362">
                                    <p id="10362" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10363">
                                    <p id="10363" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10364">
                                    <p id="10364" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10365">
                                    <p id="10365" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10366">
                                    <p id="10366" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10367">
                                    <p id="10367" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10368">
                                    <p id="10368" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10369">
                                    <p id="10369" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10370">
                                    <p id="10370" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10371">
                                    <p id="10371" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10372">
                                    <p id="10372" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10373">
                                    <p id="10373" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10374">
                                    <p id="10374" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10375">
                                    <p id="10375" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10376">
                                    <p id="10376" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10377">
                                    <p id="10377" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10378">
                                    <p id="10378" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10379">
                                    <p id="10379" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10380">
                                    <p id="10380" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10381">
                                    <p id="10381" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10382">
                                    <p id="10382" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10383">
                                    <p id="10383" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10384">
                                    <p id="10384" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10385">
                                    <p id="10385" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10386">
                                    <p id="10386" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10387">
                                    <p id="10387" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10388">
                                    <p id="10388" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10389">
                                    <p id="10389" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10390">
                                    <p id="10390" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10391">
                                    <p id="10391" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10392">
                                    <p id="10392" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10393">
                                    <p id="10393" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10394">
                                    <p id="10394" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10395">
                                    <p id="10395" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10396">
                                    <p id="10396" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10397">
                                    <p id="10397" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10398">
                                    <p id="10398" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10399">
                                    <p id="10399" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10400">
                                    <p id="10400" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10401">
                                    <p id="10401" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10402">
                                    <p id="10402" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10403">
                                    <p id="10403" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10404">
                                    <p id="10404" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10405">
                                    <p id="10405" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10406">
                                    <p id="10406" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10407">
                                    <p id="10407" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10408">
                                    <p id="10408" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10409">
                                    <p id="10409" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10410">
                                    <p id="10410" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10411">
                                    <p id="10411" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10412">
                                    <p id="10412" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10413">
                                    <p id="10413" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10414">
                                    <p id="10414" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10415">
                                    <p id="10415" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10416">
                                    <p id="10416" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10417">
                                    <p id="10417" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10418">
                                    <p id="10418" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10419">
                                    <p id="10419" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10420">
                                    <p id="10420" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10421">
                                    <p id="10421" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10422">
                                    <p id="10422" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10423">
                                    <p id="10423" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10424">
                                    <p id="10424" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10425">
                                    <p id="10425" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10426">
                                    <p id="10426" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10427">
                                    <p id="10427" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10428">
                                    <p id="10428" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10429">
                                    <p id="10429" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10430">
                                    <p id="10430" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10431">
                                    <p id="10431" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10432">
                                    <p id="10432" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10433">
                                    <p id="10433" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10434">
                                    <p id="10434" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10435">
                                    <p id="10435" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10436">
                                    <p id="10436" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10438">
                                    <p id="10438" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10439">
                                    <p id="10439" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10440">
                                    <p id="10440" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10441">
                                    <p id="10441" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10442">
                                    <p id="10442" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10443">
                                    <p id="10443" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10444">
                                    <p id="10444" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10445">
                                    <p id="10445" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10446">
                                    <p id="10446" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10447">
                                    <p id="10447" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10448">
                                    <p id="10448" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10449">
                                    <p id="10449" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10450">
                                    <p id="10450" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10451">
                                    <p id="10451" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10452">
                                    <p id="10452" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10453">
                                    <p id="10453" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10454">
                                    <p id="10454" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10455">
                                    <p id="10455" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10456">
                                    <p id="10456" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10457">
                                    <p id="10457" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10458">
                                    <p id="10458" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10459">
                                    <p id="10459" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10460">
                                    <p id="10460" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10461">
                                    <p id="10461" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10462">
                                    <p id="10462" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10463">
                                    <p id="10463" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10464">
                                    <p id="10464" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10465">
                                    <p id="10465" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10466">
                                    <p id="10466" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10467">
                                    <p id="10467" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="BC2">

    
                
                
    
                
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
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    9
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    10
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    11
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="CC2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10479">
                                    <p id="10479" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10480">
                                    <p id="10480" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10481">
                                    <p id="10481" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10482">
                                    <p id="10482" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10483">
                                    <p id="10483" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10484">
                                    <p id="10484" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10485">
                                    <p id="10485" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10486">
                                    <p id="10486" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10487">
                                    <p id="10487" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10488">
                                    <p id="10488" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10489">
                                    <p id="10489" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10490">
                                    <p id="10490" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10491">
                                    <p id="10491" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10492">
                                    <p id="10492" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10493">
                                    <p id="10493" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10494">
                                    <p id="10494" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10495">
                                    <p id="10495" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10496">
                                    <p id="10496" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10497">
                                    <p id="10497" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10498">
                                    <p id="10498" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10499">
                                    <p id="10499" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10500">
                                    <p id="10500" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10501">
                                    <p id="10501" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10502">
                                    <p id="10502" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10503">
                                    <p id="10503" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10504">
                                    <p id="10504" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10505">
                                    <p id="10505" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10506">
                                    <p id="10506" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10507">
                                    <p id="10507" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10508">
                                    <p id="10508" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10509">
                                    <p id="10509" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10510">
                                    <p id="10510" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10511">
                                    <p id="10511" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10512">
                                    <p id="10512" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10513">
                                    <p id="10513" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10514">
                                    <p id="10514" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10515">
                                    <p id="10515" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10516">
                                    <p id="10516" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10517">
                                    <p id="10517" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10518">
                                    <p id="10518" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10519">
                                    <p id="10519" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10520">
                                    <p id="10520" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10521">
                                    <p id="10521" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10522">
                                    <p id="10522" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10523">
                                    <p id="10523" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10524">
                                    <p id="10524" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10525">
                                    <p id="10525" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10526">
                                    <p id="10526" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10527">
                                    <p id="10527" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10528">
                                    <p id="10528" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10529">
                                    <p id="10529" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10530">
                                    <p id="10530" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10531">
                                    <p id="10531" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10532">
                                    <p id="10532" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10534">
                                     <p id="10534" >1</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10535">
                                     <p id="10535" >2</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10536">
                                     <p id="10536" >3</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10537">
                                     <p id="10537" >4</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10538">
                                     <p id="10538" >5</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10539">
                                     <p id="10539" >6</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            


        </div>
    </div>
    
        </>
    );
}

export default SecondFloorChung;