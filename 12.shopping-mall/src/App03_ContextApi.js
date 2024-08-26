import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { createContext, useState } from 'react';
import pList from './data/ProductList';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
/*
    *single page application의 단점
        -컴포넌트사이의 state공유 어려움
        -props로 넘겨줘야한다

    *공유하는 파일을 만들어서 사용
        1. Context Api문법
            잘 사용하지 않음
            -성능 이슈
            -재 사용이 어렵다
        2. Redux 같은 외부 라이브러리
            주로 사용
*/

//1. Context Api
/*
    순서
      1) createContext()
      2) Context1.Provider 로 감싸기
      3) 하위 컴포넌트에서 사용 : useContext(Context1)

*/
//createContext() : 보관함을 하나 만들었다 생각하면 됨
export let Context1 =createContext();

function App() {
  let [clothes, setClothes] = useState(pList);
  let [count, setCount] = useState(2);

 
  let navigate = useNavigate();
  let [stock,setStock]=useState([10,7,5]);

  return (

    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>상세페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Routes>
            <Route path='/' element={
              <>
                <div className='main-bg' />
                <br />
                {
                  clothes.map((pClothes, i) => {
                    return (
                      <PListCol clothes={pClothes} i={i + 1} />
                    )
                  })
                }
                <Button variant="info" onClick={() => {

                  axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${Number(count)}.json`)
                    .then((result) => {
                      let copy = [...clothes, ...result.data];
                      setClothes(copy);
                      setCount(count + 1);
                      //setClothes([...result.data,...clothes]);
                    })
                    .catch(() => {
                      console.log('실패');
                      alert('더이상 상품이 없습니다');
                    }

                    )
                }}>서버에서 데이터 가져오기</Button>


              </>
            } />
          <Route path='/detail/:index' element={
            //<Context1.Provider value={{stock,clothes}}>여러개 넘겨줄때
            <Context1.Provider value={{stock,clothes}}>
            <Detail clothes={clothes}/>
            </Context1.Provider>
            }/>
            <Route path='*' element={<div>없는 페이지 입니다.</div>} />
          </Routes>
        </Row>
      </Container>

    </div>

  );
}

function PListCol(props) {
  return (
    <>
      <Col lg={4} >
       
          <img id="a" src={`${process.env.PUBLIC_URL}/img/sm${props.i}.jpg`} />
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.price}</p>
          <h4>{props.clothes.content}</h4>
      </Col>
    </>
  )
}


export default App;
