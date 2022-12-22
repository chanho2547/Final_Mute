import React from "react";
import Edit from "./Edit";

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
        </>
    )
}

export default MyPage;