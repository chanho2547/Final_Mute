import React from "react";
import Edit from "./Edit";
import MyMuReview from "../review/MyMuReview";
import MyWish from "../util/MyWish";
import MySeReview from "../review/MySeReview";


const MyPage = () => {
    const userId = window.localStorage.getItem("whoLogin");
    console.log(userId);

    return(

        <>

            <Edit/>
            <div>
                
            </div>
            <MyWish/>
            <MyMuReview/>
            <MySeReview/>
        </>
    )
}

export default MyPage;