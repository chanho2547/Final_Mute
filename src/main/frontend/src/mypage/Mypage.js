import React from "react";
import Edit from "./Edit";
import MyReview from "../review/MyReview";
import MyWish from "../util/MyWish";


const MyPage = () => {
    const userId = window.localStorage.getItem("whoLogin");
    console.log(userId);

    return(

        <>

            <Edit/>
            <div>
                
            </div>
            <MyWish/>
            <MyReview/>
        </>
    )
}

export default MyPage;