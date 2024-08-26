import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from'./pages/Cart';
/* 
  **장바구니 만들기

  *외부 라이브러리 사용(Redux)
   1) 설치 : npm install @reduxjs/toolkit react-redux
   2) store 폴더 만들고 , store.js파일 만들기
   3)index.js <Provider>로 감싸기
*/
function App() {
  let [clothes, setClothes] = useState(pList);
  let [count, setCount] = useState(2);
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
                      <PListCol clothes={pClothes} i={i +1} />
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

          <Route path='/detail/:index' element={<Detail clothes={clothes} />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<div>없는 페이지 입니다.</div>} />
          </Routes>
        </Row>
      </Container>

    </div>

  );
}

function PListCol(props) {
  let navigate = useNavigate();
  return (
    <>
      <Col lg={4}  onClick={() => navigate(`/detail/${props.clothes.id}`)}>
          <img id="a" src={`${process.env.PUBLIC_URL}/img/sm${props.i}.jpg`} />
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.price}</p>
          <h4>{props.clothes.content}</h4>
      </Col>
    </>
  )
}


export default App;
