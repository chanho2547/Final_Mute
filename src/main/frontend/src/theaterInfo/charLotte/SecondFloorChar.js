import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../seats.css';


function prevAll(element) { // element 이전의 모든 형제노드의 갯수를 구하는 함수
    let result = []; //빈 배열을 만들어서 앞에있는 모든 형제노드를 넣어줄 예정 
    let final_result = 0;
        while (element = element.previousElementSibling){ // 이전의 모든 형제노드를 구하는 previousElementSibling  
            result.push(element);
        }

    final_result = result.length

    if(final_result >= 10) final_result = final_result - 2; // 2층 좌석은 중간에 2칸이 빈데가 있어서, 8열부터는 2를 빼야 계산이 맞다
           
    return final_result; 
}

const onClickSeat = (event) => {

    let pkNum = event.currentTarget.getAttribute("pk");
    let grade = event.currentTarget.getAttribute("class");
    let seatNum = event.currentTarget.innerText; // 현재 currentTarget의 innerText (태그 안의 텍스트)를 불러온다
    
    if(grade === "real skyblue") { grade = "S"}
    else if (grade === "real orange") {grade = "A"}

    // 코드를 잘 보면, 부모자식 관계의 className을 보면 row > seats > seat 이다
    // 내가 지금 몇번째 row인지 확인하려고 이전의 row의 갯수를 세는 (이전 모든 형제노드 갯수) 함수를 만들어 놓았으니
    // row 까지 두번 올라간 후 형제노드를 찾아야 한다
    // parentNode를 두번 사용해 두번 올라간다 
    let parentNode = prevAll(event.currentTarget.parentNode.parentNode);
    let floor = window.localStorage.getItem("floor");
    alert(floor + "층 "+parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + pkNum + "\n등급 : " + grade);
    console.log(parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + pkNum);
}


const SecondFloorChar = () => {

    useEffect(() => {
        window.localStorage.setItem("floor",2);
        let seatInfoMode = window.localStorage.getItem("seatInfoMode");
        console.log("seatInfoMode : " + seatInfoMode)
        if(seatInfoMode === "예매") {
         
            
             for(let i = 8956 ; i <= 9508 ; i++) {
                console.log("입장");
                if((i>=8956 && i<=  9051) || (i>=9156 && i<=9438)){    // VIP좌석
                    try{
                        document.getElementById(i).parentNode.setAttribute('class','real skyblue');
                        console.log(i);
                    } catch{
                        
                    }
                }

                else {    //  R 좌석
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
        
        <h1>샤롯데 SecondFloor 입장 성공</h1>
       
        <div className="grid-containder modal-background" id="modal-background">  
        </div>


        <div className="floor">

        
        <div className="seating_table_container">
            
            <div className="seattable_floor">2층</div>
            
        </div>        
        
        
        <div className="floor_container">


            
            <div id="charlottetheater" className="A1A2">

    
                
                <div className="seattable_zone_container">
                    
                    <div id="seattable_zone">A</div>
                    
                </div>
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8956">
                                    <p id="8956" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8957">
                                    <p id="8957" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8958">
                                    <p id="8958" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8959">
                                    <p id="8959" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8960">
                                    <p id="8960" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8961">
                                    <p id="8961" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8962">
                                    <p id="8962" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8963">
                                    <p id="8963" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8964">
                                    <p id="8964" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8965">
                                    <p id="8965" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8966">
                                    <p id="8966" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8967">
                                    <p id="8967" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8968">
                                    <p id="8968" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8969">
                                    <p id="8969" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8970">
                                    <p id="8970" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8971">
                                    <p id="8971" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8972">
                                    <p id="8972" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8973">
                                    <p id="8973" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8974">
                                    <p id="8974" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8975">
                                    <p id="8975" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8976">
                                    <p id="8976" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8977">
                                    <p id="8977" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8978">
                                    <p id="8978" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8979">
                                    <p id="8979" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8980">
                                    <p id="8980" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8981">
                                    <p id="8981" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8982">
                                    <p id="8982" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8983">
                                    <p id="8983" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8984">
                                    <p id="8984" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8985">
                                    <p id="8985" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8986">
                                    <p id="8986" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8987">
                                    <p id="8987" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8988">
                                    <p id="8988" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8989">
                                    <p id="8989" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8990">
                                    <p id="8990" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8991">
                                    <p id="8991" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8992">
                                    <p id="8992" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8993">
                                    <p id="8993" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8994">
                                    <p id="8994" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8995">
                                    <p id="8995" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8996">
                                    <p id="8996" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8997">
                                    <p id="8997" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8998">
                                    <p id="8998" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="8999">
                                    <p id="8999" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9000">
                                    <p id="9000" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9001">
                                    <p id="9001" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9002">
                                    <p id="9002" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9003">
                                    <p id="9003" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9004">
                                    <p id="9004" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9005">
                                    <p id="9005" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9006">
                                    <p id="9006" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9007">
                                    <p id="9007" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9008">
                                    <p id="9008" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9009">
                                    <p id="9009" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9010">
                                    <p id="9010" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9011">
                                    <p id="9011" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9012">
                                    <p id="9012" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9013">
                                    <p id="9013" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9014">
                                    <p id="9014" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9015">
                                    <p id="9015" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9016">
                                    <p id="9016" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9017">
                                    <p id="9017" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9018">
                                    <p id="9018" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9019">
                                    <p id="9019" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9020">
                                    <p id="9020" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9021">
                                    <p id="9021" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9022">
                                    <p id="9022" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9023">
                                    <p id="9023" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9024">
                                    <p id="9024" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9025">
                                    <p id="9025" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9026">
                                    <p id="9026" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9027">
                                    <p id="9027" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9028">
                                    <p id="9028" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9029">
                                    <p id="9029" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9030">
                                    <p id="9030" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9031">
                                    <p id="9031" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9032">
                                    <p id="9032" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9033">
                                    <p id="9033" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9034">
                                    <p id="9034" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9035">
                                    <p id="9035" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9036">
                                    <p id="9036" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9037">
                                    <p id="9037" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9038">
                                    <p id="9038" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9039">
                                    <p id="9039" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9040">
                                    <p id="9040" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9041">
                                    <p id="9041" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9042">
                                    <p id="9042" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9043">
                                    <p id="9043" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9044">
                                    <p id="9044" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9045">
                                    <p id="9045" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9046">
                                    <p id="9046" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9047">
                                    <p id="9047" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9048">
                                    <p id="9048" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9049">
                                    <p id="9049" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9050">
                                    <p id="9050" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9051">
                                    <p id="9051" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9052">
                                    <p id="9052" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9053">
                                    <p id="9053" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9054">
                                    <p id="9054" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9055">
                                    <p id="9055" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9056">
                                    <p id="9056" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9057">
                                    <p id="9057" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9058">
                                    <p id="9058" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9059">
                                    <p id="9059" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9060">
                                    <p id="9060" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9061">
                                    <p id="9061" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9062">
                                    <p id="9062" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9063">
                                    <p id="9063" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9064">
                                    <p id="9064" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9065">
                                    <p id="9065" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9066">
                                    <p id="9066" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9067">
                                    <p id="9067" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9068">
                                    <p id="9068" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9069">
                                    <p id="9069" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9070">
                                    <p id="9070" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9071">
                                    <p id="9071" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9072">
                                    <p id="9072" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9073">
                                    <p id="9073" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9074">
                                    <p id="9074" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9075">
                                    <p id="9075" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9076">
                                    <p id="9076" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9077">
                                    <p id="9077" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9078">
                                    <p id="9078" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9079">
                                    <p id="9079" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9080">
                                    <p id="9080" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9081">
                                    <p id="9081" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9082">
                                    <p id="9082" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9083">
                                    <p id="9083" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9084">
                                    <p id="9084" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9085">
                                    <p id="9085" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9086">
                                    <p id="9086" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9087">
                                    <p id="9087" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9088">
                                    <p id="9088" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9089">
                                    <p id="9089" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9090">
                                    <p id="9090" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9091">
                                    <p id="9091" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9092">
                                    <p id="9092" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9093">
                                    <p id="9093" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9094">
                                    <p id="9094" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9095">
                                    <p id="9095" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9096">
                                    <p id="9096" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9097">
                                    <p id="9097" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9098">
                                    <p id="9098" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9099">
                                    <p id="9099" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9100">
                                    <p id="9100" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9101">
                                    <p id="9101" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9102">
                                    <p id="9102" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9103">
                                    <p id="9103" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9104">
                                    <p id="9104" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9105">
                                    <p id="9105" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9106">
                                    <p id="9106" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9107">
                                    <p id="9107" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9108">
                                    <p id="9108" >1</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9109">
                                    <p id="9109" >2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9110">
                                    <p id="9110" >3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9111">
                                    <p id="9111" >4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9112">
                                    <p id="9112" >5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9113">
                                    <p id="9113" >6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9114">
                                    <p id="9114" >7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9115">
                                    <p id="9115" >8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9116">
                                    <p id="9116" >9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9117">
                                    <p id="9117" >10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9118">
                                    <p id="9118" >11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9119">
                                    <p id="9119" >12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9120">
                                    <p id="9120" >13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9121">
                                    <p id="9121" >14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="charlottetheater" className="AA2">

    
                
                
    
                
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

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

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
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    12
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="charlottetheater" className="B1B2">

    
                
                <div className="seattable_zone_container">
                    
                    <div id="seattable_zone">B</div>
                    
                </div>
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9156">
                                    <p id="9156" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9157">
                                    <p id="9157" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9158">
                                    <p id="9158" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9159">
                                    <p id="9159" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9160">
                                    <p id="9160" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9161">
                                    <p id="9161" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9162">
                                    <p id="9162" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9163">
                                    <p id="9163" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9164">
                                    <p id="9164" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9165">
                                    <p id="9165" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9166">
                                    <p id="9166" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9167">
                                    <p id="9167" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9168">
                                    <p id="9168" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9169">
                                    <p id="9169" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9170">
                                    <p id="9170" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9171">
                                    <p id="9171" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9172">
                                    <p id="9172" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9173">
                                    <p id="9173" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9174">
                                    <p id="9174" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9175">
                                    <p id="9175" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9176">
                                    <p id="9176" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9177">
                                    <p id="9177" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9178">
                                    <p id="9178" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9179">
                                    <p id="9179" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9180">
                                    <p id="9180" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9181">
                                    <p id="9181" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9182">
                                    <p id="9182" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9183">
                                    <p id="9183" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9184">
                                    <p id="9184" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9185">
                                    <p id="9185" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9186">
                                    <p id="9186" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9187">
                                    <p id="9187" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9188">
                                    <p id="9188" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9189">
                                    <p id="9189" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9190">
                                    <p id="9190" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9191">
                                    <p id="9191" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9192">
                                    <p id="9192" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9193">
                                    <p id="9193" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9194">
                                    <p id="9194" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9195">
                                    <p id="9195" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9196">
                                    <p id="9196" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9197">
                                    <p id="9197" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9198">
                                    <p id="9198" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9199">
                                    <p id="9199" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9200">
                                    <p id="9200" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9201">
                                    <p id="9201" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9202">
                                    <p id="9202" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9203">
                                    <p id="9203" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9204">
                                    <p id="9204" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9205">
                                    <p id="9205" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9206">
                                    <p id="9206" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9207">
                                    <p id="9207" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9208">
                                    <p id="9208" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9209">
                                    <p id="9209" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9210">
                                    <p id="9210" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9211">
                                    <p id="9211" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9212">
                                    <p id="9212" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9213">
                                    <p id="9213" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9214">
                                    <p id="9214" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9215">
                                    <p id="9215" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9216">
                                    <p id="9216" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9217">
                                    <p id="9217" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9218">
                                    <p id="9218" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9219">
                                    <p id="9219" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9220">
                                    <p id="9220" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9221">
                                    <p id="9221" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9222">
                                    <p id="9222" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9223">
                                    <p id="9223" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9224">
                                    <p id="9224" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9225">
                                    <p id="9225" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9226">
                                    <p id="9226" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9227">
                                    <p id="9227" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9228">
                                    <p id="9228" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9229">
                                    <p id="9229" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9230">
                                    <p id="9230" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9231">
                                    <p id="9231" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9232">
                                    <p id="9232" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9233">
                                    <p id="9233" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9234">
                                    <p id="9234" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9235">
                                    <p id="9235" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9236">
                                    <p id="9236" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9237">
                                    <p id="9237" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9238">
                                    <p id="9238" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9239">
                                    <p id="9239" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9240">
                                    <p id="9240" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9241">
                                    <p id="9241" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9242">
                                    <p id="9242" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9243">
                                    <p id="9243" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9244">
                                    <p id="9244" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9245">
                                    <p id="9245" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9246">
                                    <p id="9246" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9247">
                                    <p id="9247" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9248">
                                    <p id="9248" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9249">
                                    <p id="9249" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9250">
                                    <p id="9250" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9251">
                                    <p id="9251" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9252">
                                    <p id="9252" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9253">
                                    <p id="9253" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9254">
                                    <p id="9254" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9255">
                                    <p id="9255" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9256">
                                    <p id="9256" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9257">
                                    <p id="9257" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9258">
                                    <p id="9258" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9259">
                                    <p id="9259" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9260">
                                    <p id="9260" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9261">
                                    <p id="9261" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9262">
                                    <p id="9262" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9263">
                                    <p id="9263" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9264">
                                    <p id="9264" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9265">
                                    <p id="9265" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9266">
                                    <p id="9266" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9267">
                                    <p id="9267" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9268">
                                    <p id="9268" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9269">
                                    <p id="9269" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9270">
                                    <p id="9270" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9271">
                                    <p id="9271" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9272">
                                    <p id="9272" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9273">
                                    <p id="9273" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9274">
                                    <p id="9274" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9275">
                                    <p id="9275" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9276">
                                    <p id="9276" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9277">
                                    <p id="9277" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9278">
                                    <p id="9278" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9279">
                                    <p id="9279" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9280">
                                    <p id="9280" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9281">
                                    <p id="9281" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9282">
                                    <p id="9282" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9283">
                                    <p id="9283" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9284">
                                    <p id="9284" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9285">
                                    <p id="9285" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9286">
                                    <p id="9286" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9287">
                                    <p id="9287" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9288">
                                    <p id="9288" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9289">
                                    <p id="9289" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9290">
                                    <p id="9290" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9291">
                                    <p id="9291" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9292">
                                    <p id="9292" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9293">
                                    <p id="9293" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9294">
                                    <p id="9294" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9295">
                                    <p id="9295" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9296">
                                    <p id="9296" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9297">
                                    <p id="9297" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9298">
                                    <p id="9298" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9299">
                                    <p id="9299" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9300">
                                    <p id="9300" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9301">
                                    <p id="9301" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9302">
                                    <p id="9302" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9303">
                                    <p id="9303" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9304">
                                    <p id="9304" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9305">
                                    <p id="9305" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9306">
                                    <p id="9306" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9307">
                                    <p id="9307" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9308">
                                    <p id="9308" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9309">
                                    <p id="9309" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9310">
                                    <p id="9310" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9311">
                                    <p id="9311" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9312">
                                    <p id="9312" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9313">
                                    <p id="9313" >17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9314">
                                    <p id="9314" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9315">
                                    <p id="9315" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9316">
                                    <p id="9316" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9317">
                                    <p id="9317" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9318">
                                    <p id="9318" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9319">
                                    <p id="9319" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9320">
                                    <p id="9320" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9321">
                                    <p id="9321" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9322">
                                    <p id="9322" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9323">
                                    <p id="9323" >27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9324">
                                    <p id="9324" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9325">
                                    <p id="9325" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9326">
                                    <p id="9326" >30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9327">
                                    <p id="9327" >15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9328">
                                    <p id="9328" >16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9330">
                                    <p id="9330" >18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9331">
                                    <p id="9331" >19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9332">
                                    <p id="9332" >20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9333">
                                    <p id="9333" >21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9334">
                                    <p id="9334" >22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9335">
                                    <p id="9335" >23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9336">
                                    <p id="9336" >24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9337">
                                    <p id="9337" >25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9338">
                                    <p id="9338" >26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9340">
                                    <p id="9340" >28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9341">
                                    <p id="9341" >29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="charlottetheater" className="BB2">

    
                
                
    
                
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

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

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
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    12
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="charlottetheater" className="C1C2">

    
                
                <div className="seattable_zone_container">
                    
                    <div id="seattable_zone">C</div>
                    
                </div>
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9343">
                                    <p id="9343" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9344">
                                    <p id="9344" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9345">
                                    <p id="9345" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9346">
                                    <p id="9346" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9347">
                                    <p id="9347" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9348">
                                    <p id="9348" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9349">
                                    <p id="9349" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9350">
                                    <p id="9350" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9351">
                                    <p id="9351" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9352">
                                    <p id="9352" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9353">
                                    <p id="9353" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9354">
                                    <p id="9354" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9355">
                                    <p id="9355" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9356">
                                    <p id="9356" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9357">
                                    <p id="9357" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9358">
                                    <p id="9358" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9359">
                                    <p id="9359" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9360">
                                    <p id="9360" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9361">
                                    <p id="9361" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9362">
                                    <p id="9362" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9363">
                                    <p id="9363" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9364">
                                    <p id="9364" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9365">
                                    <p id="9365" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9366">
                                    <p id="9366" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9367">
                                    <p id="9367" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9368">
                                    <p id="9368" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9369">
                                    <p id="9369" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9370">
                                    <p id="9370" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9371">
                                    <p id="9371" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9372">
                                    <p id="9372" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9373">
                                    <p id="9373" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9374">
                                    <p id="9374" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9375">
                                    <p id="9375" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9376">
                                    <p id="9376" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9377">
                                    <p id="9377" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9378">
                                    <p id="9378" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9379">
                                    <p id="9379" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9380">
                                    <p id="9380" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9381">
                                    <p id="9381" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9382">
                                    <p id="9382" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9383">
                                    <p id="9383" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9384">
                                    <p id="9384" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9385">
                                    <p id="9385" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9386">
                                    <p id="9386" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9387">
                                    <p id="9387" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9388">
                                    <p id="9388" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9389">
                                    <p id="9389" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9390">
                                    <p id="9390" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9391">
                                    <p id="9391" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9392">
                                    <p id="9392" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9393">
                                    <p id="9393" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9394">
                                    <p id="9394" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9395">
                                    <p id="9395" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9396">
                                    <p id="9396" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9397">
                                    <p id="9397" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9398">
                                    <p id="9398" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9399">
                                    <p id="9399" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9400">
                                    <p id="9400" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9401">
                                    <p id="9401" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9402">
                                    <p id="9402" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9403">
                                    <p id="9403" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9404">
                                    <p id="9404" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9405">
                                    <p id="9405" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9406">
                                    <p id="9406" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9407">
                                    <p id="9407" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9408">
                                    <p id="9408" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9409">
                                    <p id="9409" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9410">
                                    <p id="9410" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9411">
                                    <p id="9411" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9412">
                                    <p id="9412" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9413">
                                    <p id="9413" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9414">
                                    <p id="9414" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9415">
                                    <p id="9415" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9416">
                                    <p id="9416" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9417">
                                    <p id="9417" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9418">
                                    <p id="9418" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9419">
                                    <p id="9419" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9420">
                                    <p id="9420" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9421">
                                    <p id="9421" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9422">
                                    <p id="9422" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9423">
                                    <p id="9423" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9424">
                                    <p id="9424" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9425">
                                    <p id="9425" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9426">
                                    <p id="9426" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9427">
                                    <p id="9427" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9428">
                                    <p id="9428" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9429">
                                    <p id="9429" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9430">
                                    <p id="9430" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9431">
                                    <p id="9431" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9432">
                                    <p id="9432" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9433">
                                    <p id="9433" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9434">
                                    <p id="9434" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9435">
                                    <p id="9435" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9436">
                                    <p id="9436" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9437">
                                    <p id="9437" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9438">
                                    <p id="9438" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9439">
                                    <p id="9439" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9440">
                                    <p id="9440" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9441">
                                    <p id="9441" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9442">
                                    <p id="9442" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9443">
                                    <p id="9443" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9444">
                                    <p id="9444" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9445">
                                    <p id="9445" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9446">
                                    <p id="9446" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9447">
                                    <p id="9447" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9448">
                                    <p id="9448" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9449">
                                    <p id="9449" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9450">
                                    <p id="9450" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9451">
                                    <p id="9451" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9452">
                                    <p id="9452" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9453">
                                    <p id="9453" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9454">
                                    <p id="9454" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9455">
                                    <p id="9455" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9456">
                                    <p id="9456" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9457">
                                    <p id="9457" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9458">
                                    <p id="9458" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9459">
                                    <p id="9459" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9460">
                                    <p id="9460" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9461">
                                    <p id="9461" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9462">
                                    <p id="9462" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9463">
                                    <p id="9463" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9464">
                                    <p id="9464" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9465">
                                    <p id="9465" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9466">
                                    <p id="9466" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9467">
                                    <p id="9467" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9468">
                                    <p id="9468" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9469">
                                    <p id="9469" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9470">
                                    <p id="9470" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9471">
                                    <p id="9471" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9472">
                                    <p id="9472" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9473">
                                    <p id="9473" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9474">
                                    <p id="9474" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9475">
                                    <p id="9475" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9476">
                                    <p id="9476" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9477">
                                    <p id="9477" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9478">
                                    <p id="9478" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9479">
                                    <p id="9479" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9480">
                                    <p id="9480" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9481">
                                    <p id="9481" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9482">
                                    <p id="9482" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9483">
                                    <p id="9483" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9484">
                                    <p id="9484" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9485">
                                    <p id="9485" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9486">
                                    <p id="9486" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9487">
                                    <p id="9487" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9488">
                                    <p id="9488" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9489">
                                    <p id="9489" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9490">
                                    <p id="9490" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9491">
                                    <p id="9491" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9492">
                                    <p id="9492" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9493">
                                    <p id="9493" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9494">
                                    <p id="9494" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9495">
                                    <p id="9495" >31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9496">
                                    <p id="9496" >32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9497">
                                    <p id="9497" >33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9498">
                                    <p id="9498" >34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9499">
                                    <p id="9499" >35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9500">
                                    <p id="9500" >36</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9501">
                                    <p id="9501" >37</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9502">
                                    <p id="9502" >38</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9503">
                                    <p id="9503" >39</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9504">
                                    <p id="9504" >40</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9505">
                                    <p id="9505" >41</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9506">
                                    <p id="9506" >42</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9507">
                                    <p id="9507" >43</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="9508">
                                    <p id="9508" >44</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            


        </div>
    </div>
    
        </>
    );
}

export default SecondFloorChar;