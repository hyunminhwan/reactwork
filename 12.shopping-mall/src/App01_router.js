import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import sm3 from "./img/sm3.jpg";
import { useState } from 'react';
import pList from './data/ProductList';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
// import {num1,num2} from './data/ProductList';
/*
  * react-router-dom
  -기존의 페이지 나누기
  만약 /detail로 접속하면 기존의 index.html파일을 모두 비운 후 페이지를 보여줌
  -페이지를 교체시켜주는 api : router-dom

  * 실행 순서
  1. 설치 : npm i react-router-dom
  2. index.js 파일에서 <BrowserRouter></BrowserRouter>
*/

function App() {
  let [clothes, setClothes] = useState(pList);
  //페이지의 이동을 도와주는 함수
  let navigate = useNavigate();

  return (

    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>상세페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
            {/* <Nav.Link onClick={() => { navigate(1) }}>앞으로</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1) }}>뒤로</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link> &emsp;
          <Link to="/detail">상세페이지</Link> */}

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
                <div className='main-bg' />
                <br />
              </>
            } />
           {/* <Route path='/detail' element={<Detail clothes={clothes}/>} />    하나의 페이지  */}
            {/* <Route path='/detail/1' element={<Detail clothes={clothes[1]}/>} />
            path에 파라미터로 넘겨줄 수 있음  
            path='/detail/:작명'
            */}
            
            <Route path='/detail/:index/:member' element={<Detail clothes={clothes}/>}/>
            <Route path='/detail/:index/:name/:member' element={<Detail clothes={clothes}/>}/>

            <Route path='/cart' element={<div>장바구니</div>} />

            {/* 
            <Route path='/about' element={<div><About/></div>} />
            <Route path='/about/member' element={<div>사람의정보</div>} />
            <Route path='/about/location' element={<div>강남대로</div>} />
             */}
           {/* NesterdRoutes ~~의 하위의 것들을 하위요소로 넣어서 페이지 보여주기 */}
           <Route path='/about'element={<About/>}>
              <Route path='member' element={<div><h3>사람의정보</h3></div>} />
              <Route path='location' element={<div>강남대로</div>} />
           </Route>
            <Route path='*' element={<div>없는 페이지 입니다.</div>}/>
          </Routes>


          {/* <Col lg={4}>
          <img id="a" src="/img/sm1.jpg" />
          <h4>{clothes[0].title}</h4>
          <p>{clothes[0].price}</p>
        </Col>
        <Col lg={4}>
         배포시 ~~~.com의 경로에 배포하면 상관없지만 ~~~.com/~~~/~~ 이런 하위경로이면 그림을 못찾는다고 
          <img id="a" src={`${process.env.PUBLIC_URL}/img/sm2.jpg`} />
          <h4>{clothes[1].title}</h4>
          <p>{clothes[1].price}</p>
          
        </Col>
        <Col lg={4}>
          <img id="a" src={sm3} />
          <h4>{clothes[2].title}</h4>
          <p>{clothes[2].price}</p>
        </Col> */}


        </Row>
      </Container>
    </div>
  );
}

function About() {
  return(
    <>
      <h4>회사 정보들</h4>
      <p>더조은 회사</p>
      <Outlet></Outlet>
    </>
  )
}


function PListCol(props) {
  return (
    <>
      <Col lg={4}>
        <img id="a" src={`${process.env.PUBLIC_URL}/img/sm${props.i}.jpg`} />
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
        <h4>{props.clothes.content}</h4>
      </Col>
    </>
  )
}

/*
  매우 작은 기기(모바일) - xs{} 너비가 768px미만인 화면
  작은 기기(태블릿) - sm{} 너비가 992px미만인 화면
  중간 기기(노트북) - md{} 너비가 1280px미만인 화면
  큰 기기(데스크탑) - lg{} 너비가 1200px이상인 화면

  - 한 행에 12개의 열을 가진다 (중간 기기 이상일 때)
  <Col md={4}> -> 12중 4개 차지
  <Col md={4}> -> 8중 4개 차지
  <Col md={2}> -> 4중 2개 차지
  <Col md={2}> -> 2중 2개 차지
*/

export default App;
