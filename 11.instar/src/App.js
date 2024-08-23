import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let [count, setCount] = useState([0,0,0]);
  let [title, setTitle] = useState(["초밥", "찬란한 아구", "역전우동"]);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);  //div의 index번호를 변경 [0,1,2]
  let [inputValue, setInputValue] = useState("");


  return (
    <div className="App">
      <h2 className="title">맛집 추천 INSTAR</h2>
      {/*<button onClick={() => {setTitle('청담등심');}}>글수정</button> => 원본이 바뀜 */}
      <button onClick={() => {
        let copy = [...title]; {/* ...title = "초밥", "찬란한 아구", "역전우동"*/}
        copy[0] = "청담등심";
        setTitle(copy);
        }}>글수정</button>

{
  
        title.map(function(t, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setModalIndex(i)}}>{t}</h4>

              <p>8월 22일  <span onClick={() => {
                 let copy = [...count];
                 copy[i] = copy[i] + 1;
                 setCount(copy);
                }}>🍽</span>{count[i]}</p>

                <button onClick={()=>{
                  let copy_delete=[...title];
                  copy_delete.splice(i,1);
                  setTitle(copy_delete);
                }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{setInputValue(e.target.value)}}/>
      <button onClick={()=>{
        let copy =[...title];
        copy.unshift(inputValue);
        setTitle(copy);
      }}>글추가</button>

      { modal ? <Modal title={title} modalIndex={modalIndex} setTitle={setTitle}/> : null }

    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[props.modalIndex] = "청담등심";
        props.setTitle(copy);
      }}>글제목 수정</button>
      
    </div>
  );
}
export default App;
