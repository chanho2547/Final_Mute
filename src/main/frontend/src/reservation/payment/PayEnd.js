
// 여기서 나중에 payment 페이지에 추가, ticket 테이블에도 추가하는 코드 , 그리도 다 되면 화면 닫기


let myTimer = setTimeout(function() {
    window.close();
  }, 3000);

const PayEnd = () => {
    console.log("PayEnd 입니다");
    clearTimeout(myTimer);
    return (
        <>
        <h1>결제 완료 되었습니다. 3초후 팝업이 종료됩니다</h1>
        </>
    );
}

export default PayEnd;