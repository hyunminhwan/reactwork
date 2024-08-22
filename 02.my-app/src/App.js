// import './App.css';


// // 별도의 파일로 사용
// function App() {
//   return (
//     <div>
//       <h1>더 조은에 오신것을 환영합니다</h1>
//       <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정 </h3>
//       <p className="class1">reatc style 적용하기</p>
//       <p id="id1">id로 style 적용하기</p>


//     </div>    
//   );
// }
/*
function App() {
  const style ={
    div :{
      backgroundColor : 'yellow',
      padding : '50px',
      textAlign : 'center',
      fontSize : '30px'
    },
    h1 : {
      color : "red"
    },
    class1 : {
      color : 'yellow'
    },
    id1 : {
      color:'pink'
    }

  }
  return (
    <div style={style.div}>
      <h1 style={style.h1}>더 조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정 </h3>
      <p style={style.class1}>reatc style 적용하기</p>
      <p style={style.id1}>id로 style 적용 하기</p>
    </div>    
  );
}
*/
function App() {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'red' , backgroundColor:'green'}}>더 조은에 오신것을 환영합니다</h1>
      <h3 style>의료용 디지털 영상 표준 활용 실무 프로젝트 과정 </h3>
      <p >reatc style 적용하기</p>
      <p >id로 style 적용 하기</p>
    </div>    
  );
}
export default App;

