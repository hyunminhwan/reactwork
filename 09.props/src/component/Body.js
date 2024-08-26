import Button from "./Button";
import Header from "./Header";
/*
// 1.부모로 부터 값 넘겨 받기
const Body =(p) =>{
    return(
        <>
            <h1>본문입니다</h1>
            <p>{p.address}</p>
            <p>{p.user}</p>
            
        </>
    )
}
*/

/*
// 2.1 부모로 부터
const Body =(p) =>{
    return(
        <>
            <h1>본문입니다</h1>
            <p>{p.user.name}님은</p>
            <p>{p.user.addr}에 살고 있고</p>
            <p>취미는 {p.user.likeList[1]}입니다</p>
            <p>{p.user.likeList}의{p.user.likeList.length}개를 좋아합니다</p>
        </>
    )
}
*/
/*
//2.2 객체형태의 값을 풀어서 넘겨준 값 받기
const Body =({name,addr,likeList}) =>{
    return(
        <>
            <h1>본문입니다</h1>
            <p>{name}님은</p>
            <p>{addr}에 살고 있고</p>
            <p>취미는 {likeList[1]}입니다</p>
            <p>{likeList}의{likeList.length}개를 좋아합니다</p>
        </>
    )
}
*/
//3.
const Body = () =>{
    function btnClick(e){
        alert("버튼 누르지마");
        console.log(e);
    }
    const btnPrrops={
        text : "1번버튼",
        color : "hotpink",
        a:"blue",
        b:2,
        c:3
    }
    return (
        <>
            <h3>본문입니다</h3>
            <button onClick={btnClick} name="A버튼" className="btn">A이벤트 버튼</button><br/><br/>
            <button onClick={btnClick} name="B버튼" className="btn">B이벤트 버튼</button><br/><br/>
            <Button {...btnPrrops}/>
        </>
    )
}
export default Body;